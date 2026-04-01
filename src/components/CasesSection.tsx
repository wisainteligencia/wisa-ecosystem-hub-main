import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const CASES_URL = "https://casesdesucesso.upid.tec.br/";

const cases = [
  {
    before: "Atendimento desorganizado, sem padrão e com baixa conversão de vendas.",
    solution: "Implementação de processos automatizados de atendimento via WhatsApp com funil de vendas estruturado.",
    result: "Aumento de 40% na taxa de conversão e redução de 60% no tempo de resposta ao cliente.",
  },
  {
    before: "Financeiro sem controle, retrabalho constante e fluxo de caixa imprevisível.",
    solution: "Consultoria financeira com implantação de sistema integrado de gestão e indicadores claros.",
    result: "Controle total do fluxo de caixa e eliminação de 80% do retrabalho operacional.",
  },
  {
    before: "Equipe desmotivada, sem treinamento e dependente do dono para cada decisão.",
    solution: "Programa de capacitação com trilhas de aprendizado personalizadas e processos documentados.",
    result: "Equipe autônoma, aumento na produtividade e o dono livre para focar no crescimento.",
  },
];

const CasesSection = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl mb-3">
            Não é sobre teoria. É sobre resultado.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Empresas que decidiram estruturar hoje operam com mais controle, mais vendas e menos retrabalho.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl border border-node-border bg-node p-6 flex flex-col gap-4"
            >
              <div>
                <span className="inline-block rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive mb-2">Antes</span>
                <p className="text-sm text-muted-foreground">{c.before}</p>
              </div>

              <div>
                <span className="inline-block rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent mb-2">O que fizemos</span>
                <p className="text-sm text-muted-foreground">{c.solution}</p>
              </div>

              <div className="mt-auto pt-3 border-t border-node-border">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 shrink-0 text-hub-green mt-0.5" />
                  <p className="text-sm font-semibold text-foreground">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-gold/20 hover:-translate-y-0.5"
          >
            Ver todos os casos de sucesso
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CasesSection;
