import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <Shield className="mx-auto mb-4 h-10 w-10 text-gold" />
        <p className="text-base leading-relaxed text-foreground font-medium">
          Ajudamos empresas a sair do improviso e construir operações com mais controle, mais vendas e menos retrabalho.
        </p>
      </motion.div>
    </section>
  );
};

export default AuthoritySection;
