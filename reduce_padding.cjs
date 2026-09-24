const fs = require('fs');
const path = require('path');

const cssFiles = [
  'src/index.css',
  'src/pages/AboutPage.css',
  'src/pages/ServicesPage.css',
  'src/pages/ProductsPage.css'
];

cssFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reduce large rem paddings
    content = content.replace(/padding:\s*([4-9]|1[0-5])(\.[0-9]+)?rem\s+0/g, (match, p1, p2) => {
      const val = parseFloat(p1 + (p2 || ''));
      return `padding: ${Math.max(2, val / 2)}rem 0`;
    });

    content = content.replace(/padding:\s*([4-9]|1[0-5])(\.[0-9]+)?rem\s+([0-9\.]+)rem/g, (match, p1, p2, p3) => {
      const val = parseFloat(p1 + (p2 || ''));
      return `padding: ${Math.max(2, val / 2)}rem ${p3}rem`;
    });

    content = content.replace(/padding-block:\s*([4-9]|1[0-5])(\.[0-9]+)?rem/g, (match, p1, p2) => {
      const val = parseFloat(p1 + (p2 || ''));
      return `padding-block: ${Math.max(2, val / 2)}rem`;
    });
    
    content = content.replace(/padding-top:\s*([4-9]|1[0-5])(\.[0-9]+)?rem/g, (match, p1, p2) => {
      const val = parseFloat(p1 + (p2 || ''));
      return `padding-top: ${Math.max(2, val / 2)}rem`;
    });
    
    content = content.replace(/padding-bottom:\s*([4-9]|1[0-5])(\.[0-9]+)?rem/g, (match, p1, p2) => {
      const val = parseFloat(p1 + (p2 || ''));
      return `padding-bottom: ${Math.max(2, val / 2)}rem`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
  }
});
