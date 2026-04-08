import { motion } from "framer-motion";

const HQSection = () => {
  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG";
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}`;
          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          // Fallback para maps sem localização atual
          const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG";
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
          window.open(googleMapsUrl, '_blank');
        }
      );
    } else {
      // Fallback para browsers sem geolocalização
      const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG";
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
      window.open(googleMapsUrl, '_blank');
    }
  };
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-3xl font-bold text-wine md:text-4xl"
        >
          Nosso QG físico
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-lg text-wine max-w-2xl mx-auto"
        >
          A WiSa agora conta com um QG físico de atendimento para receber clientes, parceiros e novos projetos 
          com mais proximidade, clareza e estrutura.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-wine"
        >
          <p className="text-lg font-semibold mb-2">Endereço:</p>
          <p className="text-lg">
            R. Ana Bernardino Veloso, 3<br />
            Centro, Santa Cruz de Minas - MG
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-sm text-wine/80"
        >
          Atendimento: Segunda a sexta, das 9h às 12h e das 13h30 às 18h
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleGetDirections}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-transparent border-none cursor-pointer"
            style={{ background: "var(--gradient-wine)" }}
          >
            Como chegar
          </button>
          <a
            href="https://wa.me/553231980374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-hub-green/40 bg-hub-green/10 text-sm font-semibold text-hub-green transition-all duration-300 hover:bg-hub-green/20 hover:-translate-y-0.5"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HQSection;
