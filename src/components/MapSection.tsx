import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-display text-2xl font-bold text-slate-900"
        >
          Onde estamos
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps?q=R.+A.+Veloso,+3,+COHAB,+Santa+Cruz+de+Minas&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
            title="Mapa do QG WiSa"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
