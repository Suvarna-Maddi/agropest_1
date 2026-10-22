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

    // 6. Categories overview
    if (/categor|types of product|catalog|what do you sell/i.test(q)) {
      return {
        text: `📦 We offer over **${knowledgeBase.totalProducts} verified agricultural solutions** categorized into:\n\n1. 🐛 **Insecticides:** Sucking pests, stem borers, bollworms, aphids, thrips\n2. 🌿 **Herbicides:** Selective & non-selective weed control for grassy & broadleaf weeds\n3. 🍄 **Fungicides:** Blight, blast, rust, powdery/downy mildew, leaf spots\n4. 🌱 **Organic Nutrients & Bio-Fertilizers:** Micro-nutrients, zinc, boron, humic root developers\n5. 🪤 **Pest Traps:** Solar insect light traps, yellow sticky traps, blue thrips sheets\n\nWhich crop or pest problem are you dealing with?`,
        suggestions: ["Insecticides", "Herbicides", "Fungicides", "Organic Nutrients", "Pest Traps"]
      };
    }

    // 6b. Price / Cost / Rate enquiries
    if (/price|cost|rate|discount|wholesale|mrp|how much/i.test(q)) {
      return {
        text: `💰 **Pricing & Wholesale Availability:**\n\nWe provide competitive farmer-direct rates and wholesale bulk discounts on all products and drone spraying!\n\nBecause agrochemical prices fluctuate with current batch stocks and seasonal manufacturer offers, please contact our counter directly:\n\n📞 **Call for Instant Price Quote:** [${business.phone}](tel:+919014255803)\n💬 **WhatsApp Quote:** [Ask Price on WhatsApp](${business.whatsappUrl})\n📍 **Store Counter:** Bhavani Traders, Ananthapuram, Gadwal`,
        suggestions: ["Call Store Now", "WhatsApp Quote", "Browse Products"]
      };
    }

    // 6c. Dosage & Spraying Guidelines
    if (/dose|dosage|how to use|how much ml|per acre|per liter|tank|how to apply|application/i.test(q)) {
      return {
        text: `⚖️ **Recommended Dosage & Application:**\n\n- **Liquid Formulations (EC/SC/SL):** Typically 1.5 ml to 2 ml per liter of water (approx. 25-35 ml per 15-liter knapsack tank or 250-500 ml per acre).\n- **Granular/Powder (WP/WDG/SP):** Typically 1 to 2 grams per liter of water.\n- **Drone Spraying:** Highly concentrated low-volume mixture (approx. 10-12 liters of water per acre).\n\n⚠️ *Always confirm exact crop stage and target pest before mixing chemicals!* For accurate tank-mixing guidance, call our agronomist at [${business.phone}](tel:+919014255803).`,
        suggestions: ["Ask about a Product", "Drone Spraying", "Call Agronomist"]
      };
    }

    // 6d. Experience & Company background
    if (/experience|years|about|who are you|bhavani traders/i.test(q)) {
      return {
        text: `🏆 **About AgroPest & Bhavani Traders:**\n\nWith over **19+ years of dedicated agricultural excellence**, Bhavani Traders has been the trusted partner for thousands of farmers across Telangana.\n\nWe deliver certified genuine crop protection products, organic nutrition regimens, and cutting-edge drone spraying operations.\n\nFeel free to ask any question or visit our store in Gadwal!`,
        suggestions: ["Store Location", "Our Services", "Browse Products"]
      };
    }

    // 7. Search by specific pest / disease / weed
    const matchedByPest = products.filter(p => {
      const target = (p.pests + ' ' + p.modeOfAction + ' ' + p.tagline + ' ' + (p.category || '')).toLowerCase();
      const words = q.split(/[\s,./?!]+/).filter(w => w.length > 2);
      return words.some(w => target.includes(w));
    });

    // 8. Search by specific crop
    const matchedByCrop = products.filter(p => {
      const cropText = (p.crops + ' ' + p.tagline).toLowerCase();
      const words = q.split(/[\s,./?!]+/).filter(w => w.length > 2);
      return words.some(w => cropText.includes(w));
    });

    // 9. Search by product name or technical chemical name
    const matchedByName = products.filter(p => {
      const name = p.name.toLowerCase();
      const tech = p.technicalName.toLowerCase();
      return q.includes(name) || name.includes(q) || (tech && q.includes(tech));
    });

    if (matchedByName.length > 0) {
      const p = matchedByName[0];
      return {
        text: `🌾 **${p.name}**\n\n` +
              (p.tagline ? `*${p.tagline}*\n\n` : '') +
              (p.technicalName ? `🧪 **Technical Name:** ${p.technicalName}\n` : '') +
              (p.crops ? `🌱 **Major Crops:** ${p.crops}\n` : '') +
              (p.pests ? `🎯 **Target Pests / Diseases:** ${p.pests}\n` : '') +
              (p.modeOfAction ? `⚙️ **Mode of Action:** ${p.modeOfAction}\n` : '') +
              (p.presentation ? `📦 **Available Packings:** ${p.presentation}\n` : '') +
              (p.company ? `🏢 **Company:** ${p.company}\n` : '') +
              `\n🔗 [View Full Product Page](/${p.file}) or call [${business.phone}](tel:+919014255803) for availability & best pricing!`,
        suggestions: ["Ask about another product", "Store Location", "WhatsApp Enquiry"]
      };
    }

    if (matchedByPest.length > 0) {
      const topPicks = matchedByPest.slice(0, 4);
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
      text: `Thank you for asking! AgroPest carries over **${knowledgeBase.totalProducts} verified agricultural solutions** across 19+ years of farming service.\n\nYou can ask me:\n- Specific product details (e.g., *"Tell me about Agas"*, *"Chess"*, *"Ampligo"*)\n- Pest issues (e.g., *"Stem borer in Paddy"*, *"Pink bollworm"*, *"Aphids"*, *"Fungus"*)\n- Rates, dosages, store location, or drone booking!\n\nOr connect with our agronomist directly at [${business.phone}](tel:+919014255803) or on [WhatsApp](${business.whatsappUrl}).`,
      suggestions: ["Paddy / Rice Pests", "Cotton Bollworm", "Drone Spraying", "Store Location"]
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
