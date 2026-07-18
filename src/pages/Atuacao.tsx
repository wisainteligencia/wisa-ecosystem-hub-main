import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  Layers3,
  Menu,
  MessageCircle,
  Route,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import logoWisa from "@/assets/logo-wisa.png";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2qc9MFGzl1mCicH3-iZhkmYc3xCDAXOh1giUcARXxPg0e48eNNzHckPILnGdSMNKyHvUc-ijCy";
const WHATSAPP_URL =
  "https://wa.me/553231980374?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20WiSa%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa.";

const areas = {
  "estrutura-e-operacao": {
    number: "01",
    label: "Estrutura e operação",
    short: "Gestão e operação conectadas",
    icon: Layers3,
    headline: "Clareza para decidir. Estrutura para executar.",
    intro:
      "Organizamos a base da empresa para que prioridades, processos, responsabilidades e indicadores deixem de depender do improviso.",
    perspective:
      "Estruturar não é burocratizar. É tornar visível como o trabalho acontece, quem responde por cada decisão e o que precisa ser acompanhado para a empresa evoluir.",
    signals: [
      "Decisões e informações concentradas em poucas pessoas",
      "Retrabalho, urgências recorrentes e processos pouco claros",
      "Responsabilidades que se confundem entre áreas e pessoas",
      "Indicadores que não orientam as decisões do dia a dia",
      "Ferramentas adotadas antes da organização da operação",
    ],
    deliveries: [
      ["Direção e prioridades", "Organização dos objetivos, critérios de decisão e focos de atuação."],
      ["Processos e responsabilidades", "Mapeamento do fluxo real de trabalho, papéis, interfaces e pontos críticos."],
      ["Rotinas e indicadores", "Ritos de gestão e medidas que ajudam a acompanhar execução e resultado."],
      ["Arquitetura operacional", "Conexão entre pessoas, processos, sistemas e informações essenciais."],
    ],
    connection:
      "A estrutura operacional cria a base para a jornada comercial funcionar, para a tecnologia ser bem escolhida e para as pessoas sustentarem novas rotinas.",
  },
  "jornada-comercial": {
    number: "02",
    label: "Jornada comercial",
    short: "Da primeira conversa ao pós-venda",
    icon: Route,
    headline: "Uma jornada acompanhada de ponta a ponta.",
    intro:
      "Estruturamos atendimento, vendas, relacionamento e experiência do cliente como partes de um único fluxo — da descoberta da necessidade ao pós-venda.",
    perspective:
      "A jornada comercial não começa na proposta e não termina no fechamento. Ela conecta cada contato, decisão, promessa e entrega que influencia a percepção do cliente.",
    signals: [
      "Contatos e oportunidades se perdem durante o atendimento",
      "Cada pessoa vende ou atende de uma maneira diferente",
      "CRM utilizado apenas como cadastro ou sem rotina definida",
      "Pouca visibilidade sobre conversão, ciclo de venda e motivos de perda",
      "Pós-venda e relacionamento acontecem somente quando surge um problema",
    ],
    deliveries: [
      ["Mapa da jornada", "Leitura dos pontos de contato, expectativas, rupturas e oportunidades do cliente."],
      ["Processo comercial", "Organização das etapas, critérios, responsabilidades e passagens entre atendimento e operação."],
      ["CRM e relacionamento", "Definição de estrutura, dados, rotinas, automações e acompanhamento das oportunidades."],
      ["Experiência e evolução", "Indicadores, escuta do cliente, pós-venda e melhoria contínua da jornada."],
    ],
    connection:
      "A jornada comercial depende de uma operação capaz de cumprir o que foi prometido, de tecnologia que dê visibilidade e de pessoas preparadas para conduzir cada interação.",
  },
  "tecnologia-e-sistemas": {
    number: "03",
    label: "Tecnologia e sistemas",
    short: "Sistemas a serviço do negócio",
    icon: Workflow,
    headline: "Tecnologia que responde ao negócio — não o contrário.",
    intro:
      "Selecionamos, organizamos e integramos sistemas, automações e inteligência artificial a partir da necessidade real da operação.",
    perspective:
      "A ferramenta certa só produz resultado quando existe clareza sobre o problema, o processo, as pessoas envolvidas e a informação que precisa circular.",
    signals: [
      "Sistemas que não conversam e geram lançamentos duplicados",
      "Planilhas paralelas para compensar falhas do processo",
      "Ferramentas contratadas sem adoção ou uso consistente",
      "Atividades repetitivas que poderiam ser automatizadas",
      "Dados pouco confiáveis para decidir e acompanhar resultados",
    ],
    deliveries: [
      ["Diagnóstico tecnológico", "Leitura do ambiente atual, necessidades, riscos, sobreposições e lacunas."],
      ["Seleção e arquitetura", "Definição de critérios e combinação adequada de ERP, CRM, SaaS e outras soluções."],
      ["Integrações e automações", "Redução de tarefas manuais e melhoria do fluxo de dados entre processos."],
      ["Implantação e adoção", "Configuração orientada ao processo, acompanhamento do uso e evolução da solução."],
    ],
    connection:
      "A tecnologia materializa decisões da estrutura e da jornada. Por isso, sua implantação acontece conectada aos processos, aos indicadores e à capacidade da equipe.",
  },
  "desenvolvimento-de-pessoas": {
    number: "04",
    label: "Desenvolvimento de pessoas",
    short: "Capacidade para sustentar a mudança",
    icon: Users,
    headline: "Mudança só se sustenta quando as pessoas conseguem praticá-la.",
    intro:
      "Transformamos método em prática por meio de implantação assistida, capacitação, documentação e acompanhamento das equipes.",
    perspective:
      "Treinamento isolado informa. Desenvolvimento conectado ao trabalho ajuda a equipe a compreender, aplicar, medir e aprimorar novas formas de atuar.",
    signals: [
      "Mudanças que dependem sempre das mesmas pessoas",
      "Treinamentos sem aplicação clara na rotina de trabalho",
      "Conhecimento importante concentrado ou pouco documentado",
      "Baixa adesão a novos processos e sistemas",
      "Lideranças sem instrumentos para acompanhar a evolução da equipe",
    ],
    deliveries: [
      ["Capacidades necessárias", "Identificação dos conhecimentos e comportamentos exigidos pela nova operação."],
      ["Trilhas e conteúdos", "Percursos de aprendizagem conectados aos processos e desafios reais da empresa."],
      ["Implantação assistida", "Acompanhamento da aplicação para transformar orientação em rotina consistente."],
      ["Autonomia e continuidade", "Documentação, multiplicadores internos e mecanismos de desenvolvimento contínuo."],
    ],
    connection:
      "O desenvolvimento das pessoas atravessa todas as capacidades da WiSa e pode ser apoiado pelo Portal Educacional Digital quando o projeto exige um ambiente estruturado de formação.",
  },
} as const;

