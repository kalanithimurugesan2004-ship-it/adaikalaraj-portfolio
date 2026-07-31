const fs = require('fs');
const path = require('path');

async function captureRenderedHtml() {
  try {
    const res = await fetch('http://localhost:8080/');
    let html = await res.text();
    
    // Replace localhost absolute asset URLs with relative or absolute paths if needed
    const docsDir = path.join(__dirname, 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    fs.writeFileSync(path.join(docsDir, 'index.html'), html);
    fs.writeFileSync(path.join(docsDir, '404.html'), html);
    console.log('Successfully captured full rendered HTML from local server into docs/index.html!');
  } catch (err) {
    console.error('Error capturing HTML:', err);
    process.exit(1);
  }
}

captureRenderedHtml();
