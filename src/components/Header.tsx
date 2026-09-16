import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { useScrollState } from '../hooks/useScrollState'
import { whatsappUrl } from '../utils/whatsapp'

const links = [['Início', 'inicio'], ['Serviços', 'servicos'], ['Soluções', 'solucoes'], ['Sobre', 'sobre'], ['Possibilidades', 'possibilidades'], ['Contato', 'contato']]

export function Header({ homePath = '' }: { homePath?: string }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const scrolled = useScrollState()
  const sectionHref = (id: string) => homePath ? `${homePath}#${id}` : `#${id}`
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  useEffect(() => {
    const ids = links.map(([, id]) => id)
    const update = () => {
      const current = ids.reduce((selected, id) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= 140 ? id : selected
      }, 'inicio')
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container nav">
        <a className="brand" href={homePath || '#inicio'} aria-label="Danrley Tecnologia, início"><span>DT</span>{siteConfig.name}</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
        <nav id="main-nav" className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Navegação principal">
          {links.map(([label, id]) => <a key={id} href={sectionHref(id)} className={active === id && !homePath ? 'active' : ''} aria-current={active === id && !homePath ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--small" href={whatsappUrl()} target="_blank" rel="noreferrer">Solicitar orçamento</a>
        </nav>
      </div>
    </header>
  )
}
