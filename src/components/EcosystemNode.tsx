import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface EcosystemNodeProps {
  name: string;
  description: string;
  link: string;
  color: "wine" | "blue" | "green" | "darkblue";
  icon: string;
  delay: number;
  logo?: string;
}

const colorMap = {
  wine: {
    card: "node-card--wine",
    btn: "btn-ecosystem--wine",
    dot: "bg-wine",
    glow: "shadow-[0_0_60px_hsl(345,60%,32%,0.2)]",
    ring: "ring-wine/30",
    text: "text-wine",
  },
  blue: {
    card: "node-card--blue",
    btn: "btn-ecosystem--blue",
    dot: "bg-hub-blue",
    glow: "shadow-[0_0_60px_hsl(210,70%,45%,0.2)]",
    ring: "ring-hub-blue/30",
    text: "text-hub-blue",
  },
  green: {
    card: "node-card--green",
    btn: "btn-ecosystem--green",
    dot: "bg-hub-green",
    glow: "shadow-[0_0_60px_hsl(145,55%,40%,0.2)]",
    ring: "ring-hub-green/30",
    text: "text-hub-green-glow",
  },
  darkblue: {
    card: "node-card--blue",
    btn: "btn-ecosystem--blue",
    dot: "bg-blue-900",
    glow: "shadow-[0_0_60px_hsl(220,80%,45%,0.2)]",
    ring: "ring-hub-blue/30",
    text: "text-blue-900",
  },
};

const EcosystemNode = ({ name, description, link, color, icon, delay, logo }: EcosystemNodeProps) => {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[color];

  const handleInteraction = () => {
    if (expanded) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      setExpanded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        onClick={handleInteraction}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`node-card ${c.card} cursor-pointer relative overflow-hidden h-full flex flex-col`}
      >
        {/* Glow background */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${c.glow}`}
        />

        {/* Status dot */}
        <div className="mb-4 flex items-center gap-3">
          <div className={`h-3 w-3 rounded-full ${c.dot} animate-pulse-glow ${
            name.includes("Vestígio") ? "bg-blue-900" : ""
          }`} />
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {icon}
          </span>
        </div>

        {/* Logo */}
        {logo && (
          <div className="mb-3 flex justify-center">
            <img 
              src={logo} 
              alt={name} 
              className={`object-contain ${
                name.includes("Vestígio") ? "h-20" : "h-16"
              } w-auto`} 
            />
          </div>
        )}

        {/* Title */}
        <h3 className={`font-display text-[0.8rem] md:text-base font-bold ${c.text} mb-2 text-center ${
          name.includes("Vestígio") ? "text-blue-900" : ""
        }`} dangerouslySetInnerHTML={{ __html: name }} style={{whiteSpace: 'nowrap'}}></h3>

        {/* Description */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`btn-ecosystem ${c.btn}`}
          >
            Acessar site <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {!expanded && (
          <p className="mt-2 text-xs text-muted-foreground">
            Toque para explorar →
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default EcosystemNode;
