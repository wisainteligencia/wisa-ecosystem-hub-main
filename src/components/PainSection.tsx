import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const pains = [
  "Cada venda vira um problema",
  "O atendimento não tem padrão",
  "O dinheiro entra… mas não sobra",
  "Você não sabe onde está perdendo",
];

const PainSection = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl mb-10"
        >
          Se sua empresa depende de você pra tudo, ela não está pronta pra crescer
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-5 py-4 text-left"
            >
              <AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />
              <span className="text-sm font-medium text-foreground">{pain}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-3"
        >
          Isso trava seu crescimento todos os meses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block rounded-lg bg-wine/10 px-6 py-3 font-display text-lg font-bold text-wine"
        >
          O problema não é falta de cliente. É falta de estrutura.
        </motion.p>
      </div>
    </section>
  );
};

export default PainSection;
