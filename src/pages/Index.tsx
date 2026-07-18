import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  GraduationCap,
  Layers3,
  Menu,
  MessageCircle,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import logoWisa from "@/assets/logo-wisa.png";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2qc9MFGzl1mCicH3-iZhkmYc3xCDAXOh1giUcARXxPg0e48eNNzHckPILnGdSMNKyHvUc-ijCy";
const WHATSAPP_URL =
  "https://wa.me/553231980374?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20WiSa%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa.";

const capabilities = [
  {
    icon: Layers3,
    href: "/atuacao/estrutura-e-operacao",
    eyebrow: "Estrutura",
    title: "Gestão e operação conectadas",
    text: "Organizamos processos, responsabilidades, indicadores e rotinas para a empresa funcionar com mais clareza e menos dependência do improviso.",
  },
  {
    icon: Route,
    href: "/atuacao/jornada-comercial",
    eyebrow: "Jornada comercial",
    title: "Da primeira conversa ao pós-venda",
    text: "Estruturamos atendimento, vendas, CRM, relacionamento e experiência do cliente como partes de uma única jornada.",
  },
  {
    icon: Workflow,
    href: "/atuacao/tecnologia-e-sistemas",
    eyebrow: "Tecnologia",
    title: "Sistemas a serviço do negócio",
    text: "Selecionamos e integramos sistemas, automações e inteligência artificial conforme a necessidade real da operação.",
  },
  {
    icon: Users,
    href: "/atuacao/desenvolvimento-de-pessoas",
    eyebrow: "Pessoas",
    title: "Capacidade para sustentar a mudança",
    text: "Transformamos método em prática com implantação assistida, capacitação e acompanhamento da equipe.",
  },
];

const method = [
  {
    number: "01",
    title: "Diagnosticar",
    text: "Entendemos o cenário, a jornada do cliente e os pontos que limitam o resultado.",
    icon: Search,
  },
  {
    number: "02",
    title: "Desenhar",
    text: "Construímos uma arquitetura de prioridades, processos, pessoas e tecnologia.",
    icon: Target,
  },
  {
    number: "03",
    title: "Implantar",
    text: "Acompanhamos a execução para transformar decisões em novas rotinas de trabalho.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Medimos, ajustamos e desenvolvemos a autonomia necessária para a empresa avançar.",
    icon: BarChart3,
  },
];

