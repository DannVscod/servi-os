import type { CSSProperties } from 'react'
import { ArrowRight, CalendarClock, Check, CircleAlert, CircleCheck, ClipboardCheck, Database, ExternalLink, FileSpreadsheet, Gauge, Globe2, Headphones, KeyRound, LayoutDashboard, LifeBuoy, Mail, MessageCircle, Phone, Search, ShieldCheck, Sparkles, Unplug, UserRound, UsersRound } from 'lucide-react'
import { Header } from './components/Header'
import { SectionTitle } from './components/SectionTitle'
import { Faq } from './components/Faq'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { siteConfig } from './config/site'
import { developableSolutions, differentials, problemsAndSolutions } from './data/content'
import { services } from './data/services'
import { whatsappCustomUrl, whatsappUrl } from './utils/whatsapp'
import { useScrollReveal } from './hooks/useScrollReveal'

const steps = [
  ['01', 'Primeiro contato', 'Você explica sua necessidade pelo WhatsApp.'],
  ['02', 'Entendimento do problema', 'A situação é analisada para identificar a solução mais adequada.'],
  ['03', 'Orçamento e execução', 'Após a aprovação, o serviço é desenvolvido ou realizado conforme o combinado.'],
  ['04', 'Entrega e suporte', 'A solução é entregue com orientações e acompanhamento quando necessário.'],
]
const stepIcons = [Phone, Search, ClipboardCheck, LifeBuoy]
const solutionIcons = [Globe2, UsersRound, FileSpreadsheet, LayoutDashboard, Unplug, Gauge]
const supportItems = ['Correções e pequenos ajustes', 'Atualizações programadas', 'Suporte remoto', 'Manutenção preventiva', 'Backup e acompanhamento', 'Prioridade no atendimento']
const supportPlansMessage = 'Olá, Danrley! Gostaria de conhecer os planos de suporte e manutenção.'
const supportQuoteMessage = 'Olá, Danrley! Gostaria de solicitar um orçamento para um plano de suporte.'

