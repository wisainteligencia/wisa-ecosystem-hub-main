import { motion } from "framer-motion";

const TopBar = () => {
  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG,";
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}`;
          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          // Fallback para maps sem localização atual
          const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG,";
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
          window.open(googleMapsUrl, '_blank');
        }
      );
    } else {
      // Fallback para browsers sem geolocalização
      const destination = "R. A. Veloso, 3 - COHAB, Santa Cruz de Minas - MG,";
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-400/40 text-wine px-4 py-2 text-center text-sm"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2">
          <span>QG físico WiSa: R. Ana Bernardino Veloso, 3 - Centro, Santa Cruz de Minas/MG</span>
        </span>
        <div className="flex gap-4">
          <button
            onClick={handleGetDirections}
            className="text-wine hover:text-wine/80 transition-colors bg-transparent border-none cursor-pointer"
          >
            Como chegar
          </button>
          <a
            href="https://wa.me/553231980374"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wine hover:text-wine/80 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
