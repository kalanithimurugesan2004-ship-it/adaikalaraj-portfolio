const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '.output', 'public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
const indexJsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Adaikalaraj Selvaraj | Mechanical Design Engineer | Portfolio</title>
    <link rel="stylesheet" href="./assets/${cssFile}" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./assets/${indexJsFile}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);
fs.writeFileSync(path.join(publicDir, '404.html'), htmlContent);

console.log('Successfully generated static index.html and 404.html for GitHub Pages!');
