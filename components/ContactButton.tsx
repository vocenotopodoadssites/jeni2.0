
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ContactButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/554195025236";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow group"
    >
      <div className="flex flex-col text-right hidden sm:block">
        <span className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none">Dúvidas?</span>
        <span className="text-xs font-bold whitespace-nowrap">Fale com a Advogada</span>
      </div>
      <MessageCircle size={24} className="group-hover:animate-pulse" />
    </motion.a>
  );
};

export default ContactButton;
