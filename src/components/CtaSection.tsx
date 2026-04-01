import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";

const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10baEhf2nfYpW2ekiKDw0qe5z_NCfTWJVTiWxzGMgfiazjT929J3HWw0iTm09Qo7cWhZJbFSTT";
const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá,%20vim%20pelo%20site%20da%20WiSa%20e%20quero%20entender%20melhor%20como%20funciona";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  calendarLabel?: string;
  whatsappNote?: string;
  variant?: "default" | "final";
}

const CtaSection = ({ title, subtitle, calendarLabel = "Agendar Diagnóstico Gratuito (15 min)", whatsappNote = "Prefere tirar uma dúvida rápida?", variant = "default" }: CtaSectionProps) => {
  return (
    <section className={`px-6 py-16 ${variant === "final" ? "pb-24" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-3">
          {title}
        </h2>

        {subtitle && (
          <p className="text-muted-foreground mb-6">{subtitle}</p>
        )}

        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mb-4"
          style={{ background: "var(--gradient-wine)" }}
        >
          <Calendar className="h-5 w-5" />
          {calendarLabel}
        </a>

        <div className="flex flex-col items-center gap-1 mt-4">
          <span className="text-xs text-muted-foreground">{whatsappNote}</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-hub-green/40 bg-hub-green/10 px-5 py-2.5 text-sm font-semibold text-hub-green transition-all duration-300 hover:bg-hub-green/20"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
