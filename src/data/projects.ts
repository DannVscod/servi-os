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
    summary: { pt: 'Plataforma independente de Help Desk, em evolução, para organizar atendimento entre equipes e organizações.', en: 'Independent Help Desk platform in active development, designed to organize support across teams and organizations.' },
    challenge: { pt: 'Reunir chamados, equipes e controles de acesso em uma aplicação multiempresa, mantendo os dados de cada organização separados.', en: 'Bring tickets, teams and access controls into a multi-tenant application while keeping each organization’s data separate.' },
    approach: { pt: 'Arquitetura com Ruby on Rails e PostgreSQL, interface com React e armazenamento de anexos compatível com S3. O projeto inclui autenticação, permissões, 2FA, auditoria, integrações e testes automatizados.', en: 'Architecture built with Ruby on Rails and PostgreSQL, a React interface and S3-compatible attachment storage. The project includes authentication, permissions, 2FA, auditing, integrations and automated tests.' },
    result: { pt: 'Projeto pessoal e independente em evolução. Não é apresentado como produto comercial consolidado nem acompanhado de métricas de clientes.', en: 'Independent personal project in active development. It is not presented as an established commercial product or with customer metrics.' },
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
    summary: { pt: 'Aplicação privada de finanças pessoais com dashboard, planejamento e acompanhamento de movimentações.', en: 'Private personal finance app with a dashboard, planning and transaction tracking.' },
    challenge: { pt: 'Organizar finanças pessoais em uma experiência responsiva sem expor dados financeiros privados.', en: 'Organize personal finances in a responsive experience without exposing private financial data.' },
    approach: { pt: 'Frontend em React e TypeScript, API em Cloudflare Workers e persistência em D1. A aplicação é uma PWA e usa autenticação para acesso privado.', en: 'React and TypeScript frontend, Cloudflare Workers API and D1 persistence. The application is a PWA and uses authentication for private access.' },
    result: { pt: 'Dashboard financeiro, movimentações, contas, metas, planejamento mensal, relatórios, exportação e importação manual de CSV com prévia e deduplicação estão implementados. Valores e dados pessoais permanecem privados.', en: 'The financial dashboard, transactions, accounts, goals, monthly planning, reports, exports and manual CSV import with preview and deduplication are implemented. Financial values and personal data remain private.' },
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
    summary: { pt: 'Aplicação institucional interna de prestação de contas, apresentada sem acesso ao sistema ou dados restritos.', en: 'Internal institutional accountability application, presented without access to the system or restricted data.' },
    challenge: { pt: 'Apoiar o registro de atividades e a produção de relatórios em um ambiente institucional de uso interno.', en: 'Support activity records and reporting in an internal institutional environment.' },
    approach: { pt: 'Participei tecnicamente do desenvolvimento, da implantação e da evolução do sistema. Os detalhes da arquitetura e dos processos internos não são divulgados.', en: 'I contributed technically to the development, deployment and ongoing evolution of the system. Architecture and internal process details are not disclosed.' },
    result: { pt: 'Case profissional privado. Informações operacionais e indicadores permanecem fora desta apresentação pública até confirmação de autorização para divulgação.', en: 'Private professional case study. Operational details and metrics are omitted from this public presentation pending confirmation of publication authorization.' },
    highlights: [
      { pt: 'Desenvolvimento e implantação', en: 'Development and deployment' },
      { pt: 'Evolução de sistema interno', en: 'Evolution of an internal system' },
      { pt: 'Sem acesso ou dados restritos', en: 'No restricted access or data' },
    ],
    technologies: [],
  },
]
