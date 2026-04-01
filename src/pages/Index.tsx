import bgLanding from "@/assets/bg-landing.jpg";
import NetworkBackground from "@/components/NetworkBackground";
import HubHero from "@/components/HubHero";
import PainSection from "@/components/PainSection";
import CtaSection from "@/components/CtaSection";
import SolutionTransition from "@/components/SolutionTransition";
import EcosystemNode from "@/components/EcosystemNode";
import ConnectionLines from "@/components/ConnectionLines";
import AuthoritySection from "@/components/AuthoritySection";
import CasesSection from "@/components/CasesSection";
import MascotIsa from "@/components/MascotIsa";
import { motion } from "framer-motion";
import logoWisaConsultoria from "@/assets/logo-wisa-consultoria.png";
import logoUpid from "@/assets/logo-upid.png";
import logoPed from "@/assets/logo-ped.png";
import logoVestigio from "@/assets/logo-vestigio.png";

const solutions = [
  {
    name: "Wisa<br />Consultoria e Sistemas",
    description: "Organize seu financeiro, elimine retrabalho e tenha controle total da sua empresa.",
    link: "https://www.wisaconsultoriaesistemas.com.br/",
    color: "wine" as const,
    icon: "🔴 Consultoria",
    logo: logoWisaConsultoria,
  },
  {
    name: "UPiD<br />Inteligência Digital",
    description: "Transformamos sua operação comercial em uma máquina de crescimento previsível, estruturando toda a jornada do cliente.",
    link: "https://upid.tec.br/",
    color: "blue" as const,
    icon: "🔵 Digital",
    logo: logoUpid,
  },
  {
    name: "PED<br />Portal Educacional Digital",
    description: "Treine sua equipe para vender mais e atender melhor, sem depender de você.",
    link: "https://portaleducacionaldigital.com.br/",
    color: "green" as const,
    icon: "🟢 Educação",
    logo: logoPed,
  },
  {
    name: "Vestígio<br />Evidências Digitais",
    description: "Interpretamos registros, sistemas e vestigios digitais com clareza tecnica para apoiar casos, processos e decisoes.",
    link: "https://vestigio.hubwisa.com.br/",
    color: "darkblue" as const,
    icon: "🟠 Evidência",
    logo: logoVestigio,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLanding})` }}
      />
      <div className="fixed inset-0 z-0 bg-gray-400/40" />
      <NetworkBackground />

      <div className="relative z-10">
        {/* 1. HERO */}
        <HubHero />

        {/* 2. PAIN SECTION */}
        <PainSection />

        {/* 3. CTA - First Conversion */}
        <CtaSection
          title="Descubra onde está perdendo dinheiro"
          subtitle="Em 15 minutos você entende onde está perdendo dinheiro e o que ajustar primeiro."
        />

        {/* 4. SOLUTION TRANSITION */}
        <SolutionTransition />

        {/* 5. ECOSYSTEM */}
        <section className="relative px-6 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-display text-2xl font-semibold text-foreground md:text-3xl"
          >
            Nosso Ecossistema
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-md text-center text-sm text-muted-foreground"
          >
            Quatro soluções interconectadas formando um hub completo de inteligência empresarial.
          </motion.p>

          <div className="relative mx-auto max-w-5xl">
            <ConnectionLines />
            <div className="grid gap-6 md:grid-cols-4 items-stretch">
              {solutions.map((sol, i) => (
                <EcosystemNode key={sol.name} {...sol} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. CASES / PROOF */}
        <CasesSection />

        {/* 7. CTA - After Proof */}
        <CtaSection
          title="Agora que você viu que funciona, vamos olhar o seu caso?"
          subtitle="Sem compromisso. Direto ao ponto."
          whatsappNote="Ou fale comigo agora no WhatsApp"
        />

        {/* 7. AUTHORITY */}
        <AuthoritySection />

        {/* 8. FINAL CTA */}
        <CtaSection
          title="Pare de trabalhar no escuro"
          subtitle="Descubra onde sua empresa está perdendo dinheiro e como organizar isso de forma simples."
          calendarLabel="Quero meu diagnóstico"
          whatsappNote="Ou fale no WhatsApp"
          variant="final"
        />

        {/* Footer */}
        <footer className="border-t border-border px-6 py-10 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Hub Wisa — Inteligência · Integração · Crescimento
          </p>
        </footer>
      </div>

      <MascotIsa />
    </div>
  );
};

export default Index;