const outcomes = [
  "Prioridades visíveis e decisões mais seguras",
  "Processos claros e responsabilidades definidas",
  "Jornada comercial acompanhada de ponta a ponta",
  "Tecnologia adequada à realidade da operação",
  "Equipe orientada para executar e evoluir",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#17233a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17233a]/10 bg-[#f7f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="WiSa Inteligência para Negócios — início">
            <img src={logoWisa} alt="" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <span className="font-logo block text-[1.65rem] leading-none text-[#872d31]">WiSa</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#17233a]/65">
                Inteligência para Negócios
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#como-atuamos">Como atuamos</a>
            <a className="nav-link" href="#metodologia">Metodologia</a>
            <a className="nav-link" href="#desenvolvimento">Soluções conectadas</a>
            <a className="nav-link" href="#sobre">Sobre</a>
            <a className="button-primary !px-5 !py-3" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com a WiSa
            </a>
          </nav>

          <button
            type="button"
            className="rounded-xl border border-[#17233a]/10 p-2.5 lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#17233a]/10 bg-[#f7f3ec] px-5 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {[
                ["Como atuamos", "#como-atuamos"],
                ["Metodologia", "#metodologia"],
                ["Soluções conectadas", "#desenvolvimento"],
                ["Sobre", "#sobre"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="py-1 font-semibold" onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#e4ad1a]/15 blur-3xl" />
          <div className="absolute -left-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#08649b]/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.12fr_.88fr]">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <span className="eyebrow">Estrutura antes da ferramenta. Estratégia antes da pressa.</span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-[#17233a] sm:text-5xl lg:text-7xl">
                Sua empresa não precisa de mais uma solução isolada.
                <span className="block text-[#872d31]">Precisa que tudo funcione junto.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#17233a]/72 lg:text-xl">
                A WiSa conecta gestão, processos, jornada comercial, tecnologia e pessoas para estruturar empresas a partir de suas necessidades reais.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary" href={CALENDAR_URL} target="_blank" rel="noreferrer">
                  Conversar sobre minha empresa <ArrowRight className="h-4 w-4" />
                </a>
                <a className="button-secondary" href="#como-atuamos">
                  Entender como atuamos <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-[0_30px_90px_rgba(23,35,58,.13)] backdrop-blur-xl sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#872d31]">Uma visão integrada do negócio</p>
                <div className="mt-7 space-y-3">
                  {[
                    ["Direção", "Prioridades e decisões"],
                    ["Operação", "Processos e responsabilidades"],
                    ["Mercado", "Jornada e relacionamento"],
                    ["Evolução", "Tecnologia e desenvolvimento"],
                  ].map(([title, text], index) => (
                    <div key={title} className="group flex items-center gap-4 rounded-2xl border border-[#17233a]/8 bg-[#fdfbf7] p-4 transition-transform hover:translate-x-1">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#17233a] font-display text-sm font-bold text-white">0{index + 1}</span>
                      <div>
                        <p className="font-display font-bold text-[#17233a]">{title}</p>
                        <p className="text-sm text-[#17233a]/60">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#872d31] p-5 text-white">
                  <Sparkles className="h-6 w-6 text-[#f3c340]" />
                  <p className="text-sm font-semibold">Uma arquitetura construída para a realidade da sua empresa.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#17233a] px-5 py-8 text-white lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-display text-xl font-semibold md:text-2xl">Quando cada área trabalha sozinha, o resultado se perde no caminho.</p>
            <p className="max-w-xl text-sm leading-relaxed text-white/65">A WiSa observa a empresa como um sistema: cada decisão afeta a operação, a equipe e a experiência do cliente.</p>
          </div>
        </section>

        <section id="como-atuamos" className="px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="max-w-3xl">
              <span className="eyebrow">Como atuamos</span>
              <h2 className="section-title mt-5">Frentes internas. Uma única entrega.</h2>
              <p className="section-lead mt-5">Não empilhamos serviços. Combinamos as capacidades necessárias para resolver o problema certo e sustentar a evolução do negócio.</p>
            </motion.div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <motion.a key={item.title} href={item.href} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className="capability-card group block">
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#872d31]/10 text-[#872d31]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-5xl font-bold text-[#17233a]/8">0{index + 1}</span>
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#08649b]">{item.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#17233a]/65">{item.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#872d31]">Conhecer esta atuação <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologia" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <span className="eyebrow">Metodologia WiSa</span>
                <h2 className="section-title mt-5">Da dor percebida à mudança implantada.</h2>
              </div>
              <p className="section-lead">Começamos pela jornada e pelos sinais do negócio. O diagnóstico orienta a arquitetura; a arquitetura orienta a implantação; os indicadores orientam a evolução.</p>
            </motion.div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#17233a]/10 bg-[#17233a]/10 md:grid-cols-2 lg:grid-cols-4">
              {method.map((step, index) => (
                <motion.article key={step.title} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }} className="bg-[#fdfbf7] p-7 lg:min-h-80">
                  <div className="flex items-center justify-between">
                    <step.icon className="h-7 w-7 text-[#872d31]" />
                    <span className="font-display text-sm font-bold text-[#e0a719]">{step.number}</span>
                  </div>
                  <h3 className="mt-20 font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#17233a]/62">{step.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="overflow-hidden bg-[#872d31] px-5 py-24 text-white lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div {...reveal}>
              <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c340]">O que buscamos construir</span>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Uma empresa mais clara, integrada e capaz de evoluir.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/72">A ferramenta pode mudar. A necessidade também. Por isso, nossa entrega não termina na indicação de uma solução: ela organiza a base para que pessoas, processos e tecnologia produzam resultado juntos.</p>
            </motion.div>
            <motion.div {...reveal} className="rounded-[2rem] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <ul className="space-y-5">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f3c340] text-[#17233a]"><Check className="h-4 w-4" /></span>
                    <span className="text-base font-medium leading-relaxed text-white/90">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="desenvolvimento" className="px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="max-w-3xl">
              <span className="eyebrow">Soluções conectadas</span>
              <h2 className="section-title mt-5">Profundidade quando a jornada exige.</h2>
              <p className="section-lead mt-5">Algumas necessidades ganham ambientes próprios, sem fragmentar a leitura da WiSa como parceira estratégica.</p>
            </motion.div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <motion.a {...reveal} href="https://portaleducacionaldigital.com.br/" target="_blank" rel="noreferrer" className="solution-panel group bg-[#08649b] text-white">
                <GraduationCap className="h-9 w-9 text-[#f3c340]" />
                <p className="mt-12 text-xs font-bold uppercase tracking-[0.16em] text-white/55">Desenvolvimento profissional</p>
                <h3 className="mt-3 font-display text-3xl font-bold">Portal Educacional Digital</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/70">Ambiente de formação que apoia os projetos da WiSa e também pode receber programas educacionais independentes.</p>
                <span className="mt-9 inline-flex items-center gap-2 font-bold">Conhecer o Portal PED <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </motion.a>
              <motion.a {...reveal} href="https://vestigio.hubwisa.com.br/" target="_blank" rel="noreferrer" className="solution-panel group bg-[#17233a] text-white">
                <ShieldCheck className="h-9 w-9 text-[#f3c340]" />
                <p className="mt-12 text-xs font-bold uppercase tracking-[0.16em] text-white/55">Evidências digitais</p>
                <h3 className="mt-3 font-display text-3xl font-bold">Vestígio</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/70">Atuação tecnológica especializada para interpretar evidências digitais em contextos que exigem clareza técnica.</p>
                <span className="mt-9 inline-flex items-center gap-2 font-bold">Conhecer a Vestígio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </motion.a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8 lg:pb-32">
          <motion.div {...reveal} className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#e4ad1a] px-6 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17233a]/65">O próximo passo começa por entender</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.035em] text-[#17233a] sm:text-5xl">Vamos olhar para a sua empresa como um todo?</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#17233a]/70">Uma conversa inicial para reconhecer o cenário, organizar as perguntas e definir o que merece atenção primeiro.</p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 lg:mt-0">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17233a] px-7 py-4 font-bold text-white transition-transform hover:-translate-y-0.5" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar uma conversa <ArrowRight className="h-4 w-4" /></a>
              <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#17233a]/20 px-7 py-4 font-bold text-[#17233a] transition-colors hover:bg-white/25" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#17233a]/10 bg-[#f0ebe1] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoWisa} alt="" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-logo text-[1.8rem] leading-none text-[#872d31]">WiSa</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#17233a]/60">Inteligência para Negócios</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#17233a]/60">Estrutura, jornada comercial, tecnologia e desenvolvimento conectados à necessidade real de cada empresa.</p>
          </div>
          <div>
            <p className="font-bold">Navegação</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#17233a]/65">
              <a href="#como-atuamos">Como atuamos</a><a href="#metodologia">Metodologia</a><a href="#desenvolvimento">Soluções conectadas</a>
            </div>
          </div>
          <div>
            <p className="font-bold">Contato</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#17233a]/65">
              <a href="tel:+553231980374">(32) 3198-0374</a>
              <a href="mailto:contato@hubwisa.com.br">contato@hubwisa.com.br</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-[#17233a]/10 pt-6 text-xs text-[#17233a]/50 sm:flex-row sm:justify-between">
          <p>© 2026 WiSa Inteligência para Negócios.</p>
          <p>Santa Cruz de Minas — MG</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
