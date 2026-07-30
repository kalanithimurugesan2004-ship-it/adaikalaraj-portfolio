const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

// 1. Read original JPG image
const origJpgPath = 'C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\a0941c57-5a1f-46a5-9740-ca09ddf28021\\media__1785351466183.jpg';
const origJpgData = fs.readFileSync(origJpgPath);
const rawJpg = jpeg.decode(origJpgData, { useTolerant: true }); // width, height, data (RGBA)

const w = rawJpg.width;
const h = rawJpg.height;

console.log(`Processing JPG: ${w}x${h}`);

const outPng = new PNG({ width: w, height: h });

// Copy JPG RGB data to PNG
for (let i = 0; i < rawJpg.data.length; i += 4) {
  outPng.data[i] = rawJpg.data[i];
  outPng.data[i + 1] = rawJpg.data[i + 1];
  outPng.data[i + 2] = rawJpg.data[i + 2];
  outPng.data[i + 3] = 255;
}

// Flood fill from outer borders to isolate person contour
const visited = new Uint8Array(w * h);
const queue = [];

// Seed top, left, right borders (not bottom, to keep waist)
for (let x = 0; x < w; x++) {
  queue.push(x, 0);
  queue.push(x, 1);
  queue.push(x, 2);
}
for (let y = 0; y < h; y++) {
  queue.push(0, y);
  queue.push(1, y);
  queue.push(2, y);
  queue.push(w - 1, y);
  queue.push(w - 2, y);
  queue.push(w - 3, y);
}

let head = 0;
while (head < queue.length) {
  const px = queue[head++];
  const py = queue[head++];
  if (px < 0 || px >= w || py < 0 || py >= h) continue;
  const pidx = py * w + px;
  if (visited[pidx]) continue;
  visited[pidx] = 1;

  const idx = pidx << 2;
  const r = outPng.data[idx];
  const g = outPng.data[idx + 1];
  const b = outPng.data[idx + 2];

  // Studio grey background pixels in JPG are neutral grey (R~G~B within tolerance, and lightness between 90 and 205)
  const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
  const isGreyStudio = maxDiff <= 22 && r >= 75 && r <= 225 && g >= 75 && g <= 225 && b >= 75 && b <= 225;

  if (isGreyStudio) {
    outPng.data[idx + 3] = 0; // set alpha = 0 (100% transparent)

    // Expand 4-way
    if (px + 1 < w) queue.push(px + 1, py);
    if (px - 1 >= 0) queue.push(px - 1, py);
    if (py + 1 < h) queue.push(px, py + 1);
    if (py - 1 >= 0) queue.push(px, py - 1);
  }
}

// Smooth edge alpha channel for clean anti-aliased cutout
for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    const idx = (y * w + x) << 2;
    if (outPng.data[idx + 3] > 0) {
      // Check surrounding pixels transparency
      let transparentNeighbors = 0;
      const offsets = [-w - 1, -w, -w + 1, -1, 1, w - 1, w, w + 1];
      for (const off of offsets) {
        if (outPng.data[((y * w + x) + off) * 4 + 3] === 0) {
          transparentNeighbors++;
        }
      }
      if (transparentNeighbors >= 5) {
        outPng.data[idx + 3] = 0; // soften lone boundary pixels
      } else if (transparentNeighbors >= 2) {
        outPng.data[idx + 3] = 180; // edge anti-aliasing
      }
    }
  }
}

const outBuffer = PNG.sync.write(outPng);
const destPath = path.join(__dirname, 'src', 'assets', 'hero-portrait.png');
fs.writeFileSync(destPath, outBuffer);
console.log('SUCCESS: Saved pure transparent PNG cutout to ' + destPath);
