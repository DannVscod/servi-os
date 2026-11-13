export type Lang = 'pt' | 'en'
export type Localized = Record<Lang, string>

export interface Project {
  slug: string
  name: string
  kind: 'personal' | 'professional'
  category: Localized
  summary: Localized
  challenge: Localized
  approach: Localized
  result: Localized
  highlights: Localized[]
  technologies: string[]
  visual: string
  status?: 'evolving'
}

export const projects: Project[] = [
  {
    slug: 'dnewdesk', name: 'DnewDesk', kind: 'personal', visual: 'dnew', status: 'evolving',
    category: { pt: 'Projeto pessoal · SaaS Help Desk', en: 'Personal project · Help Desk SaaS' },
    summary: { pt: 'Help Desk que desenvolvo por conta própria para gerenciar chamados, equipes e permissões entre organizações.', en: 'A personal Help Desk project for managing tickets, teams and permissions across organizations.' },
    challenge: { pt: 'Queria reunir chamados, equipes e controles de acesso em uma aplicação multiempresa, mantendo os dados de cada organização separados.', en: "I wanted to bring tickets, teams and access controls into one app while keeping each organization's data separate." },
    approach: { pt: 'Uso Ruby on Rails e PostgreSQL no backend, React na interface e armazenamento compatível com S3 para anexos. O projeto tem autenticação, permissões, 2FA, auditoria, integrações e testes automatizados.', en: 'I use Ruby on Rails and PostgreSQL for the backend, React for the interface and S3-compatible storage for attachments. The project includes authentication, permissions, 2FA, audit logs, integrations and automated tests.' },
    result: { pt: 'Continuo desenvolvendo o DnewDesk como projeto pessoal. Ainda não divulgo números de uso.', en: "I'm still developing DnewDesk as a personal project. I don't publish usage figures yet." },
    highlights: [
      { pt: 'Chamados, equipes e permissões', en: 'Tickets, teams and permissions' },
      { pt: 'Autenticação, 2FA e auditoria', en: 'Authentication, 2FA and auditing' },
      { pt: 'Integrações e testes automatizados', en: 'Integrations and automated tests' },
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'React', 'S3-compatible storage'],
  },
  {
    slug: 'fynes', name: 'Fynes', kind: 'personal', visual: 'fynes',
    category: { pt: 'Projeto pessoal · Finanças', en: 'Personal project · Finance' },
    summary: { pt: 'Aplicação pessoal para acompanhar movimentações, contas, metas e planejamento mensal.', en: 'A personal app for tracking transactions, accounts, goals and monthly plans.' },
    challenge: { pt: 'Queria consultar e organizar minhas finanças em um só lugar, sem expor meus dados pessoais.', en: 'I wanted one place to review and organize my finances without exposing personal data.' },
    approach: { pt: 'Desenvolvi a interface com React e TypeScript, a API com Cloudflare Workers e a persistência em D1. A aplicação é uma PWA com autenticação para acesso privado.', en: 'I built the interface with React and TypeScript, the API with Cloudflare Workers and data storage with D1. The app is a PWA with authentication for private access.' },
    result: { pt: 'Implementei dashboard, movimentações, contas, metas, planejamento mensal, relatórios e exportação. A importação manual de CSV tem prévia e evita duplicações. Não publico os dados financeiros usados na aplicação.', en: "I've built the dashboard, transaction and account tracking, goals, monthly planning, reports and exports. Manual CSV import includes a preview and duplicate checks. I don't publish the financial data used in the app." },
    highlights: [
      { pt: 'Dashboard, movimentações e contas', en: 'Dashboard, transactions and accounts' },
      { pt: 'Metas, planejamento e relatórios', en: 'Goals, planning and reports' },
      { pt: 'PWA e autenticação privada', en: 'PWA and private authentication' },
    ],
    technologies: ['React', 'TypeScript', 'Cloudflare Workers', 'D1', 'PWA'],
  },
  {
    slug: 'prestacao-de-contas', name: 'Sistema de Prestação de Contas', kind: 'professional', visual: 'banca',
    category: { pt: 'Experiência profissional · Case institucional privado', en: 'Professional experience · Private institutional case study' },
    summary: { pt: 'Sistema interno de prestação de contas em que trabalhei profissionalmente. Não publico telas ou dados da instituição.', en: 'An internal reporting system I worked on professionally. I do not publish screenshots or institutional data.' },
    challenge: { pt: 'O sistema reúne registros de atividades e permite gerar relatórios para uso interno.', en: 'The system brings activity records together and generates reports for internal use.' },
    approach: { pt: 'Participei do desenvolvimento, da implantação e da evolução do sistema. Não divulgo a arquitetura nem os processos internos.', en: 'I helped develop, deploy and improve the system. I do not share its architecture or internal processes.' },
    result: { pt: 'É um trabalho institucional privado. Não há acesso público ao sistema, aos dados ou a indicadores de uso.', en: 'This is private institutional work. The system, its data and usage figures are not publicly available.' },
    highlights: [
      { pt: 'Desenvolvimento e implantação', en: 'Development and deployment' },
      { pt: 'Evolução de sistema interno', en: 'Evolution of an internal system' },
      { pt: 'Case apresentado sem dados internos', en: 'Case study without internal data' },
    ],
    technologies: [],
  },
]
