import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/923019093721" // Replace with your own number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppWidget;