import type { Localized } from './projects'

export const experience: { title: Localized; detail: Localized }[] = [
  {
    title: { pt: 'Assessor · desenvolvimento de software', en: 'Advisor · software development' },
    detail: { pt: 'Meu cargo formal é Assessor. Também participei tecnicamente do desenvolvimento, da implantação e da evolução de um sistema institucional interno.', en: 'My formal job title is Advisor. I also worked directly on the development, deployment and improvement of an internal institutional system.' },
  },
  {
    title: { pt: 'Projetos próprios de software', en: 'Independent software projects' },
    detail: { pt: 'Desenvolvo o DnewDesk e o Fynes por conta própria. Cuido da arquitetura, das interfaces, da autenticação e da operação das aplicações.', en: 'I build DnewDesk and Fynes independently, working on their architecture, interfaces, authentication and operation.' },
  },
  {
    title: { pt: 'Automação, integração, cloud e segurança', en: 'Automation, integration, cloud and security' },
    detail: { pt: 'Também trabalho com automação de tarefas, integração entre sistemas, ambientes em nuvem e práticas de segurança da informação.', en: 'I also work on task automation, system integrations, cloud environments and information security practices.' },
  },
]
