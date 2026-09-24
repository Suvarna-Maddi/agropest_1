import React from 'react';
import './Chatbot.css';

export function Chatbot() {
  return (
    <div className="chatbot-container">
      <div className="chatbot-item chatbot-item-bot">
        <div className="chatbot-bubble">👋 Hello! How can I help you? I'm Agro AI</div>
        <img src="/chatbot.png" alt="Chatbot" className="chatbot-icon" />
      </div>
      <a href="https://wa.me/916302461192" target="_blank" rel="noopener noreferrer" className="chatbot-item">
        <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
}
