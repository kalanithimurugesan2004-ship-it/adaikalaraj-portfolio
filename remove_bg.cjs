const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

// 1. Read the newly uploaded image with pure white background
const inputJpgPath = 'C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\a0941c57-5a1f-46a5-9740-ca09ddf28021\\media__1785385164073.jpg';
const inputData = fs.readFileSync(inputJpgPath);
const rawJpg = jpeg.decode(inputData, { useTolerant: true }); // width: 681, height: 1024

const w = rawJpg.width;
const h = rawJpg.height;

console.log(`Processing new clean photo: ${w}x${h}`);

const outPng = new PNG({ width: w, height: h });

// Copy RGB data
for (let i = 0; i < rawJpg.data.length; i += 4) {
  outPng.data[i] = rawJpg.data[i];
  outPng.data[i + 1] = rawJpg.data[i + 1];
  outPng.data[i + 2] = rawJpg.data[i + 2];
  outPng.data[i + 3] = 255;
}

// Flood fill from outer borders to convert pure white background to alpha=0
const isBg = new Uint8Array(w * h);
const queue = [];

// Seed top and side borders
for (let x = 0; x < w; x++) {
  queue.push(x, 0);
  queue.push(x, 1);
}
for (let y = 0; y < h; y++) {
  queue.push(0, y);
  queue.push(1, y);
  queue.push(w - 1, y);
  queue.push(w - 2, y);
}

let head = 0;
while (head < queue.length) {
  const px = queue[head++];
  const py = queue[head++];
  if (px < 0 || px >= w || py < 0 || py >= h) continue;
  const pidx = py * w + px;
  if (isBg[pidx]) continue;

  const idx = pidx << 2;
  const r = outPng.data[idx];
  const g = outPng.data[idx + 1];
  const b = outPng.data[idx + 2];

  // Pure white or near-white background condition
  const isWhiteBg = (r > 235 && g > 235 && b > 235);

  if (isWhiteBg) {
    isBg[pidx] = 1;
    outPng.data[idx + 3] = 0; // set 100% transparent

    // 4-way expand
    queue.push(px + 1, py);
    queue.push(px - 1, py);
    queue.push(px, py + 1);
    queue.push(px, py - 1);
  }
}

// Clean fringe pixels on the boundary
for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    const idx = (y * w + x) << 2;
    if (outPng.data[idx + 3] === 255) {
      let bgCount = 0;
      const neighbors = [-w - 1, -w, -w + 1, -1, 1, w - 1, w, w + 1];
      for (const off of neighbors) {
        if (outPng.data[((y * w + x) + off) * 4 + 3] === 0) bgCount++;
      }
      if (bgCount >= 5) {
        outPng.data[idx + 3] = 0;
      } else if (bgCount >= 2) {
        outPng.data[idx + 3] = 140; // smooth edge feather
      }
    }
  }
}

const outBuffer = PNG.sync.write(outPng);
const destPath = path.join(__dirname, 'src', 'assets', 'hero-portrait.png');
fs.writeFileSync(destPath, outBuffer);
console.log('SUCCESS: Converted clean white background to transparent PNG at ' + destPath);