type AreaKey = keyof typeof areas;

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.5 },
};

const Atuacao = () => {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const area = slug && slug in areas ? areas[slug as AreaKey] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) return <Navigate to="/" replace />;

  const Icon = area.icon;

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#17233a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17233a]/10 bg-[#f7f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="WiSa Inteligência para Negócios — início">
            <img src={logoWisa} alt="" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <span className="font-logo block text-[1.65rem] leading-none text-[#872d31]">WiSa</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#17233a]/65">Inteligência para Negócios</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <Link className="nav-link" to="/#como-atuamos">Como atuamos</Link>
            <Link className="nav-link" to="/#metodologia">Metodologia</Link>
            <Link className="nav-link" to="/#desenvolvimento">Soluções conectadas</Link>
            <a className="button-primary !px-5 !py-3" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com a WiSa</a>
          </nav>

          <button type="button" className="rounded-xl border border-[#17233a]/10 p-2.5 lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#17233a]/10 bg-[#f7f3ec] px-5 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <Link to="/#como-atuamos" onClick={() => setMenuOpen(false)}>Como atuamos</Link>
              <Link to="/#metodologia" onClick={() => setMenuOpen(false)}>Metodologia</Link>
              <Link to="/#desenvolvimento" onClick={() => setMenuOpen(false)}>Soluções conectadas</Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-24 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute -right-40 top-12 h-[30rem] w-[30rem] rounded-full bg-[#e4ad1a]/16 blur-3xl" />
          <div className="absolute -left-44 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#08649b]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Link to="/#como-atuamos" className="inline-flex items-center gap-2 text-sm font-bold text-[#872d31] transition-colors hover:text-[#6f2529]"><ArrowLeft className="h-4 w-4" /> Todas as atuações</Link>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="eyebrow">Capacidade integrada · {area.number}</span>
                <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#17233a] sm:text-5xl lg:text-7xl">{area.headline}</h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#17233a]/70 lg:text-xl">{area.intro}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.6 }} className="rounded-[2rem] border border-white/80 bg-white/65 p-7 shadow-[0_28px_80px_rgba(23,35,58,.10)] backdrop-blur sm:p-9">
                <div className="flex items-center justify-between gap-5">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#872d31] text-white"><Icon className="h-7 w-7" /></span>
                  <span className="font-display text-6xl font-bold text-[#17233a]/8">{area.number}</span>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#08649b]">{area.label}</p>
                <p className="mt-3 font-display text-2xl font-bold">{area.short}</p>
                <p className="mt-5 leading-relaxed text-[#17233a]/65">{area.perspective}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#17233a] px-5 py-20 text-white lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div {...reveal}>
              <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f3c340]">Quando essa atuação se torna necessária</span>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Sinais que merecem ser compreendidos antes de escolher uma solução.</h2>
            </motion.div>
            <motion.ul {...reveal} className="grid gap-3 sm:grid-cols-2">
              {area.signals.map((signal) => (
                <li key={signal} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#f3c340]" />
                  <span className="leading-relaxed text-white/82">{signal}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="max-w-3xl">
              <span className="eyebrow">Como a WiSa atua</span>
              <h2 className="section-title mt-5">O trabalho é desenhado a partir do diagnóstico.</h2>
              <p className="section-lead mt-5">Estas são capacidades que podem compor a arquitetura do projeto. A combinação e a profundidade dependem da realidade encontrada.</p>
            </motion.div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {area.deliveries.map(([title, text], index) => (
                <motion.article key={title} {...reveal} transition={{ duration: 0.5, delay: index * 0.06 }} className="capability-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#872d31]/10 font-display text-sm font-bold text-[#872d31]">0{index + 1}</span>
                    <Sparkles className="h-5 w-5 text-[#e0a719]" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-[#17233a]/65">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
          <motion.div {...reveal} className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#17233a]/10 bg-[#f7f3ec] p-7 shadow-[0_20px_60px_rgba(23,35,58,.06)] md:p-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#08649b]">Uma capacidade dentro do todo</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.035em]">Nenhuma frente atua isoladamente.</h2>
            </div>
            <p className="text-lg leading-relaxed text-[#17233a]/70">{area.connection}</p>
          </motion.div>
        </section>

        <section className="px-5 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div {...reveal} className="max-w-3xl">
              <span className="eyebrow">Outras capacidades da WiSa</span>
              <h2 className="section-title mt-5">Uma arquitetura integrada para cada realidade.</h2>
            </motion.div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {(Object.entries(areas) as [AreaKey, (typeof areas)[AreaKey]][]).filter(([key]) => key !== slug).map(([key, item]) => {
                const ItemIcon = item.icon;
                return (
                  <Link key={key} to={`/atuacao/${key}`} className="group rounded-[1.5rem] border border-[#17233a]/10 bg-white/55 p-6 transition-all hover:-translate-y-1 hover:border-[#872d31]/30 hover:shadow-[0_18px_55px_rgba(23,35,58,.08)]">
                    <ItemIcon className="h-6 w-6 text-[#872d31]" />
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#08649b]">{item.label}</p>
                    <p className="mt-2 font-display text-xl font-bold">{item.short}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#872d31]">Conhecer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8 lg:pb-32">
          <motion.div {...reveal} className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#e4ad1a] px-6 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17233a]/65">O primeiro passo é compreender</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Vamos reconhecer o que sua empresa precisa agora?</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#17233a]/70">Uma conversa inicial para organizar o cenário antes de definir frentes, ferramentas ou soluções.</p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 lg:mt-0">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17233a] px-7 py-4 font-bold text-white transition-transform hover:-translate-y-0.5" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar uma conversa <ArrowRight className="h-4 w-4" /></a>
              <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#17233a]/20 px-7 py-4 font-bold text-[#17233a] transition-colors hover:bg-white/25" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#17233a]/10 bg-[#f0ebe1] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoWisa} alt="" className="h-11 w-11 object-contain" />
            <div><p className="font-logo text-[1.7rem] leading-none text-[#872d31]">WiSa</p><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17233a]/60">Inteligência para Negócios</p></div>
          </Link>
          <div className="flex flex-col gap-2 text-sm text-[#17233a]/60 sm:items-end"><a href="tel:+553231980374">(32) 3198-0374</a><a href="mailto:contato@hubwisa.com.br">contato@hubwisa.com.br</a></div>
        </div>
      </footer>
    </div>
  );
};

export default Atuacao;
