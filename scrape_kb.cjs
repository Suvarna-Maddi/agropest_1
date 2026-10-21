const fs = require('fs');
const path = require('path');

// Read all product HTML files in root
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'homepage.html' && f !== 'products.html' && f !== 'aboutus.html');

const products = [];

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  
  // Extract product title
  const h2Match = html.match(/<h2>(.*?)<\/h2>/i);
  const name = h2Match ? h2Match[1].trim() : file.replace('.html', '');

  // Extract tagline
  const taglineMatch = html.match(/<p class=["']tagline["']>(.*?)<\/p>/is);
  const tagline = taglineMatch ? taglineMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // Extract details
  const getField = (patterns) => {
    for (const pat of patterns) {
      const reg = new RegExp('<strong>\\s*' + pat + '\\s*:?\\s*<\\/strong>([\\s\\S]*?)(?:<\\/p>|<br\\s*\\/?>|<strong>|$)', 'i');
      const m = html.match(reg);
      if (m && m[1]) {
        const cleaned = m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        if (cleaned) return cleaned;
      }
    }
    return '';
  };

  const technicalName = getField(['Technical Name', 'Common Name', 'Composition', 'Chemical Name']);
  const crops = getField(['Major Crops', 'Crops', 'Target Crops', 'Recommended Crops', 'Crop']);
  const modeOfAction = getField(['Mode of Action', 'Mode of action', 'Use/Benefits', 'Benefits', 'Action']);
  const pests = getField(['Target Pests', 'Target Pest', 'Target Weeds', 'Target Diseases', 'Control Pests', 'Pests']);
  const presentation = getField(['Presentation Available', 'Available Packing', 'Packaging', 'Packing', 'Pack Size', 'Presentation']);
  const company = getField(['Company', 'Manufacturer', 'Brand']);
  const dosage = getField(['Dosage', 'Dose', 'Application Rate']);

  // Extract Image
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*class=["']product-img["']/i) || 
                   html.match(/<img[^>]+class=["']product-img["'][^>]*src=["']([^"']+)["']/i) ||
                   html.match(/<img[^>]+src=["']([^"']+\.(?:webp|png|jpg|jpeg))["']/i);
  const image = imgMatch ? imgMatch[1] : '';

  products.push({
    file,
    name,
    tagline,
    technicalName,
    crops,
    modeOfAction,
    pests,
    presentation,
    company: company || 'Adama / Syngenta / AgroPest Partner',
    dosage,
    image: image ? (image.startsWith('/') ? image : '/' + image) : '/logo.png'
  });
});

console.log('Successfully scraped products:', products.length);

// Also scrape general business info from website
const businessInfo = {
  name: 'AgroPest (Bhavani Traders)',
  description: 'Bhavani Traders is a trusted agricultural inputs and farming solutions provider based in Telangana, with over 18 years of farming excellence. We provide high-quality certified pesticides, insecticides, fungicides, herbicides, organic nutrients, fertilizers, sticky pest traps, and drone spraying services.',
  location: 'Bhavani Traders, Ananthapuram Village, Gadwal Mandal, Jogulamba Gadwal District, Telangana 509125',
  googleMapsUrl: 'https://maps.app.goo.gl/ac61RZiPrJ2QepAU9',
  phone: '+91 90142 55803',
  whatsapp: '+91 63024 61192',
  whatsappUrl: 'https://wa.me/916302461192',
  services: [
    { title: 'Drone Spraying Service', desc: 'Advanced autonomous drone spraying providing uniform coverage, 90% water saving, and rapid coverage of up to 30 acres/hour.' },
    { title: 'Farm Visits & Field Consultation', desc: 'On-site agricultural diagnosis, disease identification, soil condition advice, and personalized crop care regimens.' },
    { title: 'Crop Protection & Pesticides', desc: 'Direct supply of certified insecticides, fungicides, and herbicides for rice, cotton, chili, maize, groundnut, pulses, sugarcane, vegetables, and fruit orchards.' },
    { title: 'Organic Nutrients & Fertilizers', desc: 'Bio-organic soil enrichers, micro-nutrients, liquid nitrogen boosters, root developers, and bio-stimulants for superior harvest yields.' },
    { title: 'Pest Traps & Eco-Defense', desc: 'Yellow sticky traps, blue thrips traps, pheromone traps, and solar insect light traps for non-toxic pest monitoring and population control.' }
  ],
  categories: [
    'Insecticides (Stem borer, leaf folder, sucking pests, aphids, bollworms, thrips, mites, whiteflies, jassids)',
    'Herbicides (Broad-leaved weeds, grasses, sedges in rice, maize, cotton, sugarcane)',
    'Fungicides (Sheath blight, blast, powdery mildew, downy mildew, leaf spot, anthracnose, rust)',
    'Organic Nutrients & Bio-Fertilizers (Soil microbes, root boosters, organic yield enhancers)',
    'Pest Traps (Solar insect traps, sticky sheets, pheromone monitors)',
    'Agri Drone Spraying (Autonomous high-precision aerial spraying)'
  ]
};

const fullKnowledgeBase = {
  business: businessInfo,
  totalProducts: products.length,
  products: products
};

fs.writeFileSync('src/data/allProducts.json', JSON.stringify(fullKnowledgeBase, null, 2));
console.log('Knowledge base saved to src/data/allProducts.json.');
