import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight,
  Github, Linkedin, Mail, Menu, Moon, Sun, X,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { projects, type Lang, type Project } from './data/projects'
import { experience } from './data/experience'
import { portfolioServices } from './data/portfolioServices'
import { HeroOrbit } from './components/HeroOrbit'
import { siteConfig } from './config/site'
import { whatsappUrl } from './utils/whatsapp'

const copy = {
  pt: {
    nav: ['Sobre', 'Experiência', 'Projetos', 'Especialidades', 'Serviços', 'Contato'],
    kicker: 'ENGENHARIA DE SOFTWARE · SOLUÇÕES DIGITAIS',
    hero: 'Construindo sistemas', heroAccent: 'que fazem sentido.',
    intro: 'Sou Danrley, Software Engineer. Desenvolvimento, cloud, automação e segurança conectados a problemas reais de negócio.',
    work: 'Explorar projetos', together: 'Vamos trabalhar juntos', scroll: 'ROLE PARA EXPLORAR',
    about: 'Engenharia com contexto. Tecnologia com propósito.',
    aboutBody: 'Atuo no desenvolvimento de software, automação, integração de sistemas, cloud computing e segurança da informação. Meu cargo formal é Assessor; minha atuação técnica inclui desenvolvimento, implantação e evolução de sistemas.',
    aboutBody2: 'Em paralelo, crio projetos próprios e ajudo empresas e profissionais a transformar necessidades em sistemas, websites e operações digitais mais organizadas.',
    experience: 'Experiência em diferentes frentes.', projects: 'Projetos próprios e uma entrega profissional relevante.',
    expertise: 'Do código à operação.', services: 'Como posso ajudar sua empresa.',
    contact: 'Tem um desafio em mente?', contactBody: 'Conte o contexto do seu projeto. Podemos conversar sobre escopo, possibilidades e próximos passos.',
    quote: 'Solicitar orçamento', back: 'Voltar aos projetos', context: 'Contexto e desafio', approach: 'Arquitetura e implementação', outcome: 'Entrega e estado atual',
    evolving: 'Em evolução', privacy: 'Política de privacidade', theme: 'Alternar tema', language: 'Mudar idioma', menu: 'Abrir menu', view: 'Ver projeto',
    personal: 'Projetos pessoais', professional: 'Experiência profissional / Case privado', technologies: 'Tecnologias', confidential: 'Detalhes técnicos não divulgados',
    concept: 'Visual conceitual · não representa uma tela real', privateCase: 'Sistema interno privado. Sem acesso público ou repositório divulgado.',
  },
  en: {
    nav: ['About', 'Experience', 'Work', 'Expertise', 'Services', 'Contact'],
    kicker: 'SOFTWARE ENGINEERING · DIGITAL SOLUTIONS',
    hero: 'Building systems', heroAccent: 'that make sense.',
    intro: "I'm Danrley, a Software Engineer. Development, cloud, automation and security connected to real business problems.",
    work: 'Explore my work', together: "Let's work together", scroll: 'SCROLL TO EXPLORE',
    about: 'Engineering with context. Technology with purpose.',
    aboutBody: 'I work in software development, automation, systems integration, cloud computing and information security. My formal title is Advisor; my technical work includes developing, deploying and evolving systems.',
    aboutBody2: 'Alongside that work, I build independent projects and help businesses and professionals turn needs into systems, websites and more organized digital operations.',
    experience: 'Experience across disciplines.', projects: 'Independent projects and a significant professional delivery.',
    expertise: 'From code to operations.', services: 'How I can help your business.',
    contact: 'Have a challenge in mind?', contactBody: 'Tell me about your project. We can discuss scope, possibilities and next steps.',
    quote: 'Request a quote', back: 'Back to work', context: 'Context and challenge', approach: 'Architecture and implementation', outcome: 'Delivery and current status',
    evolving: 'In active development', privacy: 'Privacy policy', theme: 'Toggle theme', language: 'Change language', menu: 'Open menu', view: 'View project',
    personal: 'Personal projects', professional: 'Professional experience / Private case study', technologies: 'Technologies', confidential: 'Technical details not disclosed',
    concept: 'Conceptual visual · not an actual product screen', privateCase: 'Private internal system. No public access or repository is provided.',
  },
}

