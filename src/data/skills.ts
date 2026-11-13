import type { Localized } from './projects'

export interface SkillGroup {
  title: Localized
  items: Array<string | Localized>
}

export const developmentSkills: SkillGroup[] = [
  {
    title: { pt: 'Backend', en: 'Backend' },
    items: ['PHP', 'Laravel', 'Ruby on Rails', 'Python', { pt: 'APIs REST', en: 'REST APIs' }],
  },
  {
    title: { pt: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: { pt: 'Bancos de dados', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis'],
  },
]

export const complementarySkills: SkillGroup[] = [
  {
    title: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: ['Cloudflare Workers', 'D1', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: { pt: 'Automação', en: 'Automation' },
    items: [
      { pt: 'Automação de processos', en: 'Process automation' },
      { pt: 'Integração de sistemas', en: 'Systems integration' },
      { pt: 'Relatórios', en: 'Reporting' },
    ],
  },
  {
    title: { pt: 'Segurança da Informação', en: 'Information Security' },
    items: [
      { pt: 'Autenticação', en: 'Authentication' },
      { pt: 'Controle de permissões', en: 'Access control' },
      '2FA',
      { pt: 'Auditoria', en: 'Auditing' },
    ],
  },
]
