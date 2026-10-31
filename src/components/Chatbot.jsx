import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import knowledgeBase from '../data/allProducts.json';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Namaste! I am Agro AI, your 24/7 farming and crop care assistant for AgroPest & Bhavani Traders.",
      quickSuggestions: [
        "What products do you have?",
        "Drone spraying service details",
        "Pesticides for Stem Borer in Rice",
        "Where is your store located?",
        "How can I contact or call?"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Comprehensive AI response generator trained on the entire scraped dataset
  const generateResponse = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();
    const { business, products } = knowledgeBase;

    // 1. Greetings & identity
    if (/^(hi|hello|hey|namaste|vanakkam|good\s*(morning|afternoon|evening)|hola)\b/i.test(q)) {
      return {
        text: `Hello and welcome to **AgroPest & Bhavani Traders**! 🌱\n\nI can help you with:\n- Identifying recommended pesticides, fungicides, or herbicides for your crops\n- Finding details on any of our **${knowledgeBase.totalProducts} agricultural products**\n- Drone spraying booking and pricing guidance\n- Field visits and expert consultations\n- Store directions to Bhavani Traders in Gadwal, Telangana\n\nHow can I help your farm today?`,
        suggestions: ["Products for Cotton", "Products for Paddy/Rice", "Drone Spraying", "Store Location"]
      };
    }

    // 2. Location / Address / Shop / Directions
    if (/where|location|address|locate|place|shop|store|bhavani traders|direction|gadwal|telangana/i.test(q)) {
      return {
        text: `📍 **Bhavani Traders Physical Store:**\n\n**Address:**\n${business.location}\n\n🕒 **Timings:** Monday - Sunday (8:00 AM - 8:30 PM)\n📞 **Phone:** [${business.phone}](tel:+919014255803)\n💬 **WhatsApp:** [Chat on WhatsApp](${business.whatsappUrl})\n\n🗺️ **Google Maps:** You can navigate directly using [Google Maps Location](${business.googleMapsUrl})!`,
        suggestions: ["Call Store Now", "Drone Spraying", "Browse Products"]
      };
    }

    // 3. Contact / Phone / WhatsApp / Consultation
    if (/contact|phone|call|number|mobile|whatsapp|talk|reach|help/i.test(q)) {
      return {
        text: `📞 **Contact AgroPest & Bhavani Traders:**\n\n- **Direct Call:** [${business.phone}](tel:+919014255803)\n- **WhatsApp Support:** [${business.whatsapp}](${business.whatsappUrl})\n- **Location:** Ananthapuram Village, Gadwal Mandal, Telangana\n\nFeel free to call us anytime for customized dose recommendations, crop issues, or wholesale enquiries!`,
        suggestions: ["Store Location", "Drone Spraying", "Ask about a Product"]
      };
    }

    // 4. Drone spraying service
    if (/drone|spray|aerial|acre|hectare|uav/i.test(q)) {
      return {
        text: `🚁 **Precision Drone Spraying Services:**\n\nAgroPest provides state-of-the-art agricultural drone operations across Telangana:\n\n✨ **Benefits:**\n- Up to **30 Acres covered per hour**\n- **90% water saving** compared to manual spraying\n- Ultra-fine droplet dispersion for 100% uniform canopy penetration\n- Zero human exposure to chemicals for maximum farmer safety\n- Ideal for Paddy, Cotton, Chili, Sugarcane, Maize, and Orchards\n\n📞 **Book a Drone Flight (Dedicated Number):** Call [${business.droneBookingPhone || '+91 90104 02648'}](tel:+919010402648) or message on [WhatsApp](${business.whatsappUrl}) for slot scheduling and per-acre pricing!`,
        suggestions: ["Book Drone Spraying", "Store Location", "View Pesticides"]
      };
    }

    // 5. Services / Field Visits
    if (/service|visit|consult|agronomist|field visit|inspection|diagnos/i.test(q)) {
      return {
        text: `🌾 **Our Complete Agricultural Services:**\n\n1. **Agri Drone Spraying:** Autonomous high-precision crop spraying.\n2. **Field Visits & Farm Inspection:** Our senior agronomists inspect your field on-site to diagnose diseases, deficiencies, and pests.\n3. **Tailored Crop Care Regimens:** Scientific spray schedules from seed sowing to harvest.\n4. **Soil & Nutrient Management:** Specialized organic fertilizers, micro-nutrients, and root boosters.\n\nTo request an expert farm visit, please contact [${business.phone}](tel:+919014255803).`,
        suggestions: ["Drone Spraying", "Contact Us", "Insecticides"]
      };
    }

    // Helper: Stopwords to ignore in general word searches
    const stopWords = new Set([
      'what', 'which', 'where', 'when', 'who', 'how', 'have', 'has', 'had', 'does', 'do', 'did',
      'can', 'could', 'would', 'should', 'tell', 'about', 'your', 'you', 'give', 'show', 'list',
      'product', 'products', 'item', 'items', 'medicine', 'medicines', 'spray', 'sprays',
      'available', 'detail', 'details', 'info', 'information', 'name', 'names', 'good', 'best',
      'crop', 'crops', 'problem', 'problems', 'solution', 'solutions', 'need', 'want', 'please',
      'any', 'some', 'all', 'the', 'and', 'for', 'with', 'from', 'into', 'there', 'here'
    ]);

    // 6a. Explicit Product Catalog / General Product enquiries
    // (e.g. "what products do you have", "show products", "products available", "products list")
    if (
      /^(what|show|list|give|tell|all|which)?\s*(are\s*)?(your\s*)?(products|items|medicines|chemicals)\s*(do\s*you\s*have|available|list|catalogue|catalog)?\??$/i.test(q) ||
      /^(what\s*products|all\s*products|product\s*list|products\s*list|show\s*products|our\s*products|products\b)/i.test(q)
    ) {
      return {
        text: `🌿 **AgroPest & Bhavani Traders Product Catalog:**\n\nWe stock over **${knowledgeBase.totalProducts}+ certified genuine agricultural solutions** across 5 primary categories:\n\n1. 🐛 **Insecticides (${knowledgeBase.products.filter(p => /insect|borer|hopper|aphid|worm|caterpillar/i.test(p.tagline + ' ' + p.pests + ' ' + p.modeOfAction)).length}+ products):** Controls stem borer, bollworms, leaf folders, aphids, whiteflies, thrips, and mites. (e.g., *Acemain, Agadi Super, Agas, Ampligo, Chess*)\n2. 🌿 **Herbicides:** Selective & non-selective solutions for grassy, broad-leaved, and sedge weed control. (e.g., *2,4-D Main, 2,4-D Agan, Agil, Barroz*)\n3. 🍄 **Fungicides:** Curative and preventative protection against sheath blight, blast, powdery mildew, and rust.\n4. 🌱 **Organic Nutrients & Fertilizers:** Micro-nutrients, liquid nitrogen enhancers, bio-stimulants, and root strengtheners.\n5. 🪤 **Eco Pest Traps:** Solar insect light traps, yellow sticky sheets, and blue thrips monitoring cards.\n\n👉 **Which category or crop would you like to explore?** You can also type a specific product name or pest!`,
        suggestions: ["Insecticides", "Herbicides", "Fungicides", "Organic Nutrients", "Products for Paddy", "Products for Cotton"]
      };
    }

    // 6b. Categories overview
    if (/categor|types of product|catalog|what do you sell/i.test(q)) {
      return {
        text: `📦 We offer over **${knowledgeBase.totalProducts} verified agricultural solutions** categorized into:\n\n1. 🐛 **Insecticides:** Sucking pests, stem borers, bollworms, aphids, thrips\n2. 🌿 **Herbicides:** Selective & non-selective weed control for grassy & broadleaf weeds\n3. 🍄 **Fungicides:** Blight, blast, rust, powdery/downy mildew, leaf spots\n4. 🌱 **Organic Nutrients & Bio-Fertilizers:** Micro-nutrients, zinc, boron, humic root developers\n5. 🪤 **Pest Traps:** Solar insect light traps, yellow sticky traps, blue thrips sheets\n\nWhich crop or pest problem are you dealing with?`,
        suggestions: ["Insecticides", "Herbicides", "Fungicides", "Organic Nutrients", "Pest Traps"]
      };
    }

    // 6c. Specific Category filter questions (e.g., "tell me insecticides", "show fungicides")
    if (/\b(insecticide|insecticides|pest\s*killer)\b/i.test(q) && !/where|drone|spray\s*hour/i.test(q)) {
      const topInsecticides = products.filter(p => /insect|borer|hopper|aphid|worm|caterpillar|fly|mite|thrip/i.test(p.tagline + ' ' + p.pests + ' ' + p.modeOfAction)).slice(0, 5);
      return {
        text: `🐛 **Certified Insecticides at Bhavani Traders:**\n\nWe provide top-tier formulations against sucking pests, borers, and worms:\n\n` +
          topInsecticides.map((p, idx) => `${idx + 1}. **[${p.name}](/${p.file})** - ${p.technicalName || p.tagline}\n   *Targets:* ${p.pests ? p.pests.split(',').slice(0, 4).join(', ') : 'Insects & Worms'}`).join('\n\n') +
          `\n\n🔗 [Browse all Insecticides in Product Catalog](/products?cat=insecticide) or ask for any product specifically!`,
        suggestions: topInsecticides.map(p => p.name)
      };
    }

    if (/\b(herbicide|herbicides|weedicide|weedicides|weed\s*control)\b/i.test(q)) {
      const topHerbicides = products.filter(p => /weed|herbicide|grass|broad-leaf/i.test(p.tagline + ' ' + p.modeOfAction)).slice(0, 5);
      return {
        text: `🌿 **Selective & Non-Selective Herbicides:**\n\nKeep your crop fields clean with our proven weedicides:\n\n` +
          topHerbicides.map((p, idx) => `${idx + 1}. **[${p.name}](/${p.file})** - ${p.technicalName || p.tagline}\n   *Application:* ${p.crops ? p.crops.split(',').slice(0, 3).join(', ') : 'Field Crops'}`).join('\n\n') +
          `\n\n🔗 [Browse all Herbicides in Product Catalog](/products?cat=herbicide) or type your crop name for weed guidance!`,
        suggestions: topHerbicides.map(p => p.name)
      };
    }

    if (/\b(fungicide|fungicides|fungal|blight|blast|mildew|rot)\b/i.test(q) && !/where|drone/i.test(q)) {
      const topFungicides = products.filter(p => /fungi|blight|blast|mildew|rust|spot|rot/i.test(p.tagline + ' ' + p.pests + ' ' + p.modeOfAction)).slice(0, 5);
      return {
        text: `🍄 **High-Performance Fungicides:**\n\nProtect your harvest against fungal blights, blasts, downy & powdery mildews, and leaf spots:\n\n` +
          (topFungicides.length > 0 ? topFungicides.map((p, idx) => `${idx + 1}. **[${p.name}](/${p.file})** - ${p.technicalName || p.tagline}\n   *Protects:* ${p.crops || 'Crops & Fruits'}`).join('\n\n') : 'Contact our store for full fungal regimens.') +
          `\n\n🔗 [Browse all Fungicides in Product Catalog](/products?cat=fungicide) or call [${business.phone}](tel:+919014255803) for prescription advice!`,
        suggestions: topFungicides.map(p => p.name)
      };
    }

    if (/\b(nutrient|nutrients|organic|fertilizer|fertilizers|bio|growth|booster|zinc|boron)\b/i.test(q) && !/where|drone/i.test(q)) {
      return {
        text: `🌱 **Organic Nutrients, Micro-Nutrients & Fertilizers:**\n\nEnhance soil fertility, root development, and fruit weight with organic regimens:\n\n- **Micro-nutrient cocktails** (Zinc, Boron, Magnesium, Iron chelates)\n- **Liquid Nitrogen Boosters** for accelerated tillering\n- **Humic & Fulvic Acid Root Stimulators**\n- **Seaweed Extract Bio-stimulants**\n\n🔗 [Browse Organic Nutrients in Product Catalog](/products?cat=organic) or ask our agronomist for dosage schedules!`,
        suggestions: ["Insecticides", "Herbicides", "Drone Spraying", "Store Location"]
      };
    }

    // 6d. Price / Cost / Rate enquiries
    if (/price|cost|rate|discount|wholesale|mrp|how much/i.test(q)) {
      // Check if user asked price for a specific product
      const specificP = products.find(p => {
        const cleanName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanQ = q.replace(/[^a-z0-9]/g, '');
        return cleanName.length > 3 && cleanQ.includes(cleanName);
      });

      return {
        text: `💰 **Pricing & Wholesale Availability${specificP ? ` for ${specificP.name}` : ''}:**\n\nWe provide competitive farmer-direct rates and wholesale bulk discounts on all products and drone spraying!\n\n${specificP && specificP.presentation ? `📦 **Available Packings:** ${specificP.presentation}\n\n` : ''}Because agrochemical prices fluctuate with current batch stocks and seasonal manufacturer offers, please contact our counter directly:\n\n📞 **Call for Instant Price Quote:** [${business.phone}](tel:+919014255803)\n💬 **WhatsApp Quote:** [Ask Price on WhatsApp](${business.whatsappUrl})\n📍 **Store Counter:** Bhavani Traders, Ananthapuram, Gadwal`,
        suggestions: [specificP ? `Details of ${specificP.name}` : "Browse Products", "WhatsApp Quote", "Call Store Now"]
      };
    }

    // 6e. Dosage & Spraying Guidelines
    if (/dose|dosage|how to use|how much ml|per acre|per liter|tank|how to apply|application/i.test(q)) {
      const specificP = products.find(p => {
        const cleanName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanQ = q.replace(/[^a-z0-9]/g, '');
        return cleanName.length > 3 && cleanQ.includes(cleanName);
      });

      return {
        text: `⚖️ **Recommended Dosage & Application${specificP ? ` for ${specificP.name}` : ''}:**\n\n${specificP && specificP.dosage ? `🎯 **Specific Dose:** ${specificP.dosage}\n\n` : ''}- **Liquid Formulations (EC/SC/SL):** Typically 1.5 ml to 2 ml per liter of water (approx. 25-35 ml per 15-liter knapsack tank or 250-500 ml per acre).\n- **Granular/Powder (WP/WDG/SP):** Typically 1 to 2 grams per liter of water.\n- **Drone Spraying:** Highly concentrated low-volume mixture (approx. 10-12 liters of water per acre).\n\n⚠️ *Always confirm exact crop stage and target pest before mixing chemicals!* For accurate tank-mixing guidance, call our agronomist at [${business.phone}](tel:+919014255803).`,
        suggestions: [specificP ? `About ${specificP.name}` : "Ask about a Product", "Drone Spraying", "Call Agronomist"]
      };
    }

    // 6f. Experience & Company background (strictly guarded so it won't swallow product questions with 'about')
    if (/^(who are you|about (bhavani|agropest|the shop|the store|you|company)|experience|how many years)\b/i.test(q)) {
      return {
        text: `🏆 **About AgroPest & Bhavani Traders:**\n\nWith over **19+ years of dedicated agricultural excellence**, Bhavani Traders has been the trusted partner for thousands of farmers across Telangana.\n\nWe deliver certified genuine crop protection products, organic nutrition regimens, and cutting-edge drone spraying operations.\n\nFeel free to ask any question or visit our store in Gadwal!`,
        suggestions: ["Store Location", "Our Services", "Browse Products"]
      };
    }

    // 7. Search by Product Name or Technical Chemical Name FIRST (highest accuracy)
    // Extract query tokens excluding stopwords and common question words
    const queryTokens = q.split(/[\s,./?!]+/).filter(w => w.length > 2 && !stopWords.has(w));

    const matchedByName = products.filter(p => {
      const pNameLower = p.name.toLowerCase();
      const pTechLower = (p.technicalName || '').toLowerCase();
      const cleanPName = pNameLower.replace(/[^a-z0-9]/g, '');
      const cleanQ = q.replace(/[^a-z0-9]/g, '');

      // Exact substring or normalized match
      if (cleanPName.length > 2 && cleanQ.includes(cleanPName)) return true;
      if (q.includes(pNameLower) || (pTechLower && q.includes(pTechLower))) return true;

      // Token match against multi-word product names (e.g. "Agadi Super" matching "agadi")
      const nameParts = pNameLower.split(/[\s,./?!-]+/).filter(part => part.length > 3 && !stopWords.has(part));
      if (nameParts.length > 0 && queryTokens.some(token => nameParts.includes(token))) {
        return true;
      }

      return false;
    });

    if (matchedByName.length > 0) {
      // Pick best matching product
      const p = matchedByName[0];
      return {
        text: `🌾 **${p.name}**\n\n` +
              (p.tagline ? `*${p.tagline}*\n\n` : '') +
              (p.technicalName ? `🧪 **Technical Name:** ${p.technicalName}\n` : '') +
              (p.crops ? `🌱 **Major Crops:** ${p.crops}\n` : '') +
              (p.pests ? `🎯 **Target Pests / Diseases:** ${p.pests}\n` : '') +
              (p.modeOfAction ? `⚙️ **Mode of Action:** ${p.modeOfAction}\n` : '') +
              (p.dosage ? `⚖️ **Dosage:** ${p.dosage}\n` : '') +
              (p.presentation ? `📦 **Available Packings:** ${p.presentation}\n` : '') +
              (p.company ? `🏢 **Company:** ${p.company}\n` : '') +
              `\n🔗 [View Full Product Page](/${p.file}) or call [${business.phone}](tel:+919014255803) for availability & best pricing!`,
        suggestions: matchedByName.length > 1 
          ? matchedByName.slice(1, 4).map(other => other.name)
          : ["Dosage of " + p.name, "Price of " + p.name, "Store Location", "WhatsApp Enquiry"]
      };
    }

    // 8. Search by specific pest / disease / weed
    // Use target fields (pests, modeOfAction, tagline) with meaningful query tokens
    const pestFilteredTokens = queryTokens.filter(t => !['rice', 'paddy', 'cotton', 'chili', 'chilli', 'maize', 'wheat', 'sugarcane'].includes(t));
    const matchedByPest = pestFilteredTokens.length > 0 ? products.filter(p => {
      const targetPests = ((p.pests || '') + ' ' + (p.tagline || '')).toLowerCase();
      // Require match against pests or tagline specifically to prevent false positives from generic modeOfAction words
      return pestFilteredTokens.some(w => targetPests.includes(w));
    }) : [];

    // 9. Search by specific crop
    const cropTokens = queryTokens.filter(t => ['rice', 'paddy', 'cotton', 'chili', 'chilli', 'maize', 'wheat', 'sugarcane', 'groundnut', 'soybean', 'onion', 'tomato', 'cabbage', 'brinjal'].includes(t));
    const matchedByCrop = cropTokens.length > 0 ? products.filter(p => {
      const cropText = (p.crops || '').toLowerCase();
      return cropTokens.some(w => {
        if (w === 'paddy') return cropText.includes('rice') || cropText.includes('paddy');
        if (w === 'chili') return cropText.includes('chilli') || cropText.includes('chili');
        return cropText.includes(w);
      });
    }) : [];

    // If both crop and pest are specified, find intersection first
    if (matchedByCrop.length > 0 && matchedByPest.length > 0) {
      const combined = matchedByPest.filter(p => matchedByCrop.some(cp => cp.name === p.name));
      const candidates = combined.length > 0 ? combined : matchedByPest;
      const topPicks = candidates.slice(0, 4);

      let listText = `🎯 **Recommended Solutions for your query:**\n\n`;
      topPicks.forEach((p, idx) => {
        listText += `${idx + 1}. **[${p.name}](/${p.file})** - ${p.technicalName || p.tagline}\n`;
        if (p.pests) listText += `   *Targets:* ${p.pests}\n`;
        if (p.crops) listText += `   *Crops:* ${p.crops}\n\n`;
      });
      listText += `📞 Call our agronomist at [${business.phone}](tel:+919014255803) or message on [WhatsApp](${business.whatsappUrl}) for exact dosage calculation per tank!`;
      return {
        text: listText,
        suggestions: topPicks.map(p => p.name)
      };
    }

    if (matchedByPest.length > 0) {
      const topPicks = matchedByPest.slice(0, 4);
      let listText = `🎯 **Recommended Solutions for targeted pests:**\n\n`;
      topPicks.forEach((p, idx) => {
        listText += `${idx + 1}. **[${p.name}](/${p.file})** - ${p.technicalName || p.tagline}\n`;
        if (p.pests) listText += `   *Targets:* ${p.pests}\n`;
        if (p.crops) listText += `   *Crops:* ${p.crops}\n\n`;
      });
      listText += `📞 Call our agronomist at [${business.phone}](tel:+919014255803) or message on [WhatsApp](${business.whatsappUrl}) for exact dosage calculation per tank!`;
      return {
        text: listText,
        suggestions: topPicks.map(p => p.name)
      };
    }

    if (matchedByCrop.length > 0) {
      const topPicks = matchedByCrop.slice(0, 4);
      let listText = `🌾 **Top Products for your crop:**\n\n`;
      topPicks.forEach((p, idx) => {
        listText += `${idx + 1}. **[${p.name}](/${p.file})**\n`;
        if (p.technicalName) listText += `   *Composition:* ${p.technicalName}\n`;
        if (p.tagline) listText += `   *Use:* ${p.tagline}\n\n`;
      });
      listText += `Want to know dosage or specific treatment? Feel free to ask or contact us!`;
      return {
        text: listText,
        suggestions: topPicks.map(p => p.name)
      };
    }

    // Default intelligent fallback
    return {
      text: `Thank you for asking! AgroPest carries over **${knowledgeBase.totalProducts} verified agricultural solutions** across 19+ years of farming service.\n\nYou can ask me:\n- Specific product details (e.g., *"Tell me about Agas"*, *"Chess"*, *"Ampligo"*, *"2,4-D Main"*)\n- Pest issues (e.g., *"Stem borer in Paddy"*, *"Pink bollworm in Cotton"*, *"Aphids"*, *"Fungus"*)\n- Categories (e.g., *"Show Insecticides"*, *"Weedicides"*, *"Bio Fertilizers"*)\n- Rates, dosages, store location, or drone booking!\n\nOr connect with our agronomist directly at [${business.phone}](tel:+919014255803) or on [WhatsApp](${business.whatsappUrl}).`,
      suggestions: ["What products do you have?", "Pesticides for Rice", "Cotton Pest Control", "Drone Spraying", "Store Location"]
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(query);
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        quickSuggestions: response.suggestions
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Render markdown-like bold and links inside messages
  const renderFormattedText = (content) => {
    // Replace markdown links [text](url)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <a key={match.index} href={url} target={url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="chat-link">
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return (
      <span className="chat-msg-body">
        {parts.map((p, idx) => {
          if (typeof p === 'string') {
            // Split newlines and bold **text**
            const lines = p.split('\n');
            return lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {line.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((chunk, cIdx) => {
                  if (chunk.startsWith('**') && chunk.endsWith('**')) {
                    return <strong key={cIdx}>{chunk.slice(2, -2)}</strong>;
                  }
                  if (chunk.startsWith('*') && chunk.endsWith('*')) {
                    return <em key={cIdx}>{chunk.slice(1, -1)}</em>;
                  }
                  return chunk;
                })}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ));
          }
          return p;
        })}
      </span>
    );
  };

  return (
    <>
      {/* Floating Launcher Buttons */}
      <div className="chatbot-container">
        <div 
          className="chatbot-item chatbot-item-bot" 
          onClick={() => setIsOpen(!isOpen)}
          title="Chat with Agro AI"
          aria-label="Open Agro AI Chat"
        >
          <div className="chatbot-bubble">
            👋 {isOpen ? "Close Chat" : "Ask Agro AI anything!"}
          </div>
          <img src="/chatbot.png" alt="Chatbot" className="chatbot-icon" />
          <span className="chatbot-online-pulse"></span>
        </div>
        
        <a 
          href="https://wa.me/916302461192?text=Hello%20AgroPest%2C%20I%20have%20an%20agricultural%20enquiry." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="chatbot-item whatsapp-item"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>

      {/* Interactive Modal Window */}
      {isOpen && (
        <div className="chat-window-glass" role="dialog" aria-label="Agro AI Assistant">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar-wrap">
                <img src="/chatbot.png" alt="Agro AI" className="chat-avatar" />
                <span className="chat-status-dot"></span>
              </div>
              <div>
                <h3 className="chat-title">Agro AI Assistant</h3>
                <p className="chat-subtitle">Bhavani Traders • 188+ Crop Solutions</p>
              </div>
            </div>
            <div className="chat-header-actions">
              <a 
                href="tel:+919014255803" 
                className="chat-call-btn" 
                title="Call Expert"
                aria-label="Call Expert"
              >
                <i className="fas fa-phone"></i>
              </a>
              <button 
                className="chat-close-btn" 
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chat-messages-area">
            {messages.map((m) => (
              <div key={m.id} className={`chat-message-row ${m.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
                {m.sender === 'bot' && (
                  <img src="/chatbot.png" alt="Bot" className="chat-msg-avatar" />
                )}
                <div className="chat-bubble-content">
                  {renderFormattedText(m.text)}
                  {m.quickSuggestions && m.quickSuggestions.length > 0 && (
                    <div className="chat-suggestions-box">
                      {m.quickSuggestions.map((sug, sIdx) => (
                        <button 
                          key={sIdx} 
                          className="chat-suggestion-chip"
                          onClick={() => handleSend(sug)}
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message-row msg-bot">
                <img src="/chatbot.png" alt="Bot" className="chat-msg-avatar" />
                <div className="chat-typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar with Form support for mobile & desktop keyboards */}
          <form 
            className="chat-input-bar" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Type your question here (e.g. rice stem borer, chess, drone)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-text-input"
              autoComplete="off"
            />
            <button 
              type="submit"
              className="chat-send-btn"
              disabled={!input.trim()}
              aria-label="Send Message"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
