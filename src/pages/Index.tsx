import bgLanding from "@/assets/bg-landing.jpg";
import NetworkBackground from "@/components/NetworkBackground";
import HubHero from "@/components/HubHero";
import TopBar from "@/components/TopBar";
import PainSection from "@/components/PainSection";
import CtaSection from "@/components/CtaSection";
import SolutionTransition from "@/components/SolutionTransition";
import EcosystemNode from "@/components/EcosystemNode";
import ConnectionLines from "@/components/ConnectionLines";
import AuthoritySection from "@/components/AuthoritySection";
import CasesSection from "@/components/CasesSection";
import HQSection from "@/components/HQSection";
import MapSection from "@/components/MapSection";
import RSSFeed from "@/components/RSSFeed";
import MascotIsa from "@/components/MascotIsa";
import { motion } from "framer-motion";
import logoWisaConsultoria from "@/assets/logo-wisa-consultoria.png";
import logoUpid from "@/assets/logo-upid.png";
import logoPed from "@/assets/logo-ped.png";
import logoVestigio from "@/assets/logo-vestigio.png";
import wisaLogo from "@/assets/logo-wisa.png";

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
        {/* Top Bar */}
        <TopBar />
        
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

        {/* 8. HQ SECTION */}
        <HQSection />

        {/* 9. MAP SECTION */}
        <MapSection />

        {/* 10. FINAL CTA */}
        <CtaSection
          title="Pare de trabalhar no escuro"
          subtitle="Descubra onde sua empresa está perdendo dinheiro e como organizar isso de forma simples."
          calendarLabel="Quero meu diagnóstico"
          whatsappNote="Ou fale no WhatsApp"
          variant="final"
        />

        
        {/* 9. RSS FEED */}
        <RSSFeed />

        {/* Footer */}
        <footer className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <img src={wisaLogo} alt="WiSa" className="h-20 w-auto" />
              </div>
              
              {/* Endereço */}
              <div className="text-center">
                <p className="text-sm text-wine/80">📍 R. Ana Bernardino Veloso, 3</p>
                <p className="text-sm text-wine/60">Centro, Santa Cruz de Minas - MG</p>
              </div>
              
              {/* WhatsApp */}
              <div className="text-center">
                <a 
                  href="https://wa.me/553231980374" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-hub-green hover:text-hub-green/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.297-.347.446-.52.149-.173.074-.347.037-.446-.025-.099-.062-1.173-.581-2.342-1.498-.87-.672-1.461-1.502-1.634-1.799-.173-.297-.018-.458.124-.606.124-.124.273-.347.446-.52.149-.173.223-.297.247-.471.149-.173-.149-.67-.247-1.277-.483-.607-.237-1.277-.446-1.634-.496-.357-.05-.69-.05-.973.05-.283.099-.67.273-.973.543-.304.27-.496.543-.496.543s-1.098 1.502-.496 2.893c.602 1.391 1.098 2.39 2.342 3.634s2.243 1.736 3.634 2.338c1.391.602 2.39.149 2.893-.496s.496-1.098.496-1.098.173-.273.496-.496c.322-.223.67-.322.973-.543.304-.223.421-.446.496-.67.074-.223.074-.421.025-.496-.05-.074-.149-.124-.446-.273z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  (32) 3198-0374
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-wine/20 text-center">
              <p className="text-xs text-wine/60">
                © 2026 Hub Wisa — Inteligência · Integração · Crescimento
              </p>
            </div>
          </div>
        </footer>
      </div>

      <MascotIsa />
    </div>
  );
};

export default Index;
