"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  Download,
  Gamepad2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Mail,
  MonitorUp,
  MapPin,
  Menu,
  Music,
  Palette,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  ["Instituto", "#instituto"],
  ["Associacao", "#associacao"],
  ["Nucleos", "#nucleos"],
  ["Projetos", "#projetos"],
  ["Documentos", "#documentos"],
  ["Contato", "#contato"],
];

const educationProjectSite = "https://educacaofuturo.org.br/";

const impactStats = [
  { label: "Fundacao", value: "2011" },
  { label: "CNPJ", value: "15.222.802/0001-13" },
  { label: "Campanha de Natal", value: "380 criancas" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Aprender",
    text: "Projetos educacionais, cursos livres, leitura e apoio ao desenvolvimento integral.",
    color: "#0157aa",
  },
  {
    icon: HandHeart,
    title: "Cuidar",
    text: "Acoes com familias, infancia, seguranca alimentar e fortalecimento comunitario.",
    color: "#c4533f",
  },
  {
    icon: Sparkles,
    title: "Criar",
    text: "Cultura, brincadeiras, esporte, recreacao e vivencias que ampliam repertorios.",
    color: "#f4b43f",
  },
  {
    icon: Building2,
    title: "Conectar",
    text: "Parcerias com orgaos publicos, empresas, fundacoes, associacoes e redes de apoio.",
    color: "#5d65c9",
  },
];

const routine = [
  { icon: Baby, title: "Infancia", text: "Acolhimento, protecao e experiencias que fortalecem vinculos." },
  { icon: BookOpenCheck, title: "Educacao", text: "Leitura, linguagem, cultura, oficinas e desenvolvimento humano." },
  { icon: Gamepad2, title: "Convivencia", text: "Jogos, esporte, recreacao, cooperacao e autonomia." },
  { icon: HeartHandshake, title: "Familias", text: "Escuta, eventos, orientacao e participacao comunitaria." },
];

const associationNuclei = [
  ["Nucleo Infantil", "Criancas de 4 meses a 4 anos, em periodo integral, em regime de maternal."],
  ["Nucleo de Formacao", "Criancas de 4 a 13 anos, em periodo semi-integral, com oficinas culturais, esportivas e musicais."],
  ["Nucleo Social", "Atendimento a familias, campanhas, eventos, voluntariado e apoio comunitario."],
];

const projects = [
  ["Pedagogia viva", "Oficinas, reforco, leitura, brincadeiras e tecnologias para fins sociais.", Palette],
  ["Corpo e movimento", "Esporte, musica, recreacao, jogos educativos e convivencia.", Music],
  ["Protecao social", "Acoes com familias, voluntariado, redes de apoio e cidadania.", UsersRound],
];

const documents = [
  {
    title: "Estatuto Social",
    detail: "Documento institucional com denominacao, finalidade, governanca e regras do IPF.",
    href: "/documents/estatuto-pro-futuro-2026.pdf",
  },
  {
    title: "Ata da Assembleia Geral",
    detail: "Registro de assembleia, eleicao, posse e mandato da diretoria institucional.",
    href: "/documents/ata-pro-futuro-2026.pdf",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
    >
      <p className="inline-flex items-center gap-2 rounded-md bg-[#eaf4ff] px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#0157aa]">
        <Star size={16} fill="currentColor" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="font-kid mt-5 text-4xl font-bold tracking-normal text-[#06213f] md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#58677a] md:text-lg">
        {text}
      </p>
    </motion.div>
  );
}

function PlayShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute block rounded-md ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 6, -3, 0] }}
      transition={{ duration: 5.8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function InstitutionalLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0] text-[#0b1454]">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-[#ff7a00]"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0b1454]/10 bg-white/92 shadow-[0_10px_35px_rgba(11,20,84,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.a
            href="#"
            className="flex items-center gap-3 text-[#0b1454]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative block h-16 w-28 sm:w-34">
              <Image
                src="/images/logo-instituto-pro-futuro-oficial.png"
                alt="Instituto Pro Futuro"
                fill
                sizes="(min-width: 640px) 136px, 112px"
                className="object-contain"
                priority
              />
            </span>
          </motion.a>

          <nav className="hidden items-center rounded-md border border-[#0b1454]/10 bg-[#f4f7ff] p-1 text-sm font-semibold text-[#0b1454]/78 lg:flex">
            {navItems.map(([label, href]) => (
              <motion.a
                key={href}
                href={href}
                className="relative px-4 py-2 transition hover:text-[#0b1454]"
                onMouseEnter={() => setHoveredNav(href)}
                onMouseLeave={() => setHoveredNav(null)}
                whileTap={{ scale: 0.96 }}
              >
                {hoveredNav === href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{label}</span>
              </motion.a>
            ))}
            <motion.a
              href={educationProjectSite}
              target="_blank"
              rel="noreferrer"
              className="relative px-4 py-2 text-[#a7198e] transition hover:text-[#0b1454]"
              whileTap={{ scale: 0.96 }}
            >
              Educacao Futuro
            </motion.a>
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              href={educationProjectSite}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center gap-2 rounded-md bg-[#0b1454] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#a7198e] sm:inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Educacao Futuro
              <MonitorUp size={17} aria-hidden="true" />
            </motion.a>
            <motion.button
              type="button"
              aria-label="Abrir menu"
              className="inline-grid size-11 place-items-center rounded-md border border-[#0b1454]/14 text-[#0b1454] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              whileTap={{ scale: 0.92 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              className="border-t border-[#0b1454]/10 bg-white px-4 py-4 lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <div className="grid gap-2">
                {navItems.map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="rounded-md bg-[#f4f7ff] px-4 py-3 font-semibold text-[#0b1454]"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href={educationProjectSite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-[#ff7a00] px-4 py-3 font-bold text-white"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.035 }}
                >
                  Educacao Futuro
                </motion.a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <section className="relative min-h-[94vh] overflow-hidden bg-[#0b1454] pt-20 text-white">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/hero-educacao-infantil.png"
            alt="Criancas em ambiente educacional acolhedor"
            fill
            priority
            className="object-cover object-center opacity-[0.62]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,20,84,0.98)_0%,rgba(11,20,84,0.78)_43%,rgba(21,157,218,0.18)_100%)]" />
        <PlayShape className="left-[7%] top-[22%] h-12 w-12 bg-[#ff7a00]" />
        <PlayShape className="bottom-[19%] left-[44%] h-8 w-24 bg-[#a7198e]" delay={0.8} />
        <PlayShape className="right-[9%] top-[18%] h-10 w-10 bg-white/70" delay={1.2} />
        <PlayShape className="bottom-[10%] right-[18%] h-14 w-14 bg-[#159dda]" delay={1.8} />

        <div className="relative mx-auto flex min-h-[calc(94vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="inline-flex max-w-full items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold leading-5 text-white/90 backdrop-blur"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
            >
              <ShieldCheck size={17} aria-hidden="true" />
              <span className="min-w-0">Organizacao sem fins lucrativos em Barueri</span>
            </motion.p>
            <h1 className="font-kid mt-7 max-w-full text-[2.75rem] font-bold leading-[1.08] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Transformando cuidado em futuro
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
              Uma associacao sem fins lucrativos dedicada a educacao, assistencia
              social, cultura, convivencia e desenvolvimento comunitario.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#associacao"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#ff7a00] px-4 py-3 text-center text-base font-bold leading-5 text-white shadow-[0_18px_40px_rgba(255,122,0,0.26)] transition hover:bg-[#f5b31c] sm:w-auto sm:px-6"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                Conhecer a associacao
                <BookOpenCheck size={19} aria-hidden="true" />
              </motion.a>
              <motion.a
                href={educationProjectSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/28 px-4 py-3 text-center text-base font-bold leading-5 text-white backdrop-blur transition hover:bg-white/12 sm:w-auto sm:px-6"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                Projeto Educacao Futuro
                <MonitorUp size={19} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-x border-[#dcd6c9] md:grid-cols-3">
          {impactStats.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative overflow-hidden border-b border-[#dcd6c9] px-6 py-8 md:border-b-0 md:border-r last:md:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ backgroundColor: "#eaf4ff" }}
            >
              <motion.span
                className="absolute right-6 top-6 text-[#f4b43f]"
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.25 }}
              >
                <Sparkles size={22} aria-hidden="true" />
              </motion.span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#627083]">
                {item.label}
              </p>
              <p className="font-kid mt-3 text-4xl font-bold text-[#0157aa]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="instituto" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Institucional"
          title="Uma entidade criada para transformar comunidade em oportunidade"
          text="O Instituto Pro Futuro atua sem fins lucrativos e orienta suas acoes para finalidades de relevancia publica e social."
        />

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                className="group relative min-h-64 overflow-hidden rounded-lg border border-[#d9d1c3] bg-white p-6 shadow-[0_18px_50px_rgba(1,87,170,0.08)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
              >
                <span
                  className="grid size-13 place-items-center rounded-md text-white shadow-lg"
                  style={{ backgroundColor: pillar.color }}
                >
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3 className="font-kid mt-7 text-3xl font-bold text-[#06213f]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#58677a]">{pillar.text}</p>
                <motion.span
                  className="absolute -bottom-9 -right-9 size-28 rounded-md bg-[#eaf4ff]"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="associacao" className="relative bg-[#0b1454] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_28px)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
          >
            <p className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#f4b43f]">
              <Baby size={17} aria-hidden="true" />
              Associacao
            </p>
            <h2 className="font-kid mt-5 text-4xl font-bold tracking-normal md:text-6xl">
              Uma rede de cuidado, educacao e convivencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              A associacao atua junto a criancas, familias e comunidade, promovendo
              oportunidades por meio de projetos sociais, educacionais e culturais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#contato"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8cc8ff] px-5 font-bold text-[#06213f] transition hover:bg-[#b7dcff]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Fale com a associacao
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
              <motion.a
                href={educationProjectSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/22 px-5 font-bold text-white transition hover:bg-white/10"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Projeto Educacao Futuro
              </motion.a>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {routine.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="relative overflow-hidden rounded-lg border border-white/14 bg-white/[0.08] p-6 backdrop-blur"
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.52, delay: index * 0.08 }}
                  whileHover={{ y: -7, backgroundColor: "rgba(255,255,255,0.13)" }}
                >
                  <Icon className="text-[#f4b43f]" size={28} aria-hidden="true" />
                  <h3 className="font-kid mt-5 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="nucleos" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Nucleos de atuacao"
            title="Projetos que acolhem, formam e aproximam a comunidade"
            text="As iniciativas do Instituto unem educacao, cultura, esporte, assistencia social e participacao familiar."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, text, Icon], index) => (
              <motion.article
                key={title as string}
                className="relative overflow-hidden rounded-lg border border-[#d9d1c3] bg-[#f7f4ed] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.52, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-semibold text-[#c4533f]">
                    0{index + 1}
                  </span>
                  <span className="grid size-12 place-items-center rounded-md bg-[#0157aa] text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-kid mt-8 text-3xl font-bold text-[#06213f]">
                  {title as string}
                </h3>
                <p className="mt-4 leading-7 text-[#58677a]">{text as string}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {associationNuclei.map(([title, text], index) => (
              <motion.article
                key={title}
                className="rounded-lg border border-[#c9d9ef] bg-[#eaf4ff] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <p className="font-kid text-2xl font-bold text-[#0157aa]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[#58677a]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="bg-[#f7f4ed] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projetos"
            title="Programas que conectam educacao, cuidado e cidadania"
            text="A base estatutaria permite desenvolver iniciativas em educacao, assistencia social, cultura, esporte, saude, tecnologia, meio ambiente e qualificacao humana."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              className="rounded-lg bg-[#0157aa] p-8 text-white"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <ClipboardCheck size={34} className="text-[#f4b43f]" aria-hidden="true" />
              <h3 className="font-kid mt-6 text-4xl font-bold">Frentes integradas</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Educacao infantil, assistencia social, cultura, voluntariado e
                parcerias em programas que fortalecem criancas, familias e comunidade.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-3"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              {["Atendimento", "Campanhas", "Oficinas", "Voluntariado"].map((item) => (
                <motion.div
                  key={item}
                  className="rounded-lg border border-[#d9d1c3] bg-white p-5 font-kid text-2xl font-bold text-[#06213f]"
                  whileHover={{ x: 8, borderColor: "#0157aa" }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="documentos" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c4533f]">
                Transparencia
              </p>
              <h2 className="font-kid mt-4 text-4xl font-bold tracking-normal text-[#06213f] md:text-6xl">
                Documentos institucionais
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#58677a]">
                Os documentos enviados foram adicionados ao site para consulta publica.
              </p>
            </motion.div>
            <div className="grid gap-4">
              {documents.map((document, index) => (
                <motion.a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-[#d9d1c3] bg-[#f7f4ed] p-6 transition hover:border-[#0157aa] hover:bg-[#eaf4ff]"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-kid text-3xl font-bold text-[#06213f]">
                        {document.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-[#58677a]">
                        {document.detail}
                      </p>
                    </div>
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-[#0157aa] text-white transition group-hover:bg-[#c4533f]">
                      <Download size={22} aria-hidden="true" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#0157aa] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4b43f]">
              Contato
            </p>
            <h2 className="font-kid mt-4 text-4xl font-bold tracking-normal md:text-6xl">
              Familias, parceiros e apoiadores entram por aqui
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Entre em contato para saber mais sobre atendimento, projetos, parcerias
              e formas de apoiar o Instituto Pro Futuro.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/16 bg-white/[0.08] p-6 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              [MapPin, "Rua Guarantan, 251", "Engenho Novo, Barueri, Sao Paulo."],
              [PhoneCall, "11 4257-2198", "Atendimento a familias, parceiros e comunidade."],
              [Mail, "secretaria@educacaofuturo.org.br", "Canal para informacoes institucionais e educacionais."],
              [MonitorUp, "educacaofuturo.org.br", "Conheca tambem o projeto Educacao Futuro."],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-4 border-b border-white/12 py-5 first:pt-0 last:border-b-0 last:pb-0">
                <Icon className="shrink-0 text-[#f4b43f]" size={24} aria-hidden="true" />
                <div>
                  <p className="font-bold">{title as string}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{text as string}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