export default function App() {
  useScrollReveal()
  return <>
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> Tecnologia sob medida, sem complicação</span>
            <h1>Tecnologia que resolve problemas e <em>facilita o seu negócio</em></h1>
            <p>Criação de sites, sistemas personalizados, automação de tarefas, suporte técnico e organização de soluções digitais para empresas e profissionais.</p>
            <div className="button-row">
              <a className="button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Solicitar orçamento</a>
              <a className="button button--secondary" href="#servicos">Conhecer soluções <ArrowRight /></a>
            </div>
            <div className="hero-trust"><span><Check /> Atendimento direto</span><span><Check /> Soluções personalizadas</span><span><Check /> Suporte contínuo</span></div>
          </div>
          <div className="tech-visual" aria-label="Composição abstrata representando serviços e organização">
            <svg className="hero-art" viewBox="0 0 560 520" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="shapeA" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#174f57" /><stop offset="1" stopColor="#2e716b" /></linearGradient>
                <linearGradient id="shapeB" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e9efec" /><stop offset="1" stopColor="#f7f4ef" /></linearGradient>
              </defs>
              <path d="M112 130C174 51 325 28 427 93c90 57 112 186 58 277-56 94-196 132-297 76C73 383 37 226 112 130Z" fill="url(#shapeB)" />
              <path d="M221 112c73-23 163 21 188 94 29 83-19 177-105 202-80 24-169-22-194-103-25-82 27-166 111-193Z" fill="url(#shapeA)" />
              <path d="M172 293c67-87 145-100 233-35" fill="none" stroke="#f0f5f3" strokeWidth="2" strokeDasharray="6 9" />
              <circle cx="173" cy="293" r="9" fill="#c8673a" />
              <circle cx="405" cy="258" r="9" fill="#f4f7f5" />
              <rect x="205" y="176" width="174" height="128" rx="24" fill="#fff" fillOpacity=".14" stroke="#fff" strokeOpacity=".26" />
              <rect x="232" y="207" width="82" height="10" rx="5" fill="#fff" fillOpacity=".8" />
              <rect x="232" y="231" width="118" height="7" rx="3.5" fill="#fff" fillOpacity=".32" />
              <rect x="232" y="254" width="35" height="25" rx="8" fill="#fff" fillOpacity=".82" />
              <rect x="276" y="254" width="35" height="25" rx="8" fill="#c8673a" fillOpacity=".88" />
            </svg>
            <div className="hero-service-pill pill-sites"><Check /> Sites</div>
            <div className="hero-service-pill pill-systems"><Check /> Sistemas</div>
            <div className="hero-service-pill pill-automation"><Check /> Automações</div>
            <div className="hero-service-pill pill-support"><Check /> Suporte</div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section"><div className="container">
        <SectionTitle eyebrow="O que posso fazer por você" title="Soluções para o seu negócio" description="Soluções práticas para melhorar processos, organizar informações, aumentar a produtividade e resolver necessidades de tecnologia no dia a dia." />
        <div className="services-grid">{services.map(({ title, description, items, icon: Icon }, index) => <article className="service-card" key={title} data-reveal style={{ '--delay': `${(index % 3) * 70}ms` } as CSSProperties}>
          <div className="icon-box"><Icon /></div><h3>{title}</h3><p>{description}</p>
          <ul>{items.map(item => <li key={item}><Check />{item}</li>)}</ul>
          <a href={whatsappUrl(title)} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight /></a>
        </article>)}</div>
      </div></section>

      <section id="solucoes" className="section section--tinted"><div className="container">
        <SectionTitle eyebrow="Problema → solução" title="Como posso ajudar?" description="Identifique o seu cenário e veja o caminho mais direto para resolvê-lo." />
        <div className="solutions-grid">{problemsAndSolutions.map(({ problem, solution }, index) => <article className="solution-row" key={problem} data-reveal style={{ '--delay': `${(index % 2) * 80}ms` } as CSSProperties}><CircleAlert className="problem-icon" aria-hidden="true" /><span className="problem">{problem}</span><ArrowRight className="connection-arrow" /><strong>{solution}</strong></article>)}</div>
      </div></section>

      <section className="section security-section" data-reveal><div className="container security-grid">
        <div>
          <span className="eyebrow">Cuidado com as informações</span>
          <h2>Organização e segurança também fazem parte da solução</h2>
          <p>Muitas empresas perdem informações importantes por falta de organização, controle de acessos ou backups adequados.</p>
          <p>Meu objetivo é criar soluções que, além de atender às necessidades do negócio, mantenham os dados organizados, protegidos e disponíveis quando forem necessários.</p>
        </div>
        <div className="security-points">
          <article><Database /><span>Informações mais organizadas</span></article>
          <article><KeyRound /><span>Acessos mais bem controlados</span></article>
          <article><ShieldCheck /><span>Menos risco de perda de dados</span></article>
        </div>
      </div></section>

      <section className="section process"><div className="container">
        <SectionTitle eyebrow="Como funciona" title="Um processo simples e transparente" />
        <div className="steps">{steps.map(([number, title, text], index) => { const Icon = stepIcons[index]; return <article key={number} data-reveal style={{ '--delay': `${index * 90}ms` } as CSSProperties}><span>{number}</span><div className="step-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article> })}</div>
      </div></section>

      <section className="section ongoing-support" data-reveal><div className="container support-layout">
        <div className="support-copy">
          <span className="eyebrow"><CalendarClock /> Suporte e Manutenção Contínua</span>
          <h2>Suporte e manutenção para acompanhar o crescimento do seu negócio</h2>
          <p>Após a entrega do projeto, você pode contratar um plano de suporte para manter seu site, sistema ou ambiente de TI atualizado, organizado e funcionando corretamente.</p>
          <span className="support-list-title">Os planos podem incluir:</span>
          <ul>{supportItems.map((item) => <li key={item}><Check />{item}</li>)}</ul>
        </div>
        <aside className="support-panel" aria-label="Informações sobre os planos de suporte">
          <div className="support-panel-icon"><Headphones /></div>
          <div className="support-notice"><strong>Importante:</strong> O suporte contínuo é um serviço opcional contratado à parte. O período de garantia cobre apenas correções relacionadas ao projeto entregue. Novas funcionalidades, alterações de escopo ou serviços adicionais são avaliados e orçados separadamente.</div>
          <div className="support-actions">
            <a className="button" href={whatsappCustomUrl(supportPlansMessage)} target="_blank" rel="noreferrer"><MessageCircle /> Conhecer os planos</a>
            <a className="button button--secondary" href={whatsappCustomUrl(supportQuoteMessage)} target="_blank" rel="noreferrer"><ArrowRight /> Solicitar orçamento</a>
          </div>
        </aside>
      </div></section>

      <section id="sobre" className="section section--dark"><div className="container about-grid">
        <div className="avatar-wrap"><div className="avatar"><UserRound /></div><div className="avatar-note"><span>Soluções em tecnologia</span><strong>Atendimento próximo e profissional</strong></div></div>
        <div><span className="eyebrow eyebrow--light">Sobre</span><h2>Transformo necessidades em soluções tecnológicas</h2>
          <p>Tenho experiência na criação de soluções em tecnologia para empresas e profissionais, ajudando a automatizar processos, desenvolver sistemas, criar sites e melhorar a infraestrutura de TI.</p>
          <p>Cada projeto é desenvolvido com foco em entender a necessidade do cliente e entregar uma solução prática, confiável e fácil de utilizar.</p>
          <p>Também realizo serviços de suporte técnico, manutenção, formatação, limpeza e melhoria de computadores para empresas e profissionais.</p>
          <p>Além disso, aplico boas práticas de segurança, privacidade e organização de dados em todos os projetos, buscando oferecer soluções preparadas para acompanhar o crescimento do negócio.</p>
          <a className="text-link light linkedin-about" href={siteConfig.linkedin} target="_blank" rel="noreferrer">Conheça minha experiência profissional no LinkedIn <ExternalLink /></a>
        </div>
      </div></section>

      <section id="possibilidades" className="section section--tinted"><div className="container">
        <SectionTitle eyebrow="Possibilidades" title="Soluções que posso desenvolver" description="Exemplos de soluções que podem ser adaptadas à necessidade e à rotina de cada cliente." />
        <div className="projects-grid">{developableSolutions.map((solution, index) => { const Icon = solutionIcons[index]; return <article className="project-card" key={solution.title} data-reveal style={{ '--delay': `${(index % 3) * 70}ms` } as CSSProperties}>
          <div className={`project-preview preview-${index % 3 + 1}`}><div><span /><span /><span /></div></div>
          <div className="project-category"><Icon /> Solução disponível</div><h3>{solution.title}</h3><p>{solution.description}</p>
          <a href={whatsappUrl(solution.title)} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight /></a>
        </article> })}</div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="Por que escolher?" title="Parceria do primeiro contato à entrega" />
        <div className="differentials">{differentials.map(({ title, description }, index) => <article key={title} data-reveal style={{ '--delay': `${(index % 3) * 70}ms` } as CSSProperties}><CircleCheck /><div><strong>{title}</strong><p>{description}</p></div></article>)}</div>
      </div></section>

      <section className="section section--tinted"><div className="container faq-grid">
        <SectionTitle eyebrow="Perguntas frequentes" title="Antes de começarmos" description="Respostas rápidas sobre atendimento, orçamento e suporte." />
        <Faq />
      </div></section>

      <section id="contato" className="section contact-section"><div className="container contact-card">
        <div><span className="eyebrow eyebrow--light">Contato</span><h2>Vamos conversar sobre sua necessidade?</h2><p>Entre em contato e explique brevemente o que você precisa. A partir disso, será possível avaliar a melhor solução e preparar um orçamento.</p></div>
        <div className="contact-actions"><a className="button button--white" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Chamar no WhatsApp</a><a className="button button--ghost" href={`mailto:${siteConfig.email}`}><Mail /> Enviar e-mail</a></div>
      </div></section>
    </main>
    <Footer />
    <FloatingActions />
  </>
}