const ids = ['sobre', 'experiencia', 'projetos', 'especialidades', 'servicos', 'contato']
const skills = [
  { pt: 'Desenvolvimento', en: 'Development', items: ['React', 'TypeScript', 'Ruby on Rails', 'Sistemas institucionais'] },
  { pt: 'Cloud & operações', en: 'Cloud & operations', items: ['Cloudflare Workers', 'D1', 'Infraestrutura', 'Suporte'] },
  { pt: 'Automação & dados', en: 'Automation & data', items: ['Fluxos de trabalho', 'Relatórios', 'Integrações', 'Dados'] },
  { pt: 'Segurança', en: 'Security', items: ['Autenticação', 'Permissões', '2FA', 'Auditoria'] },
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function Visual({ project, lang }: { project: Project; lang: Lang }) {
  return <div className={`visual visual-${project.visual}`} aria-label={copy[lang].concept} role="img">
    <div className="visual-grid" />
    <div className="visual-window" aria-hidden="true">
      <div className="window-top"><i /><i /><i /><b>{project.name}</b></div>
      <div className="window-body"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="mock-main"><div className="mock-heading" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-lines"><i /><i /><i /><i /></div></div></div>
    </div>
    <span className="visual-stamp">{copy[lang].concept}</span>
  </div>
}

function ProjectCard({ project, lang, openProject }: { project: Project; lang: Lang; openProject: (slug: string) => void }) {
  const t = copy[lang]
  return <Reveal className="project-card">
    <a href={`?project=${project.slug}`} onClick={event => { event.preventDefault(); openProject(project.slug) }} aria-label={`${t.view}: ${project.name}`}>
      <Visual project={project} lang={lang} />
      <div className="project-meta"><div><span className="eyebrow">{project.category[lang]}</span><h3>{project.name}</h3><p>{project.summary[lang]}</p><div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>{project.status && <span className="status">{t.evolving}</span>}</div><span className="project-arrow"><ArrowUpRight size={23} /></span></div>
    </a>
  </Reveal>
}

function CasePage({ project, lang, closeProject }: { project: Project; lang: Lang; closeProject: () => void }) {
  const t = copy[lang]
  return <div className="case-page shell">
    <button className="back-link" onClick={closeProject}><ArrowLeft size={18} />{t.back}</button>
    <div className="case-heading"><span className="eyebrow">{project.category[lang]}</span><h1>{project.name}<span className="accent">.</span></h1><p>{project.summary[lang]}</p>{project.status && <span className="status">{t.evolving}</span>}</div>
    <Visual project={project} lang={lang} />
    <div className="case-details"><div><span className="eyebrow">01 / {t.context}</span><p>{project.challenge[lang]}</p></div><div><span className="eyebrow">02 / {t.approach}</span><p>{project.approach[lang]}</p></div><div><span className="eyebrow">03 / {t.outcome}</span><p>{project.result[lang]}</p></div><div><span className="eyebrow">04 / {t.technologies}</span>{project.technologies.length ? <div className="tag-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div> : <p>{t.confidential}</p>}</div></div>
    <ul className="case-highlights">{project.highlights.map(item => <li key={item.pt}>{item[lang]}</li>)}</ul>
    {project.kind === 'professional' ? <p className="technology-note">{t.privateCase}</p> : <a className="button primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{t.together}<ArrowUpRight size={18} /></a>}
  </div>
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [slug, setSlug] = useState(() => new URLSearchParams(location.search).get('project'))
  const project = projects.find(item => item.slug === slug)
  const t = copy[lang]

  useEffect(() => { document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'; localStorage.setItem('portfolio-language', lang) }, [lang])
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme); document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101410' : '#f5f6ef') }, [theme])
  useEffect(() => { const onPop = () => setSlug(new URLSearchParams(location.search).get('project')); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  useEffect(() => { if (slug && !project) { history.replaceState({}, '', import.meta.env.BASE_URL); setSlug(null) } }, [slug, project])
  useEffect(() => {
    const title = project ? `${project.name} | Danrley Sousa` : 'Danrley Sousa | Software Engineer & Soluções Digitais'
    const description = project ? project.summary[lang] : t.intro
    const canonical = `${location.origin}${import.meta.env.BASE_URL}${project ? `?project=${project.slug}` : ''}`
    document.title = title
    for (const [selector, value] of [['link[rel="canonical"]', canonical], ['meta[property="og:url"]', canonical], ['meta[property="og:title"]', title], ['meta[property="og:description"]', description], ['meta[name="description"]', description]]) document.querySelector(selector)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value)
  }, [project, lang, t.intro])

  const openProject = (next: string) => { history.pushState({}, '', `?project=${next}`); setSlug(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const closeProject = () => { history.pushState({}, '', `${import.meta.env.BASE_URL}#projetos`); setSlug(null); requestAnimationFrame(() => document.getElementById('projetos')?.scrollIntoView()) }

  return <>
    <a className="skip-link" href="#main">{lang === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}</a>
    <header className="site-header"><div className="shell header-inner">
      <a className="wordmark" href={import.meta.env.BASE_URL} aria-label="Danrley Sousa"><strong>d<span>.</span></strong><span>DANRLEY<br />SOUSA</span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}>{ids.map((id, i) => <a key={id} href={`${project ? import.meta.env.BASE_URL : ''}#${id}`} onClick={() => { setMenuOpen(false); if (project) setSlug(null) }}>{t.nav[i]}</a>)}</nav>
      <div className="header-actions"><button className="icon-button language-button" onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} aria-label={t.language}>{lang.toUpperCase()}</button><button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
    </div></header>
    <main id="main">{project ? <CasePage project={project} lang={lang} closeProject={closeProject} /> : <>
      <section className="hero shell" id="inicio"><div className="hero-topline"><span className="eyebrow"><span className="live-dot" />{t.kicker}</span><span>PORTFÓLIO / 2026</span></div><div className="hero-content"><div><h1>{t.hero}<br /><em>{t.heroAccent}</em></h1><p>{t.intro}</p><div className="button-row"><a className="button primary" href="#projetos">{t.work}<ArrowUpRight size={18} /></a><a className="button text-button" href="#contato">{t.together}<ArrowRight size={18} /></a></div></div><HeroOrbit /></div><div className="hero-bottom"><span>{t.scroll}</span><ArrowDownRight size={23} /></div></section>
      <section className="section about-section" id="sobre"><div className="shell section-grid"><Reveal><span className="eyebrow">01 / {t.nav[0].toUpperCase()}</span></Reveal><Reveal><h2>{t.about}</h2><div className="about-columns"><p>{t.aboutBody}</p><p>{t.aboutBody2}</p></div></Reveal></div></section>
      <section className="section" id="experiencia"><div className="shell section-grid"><Reveal><span className="eyebrow">02 / {t.nav[1].toUpperCase()}</span></Reveal><div><Reveal><h2>{t.experience}</h2></Reveal><div className="timeline">{experience.map((item, i) => <Reveal className="timeline-item" key={item.title.pt}><span>0{i + 1}</span><div><h3>{item.title[lang]}</h3><p>{item.detail[lang]}</p></div><ArrowUpRight size={19} /></Reveal>)}</div></div></div></section>
      <section className="section work-section" id="projetos"><div className="shell"><Reveal className="work-heading"><span className="eyebrow">03 / {t.nav[2].toUpperCase()}</span><h2>{t.projects}</h2></Reveal><div className="project-group"><h3>{t.personal}</h3><div className="project-grid">{projects.filter(item => item.kind === 'personal').map(item => <ProjectCard key={item.slug} project={item} lang={lang} openProject={openProject} />)}</div></div><div className="project-group professional-group"><h3>{t.professional}</h3><div className="project-grid professional-grid">{projects.filter(item => item.kind === 'professional').map(item => <ProjectCard key={item.slug} project={item} lang={lang} openProject={openProject} />)}</div></div></div></section>
      <section className="section expertise-section" id="especialidades"><div className="shell section-grid"><Reveal><span className="eyebrow">04 / {t.nav[3].toUpperCase()}</span></Reveal><div><Reveal><h2>{t.expertise}</h2></Reveal><div className="expertise-grid">{skills.map((skill, i) => <Reveal className="expertise-card" key={skill.en}><span className="eyebrow">/ 0{i + 1}</span><h3>{skill[lang]}</h3><div className="tag-list">{skill.items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div></div></div></section>
      <section className="section services-section" id="servicos"><div className="shell section-grid"><Reveal><span className="eyebrow">05 / {t.nav[4].toUpperCase()}</span></Reveal><div><Reveal><h2>{t.services}</h2></Reveal><div className="services-list">{portfolioServices.map((service, i) => <Reveal className="service-row" key={service.title.en}><span>0{i + 1}</span><div><h3>{service.title[lang]}</h3><p>{service.detail[lang]}</p></div><a href={whatsappUrl(service.title[lang])} target="_blank" rel="noopener noreferrer" aria-label={`${t.quote}: ${service.title[lang]}`}><ArrowUpRight /></a></Reveal>)}</div></div></div></section>
      <section className="contact-section" id="contato"><div className="shell"><Reveal><span className="eyebrow">06 / {t.nav[5].toUpperCase()}</span><h2>{t.contact}</h2><p>{t.contactBody}</p><a className="button contact-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{t.quote}<ArrowUpRight /></a></Reveal><div className="contact-links"><a href={`mailto:${siteConfig.email}`}><Mail size={17} /> Email</a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={siteConfig.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a></div></div></section>
    </>}</main>
    <footer className="site-footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} Danrley Sousa</span><span>Software Engineer / Brasil</span><a href={`${import.meta.env.BASE_URL}privacidade.html`}>{t.privacy}</a></div></footer>
  </>
}
