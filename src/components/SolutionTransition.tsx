import { motion } from "framer-motion";

const SolutionTransition = () => {
  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-4">
          Você não precisa de mais esforço. Precisa da estrutura certa.
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          O Hub WiSa conecta organização, vendas e capacitação para transformar empresas desorganizadas em operações estruturadas e lucrativas.
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glow-line mt-8 mx-auto w-48 md:w-72"
        />
      </motion.div>
    </section>
  );
};

export default SolutionTransition;
