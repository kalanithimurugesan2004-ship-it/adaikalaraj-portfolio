const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const indexPath = path.join(docsDir, 'index.html');
const fallbackPath = path.join(docsDir, '404.html');

let html = fs.readFileSync(indexPath, 'utf8');

// Find asset files in docs/assets
const assetsDir = path.join(docsDir, 'assets');
const files = fs.readdirSync(assetsDir);

const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
const portraitFile = files.find(f => f.startsWith('hero-portrait-') && f.endsWith('.png'));

// Replace dev server paths with static production bundle relative paths
html = html.replaceAll('/src/assets/hero-portrait.png', `./assets/${portraitFile}`);
html = html.replaceAll('/src/styles.css', `./assets/${cssFile}`);
html = html.replaceAll('/@tanstack-start/styles.css?routes=__root__%2C%2F', `./assets/${cssFile}`);
html = html.replaceAll('/favicon.ico', `./favicon.ico`);

// Remove dev-only client script tags
html = html.replace(/<script type="module" src="\/@id\/virtual:tanstack-start-dev-client-entry"><\/script>/g, '');
html = html.replace(/<link rel="modulepreload" href="\/@id\/virtual:tanstack-start-dev-client-entry"\/>/g, '');

fs.writeFileSync(indexPath, html);
fs.writeFileSync(fallbackPath, html);

console.log('Successfully fixed asset URLs in docs/index.html & docs/404.html!');
