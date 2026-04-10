import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import wisaLogo from "@/assets/logo-wisa.png";

const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10baEhf2nfYpW2ekiKDw0qe5z_NCfTWJVTiWxzGMgfiazjT929J3HWw0iTm09Qo7cWhZJbFSTT";
const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá,%20vim%20pelo%20site%20da%20WiSa%20e%20quero%20entender%20melhor%20como%20funciona";

const HubHero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="mb-6"
      >
        <div className="relative mx-auto h-28 w-28 md:h-36 md:w-36">
          <div className="absolute inset-0 rounded-full bg-wine/10 blur-2xl animate-pulse-glow" />
          <img src={wisaLogo} alt="Wisa Hub" className="relative z-10 h-full w-full object-contain drop-shadow-lg" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl max-w-4xl"
      >
        <span className="bg-gradient-to-r from-wine-glow via-gold to-hub-blue bg-clip-text text-transparent">
          Sua empresa está crescendo… ou só trabalhando mais e vendo menos dinheiro no final do mês?
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-4 max-w-xl text-lg text-muted-foreground md:text-xl"
      >
        Organize sua empresa. Aumente suas vendas. Cresça com previsibilidade.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-slate-500 font-medium">
          Role até o final para ver as notícias do ramo
        </span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="animate-bounce text-slate-500"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ background: "var(--gradient-wine)" }}
        >
          <Calendar className="h-5 w-5" />
          Ver onde estou perdendo dinheiro (15 min)
        </a>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground">Prefere falar antes?</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-hub-green/40 bg-hub-green/10 px-6 py-3 text-sm font-semibold text-hub-green transition-all duration-300 hover:bg-hub-green/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Tirar uma dúvida no WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Entenda como funciona</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gold">
            <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HubHero;
