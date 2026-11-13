import { siteConfig } from '../config/site'

export const whatsappUrl = (service?: string, lang: 'pt' | 'en' = 'pt') => {
  const message = lang === 'en'
    ? service
      ? `Hi Danrley, I saw your portfolio and would like to discuss ${service}.`
      : 'Hi Danrley, I saw your portfolio and would like to discuss a project.'
    : service
      ? `Olá, Danrley! Vi seu portfólio e gostaria de conversar sobre ${service}.`
      : 'Olá, Danrley! Vi seu portfólio e gostaria de conversar sobre um projeto.'
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsappCustomUrl = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
