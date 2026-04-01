import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import isaMascot from "@/assets/isa-mascot.png";

const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá,%20vim%20pelo%20site%20da%20WiSa%20e%20quero%20entender%20melhor%20como%20funciona";

const MascotIsa = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (minimized) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 overflow-hidden rounded-full border-2 border-wine shadow-lg"
        onClick={() => setMinimized(false)}
      >
        <img src={isaMascot} alt="Isa" className="h-full w-full object-cover object-top" style={{ transform: 'scaleX(-1)' }} />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
      className="fixed bottom-4 right-4 z-50 flex items-end gap-3"
    >
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="mascot-bubble max-w-[220px] text-foreground"
          >
            <p className="text-sm font-medium mb-2">
              Quer entender onde você está perdendo dinheiro hoje? Me chama aqui 👇
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-hub-green/15 px-4 py-2 text-xs font-bold text-hub-green transition-colors hover:bg-hub-green/25"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Falar no WhatsApp
            </a>
            <div className="absolute -right-2 bottom-3 h-0 w-0 border-l-8 border-t-8 border-l-transparent border-t-node-border" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <button
          onClick={() => setMinimized(true)}
          className="absolute -right-1 -top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground hover:bg-wine hover:text-foreground transition-colors"
        >
          ×
        </button>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-24 w-24 overflow-hidden rounded-full border-2 border-gold shadow-lg"
        >
          <img
            src={isaMascot}
            alt="Isa - Assistente Virtual Wisa"
            className="h-full w-full object-cover object-top"
            style={{ transform: 'scaleX(-1)' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MascotIsa;
