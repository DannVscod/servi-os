import { ExternalLink, Linkedin } from 'lucide-react'
import { siteConfig } from '../config/site'
import { whatsappUrl } from '../utils/whatsapp'

export function Footer({ homePath = '' }: { homePath?: string }) {
  const homeHref = homePath || '#inicio'
  const sectionHref = (id: string) => homePath ? `${homePath}#${id}` : `#${id}`

  return <footer><div className="container footer-grid">
    <div><a className="brand brand--footer" href={homeHref}><span>DT</span>{siteConfig.name}</a><p>{siteConfig.slogan}</p></div>
    <div><strong>Navegação</strong><a href={sectionHref('servicos')}>Serviços</a><a href={sectionHref('sobre')}>Sobre</a><a href={sectionHref('possibilidades')}>Possibilidades</a><a href={sectionHref('contato')}>Contato</a><a href="privacidade.html">Política de Privacidade</a></div>
    <div><strong>Fale comigo</strong><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div>
    <div><strong>Experiência profissional</strong><a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin /> Conheça minha experiência profissional no LinkedIn. <ExternalLink /></a></div>
  </div><div className="container footer-bottom">© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</div></footer>
}