const fs = require('fs');

try {
  let html = fs.readFileSync('products.html', 'utf8');

  // 1. Extract CSS
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    fs.writeFileSync('src/pages/ProductsPage.css', styleMatch[1]);
  }

  // 2. Extract Body
  let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  if (!bodyMatch) {
    console.log("No body found");
    process.exit(1);
  }
  let body = bodyMatch[1];

  // 3. Remove script tags
  body = body.replace(/<script[\s\S]*?<\/script>/g, '');

  // 4. Remove the hardcoded navbar div and footer since they are handled by React
  body = body.replace(/<div id="react-navbar"><\/div>/g, '');

  // 5. Convert class to className
  body = body.replace(/class=/g, 'className=');
  body = body.replace(/for=/g, 'htmlFor=');

  // 6. Convert inline styles
  body = body.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (styleString.includes('--i:')) {
      let val = styleString.split(':')[1].trim();
      return `style={{"--i": ${val}}}`;
    }
    let styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      let parts = rule.split(':');
      if (parts.length < 2) return;
      let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      let val = parts.slice(1).join(':').trim();
      styleObj[key] = val;
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // 7. Fix unclosed tags (img, input, br, hr)
  body = body.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  body = body.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  body = body.replace(/<br>/g, '<br />');
  body = body.replace(/<hr>/g, '<hr />');

  // 8. Convert onclick="window.location.href='something.html'" to onClick={() => window.location.href='something.html'}
  body = body.replace(/onclick="([^"]*)"/g, (match, code) => {
    return `onClick={() => { ${code.replace(/"/g, "'")} }}`;
  });

  // 9. Convert HTML comments
  body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  
  // 10. Fix arbitrary unclosed things or common JSX syntax errors
  // aria-hidden="true" is fine.
  
  const jsxTemplate = `
import React, { useEffect } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  useEffect(() => {
    // Basic filter logic
    const chips = document.querySelectorAll('.chip');
    const cards = document.querySelectorAll('.card');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-cat') === filter) {
            card.style.display = 'block';
            setTimeout(() => card.classList.add('visible'), 10);
          } else {
            card.style.display = 'none';
            card.classList.remove('visible');
          }
        });
      });
    });

    // Make cards initially visible
    cards.forEach(card => card.classList.add('visible'));
  }, []);

  return (
    <div className="products-page-container">
      ${body}
    </div>
  );
};

export default ProductsPage;
`;

  fs.writeFileSync('src/pages/ProductsPage.jsx', jsxTemplate);
  console.log("Success");
} catch (e) {
  console.error("Error:", e);
}
