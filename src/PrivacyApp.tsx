import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { siteConfig } from './config/site'

export default function PrivacyApp() {
  return <>
    <Header homePath="./index.html" />
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <span className="eyebrow">Transparência e confiança</span>
          <h1>Política de Privacidade</h1>
          <p>Como a Danrley Soluções trata os dados pessoais utilizados no atendimento e na prestação de serviços de tecnologia.</p>
          <span className="privacy-updated">Última atualização: 15 de setembro de 2026</span>
        </div>
      </section>
      <section className="section privacy-content">
        <div className="container privacy-layout">
          <article>
            <h2>1. Compromisso com a privacidade</h2>
            <p>A Danrley Soluções respeita a privacidade de seus clientes, visitantes e demais titulares de dados. Esta Política explica quais informações podem ser tratadas, por que isso acontece e quais são os direitos do titular, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).</p>

            <h2>2. Dados fornecidos voluntariamente</h2>
            <p>Podemos receber dados que você decide informar ao solicitar um orçamento, entrar em contato ou contratar um serviço, como nome, telefone, endereço de e-mail, empresa, cargo e detalhes da necessidade apresentada. O envio dessas informações é voluntário, mas alguns dados podem ser necessários para responder à solicitação ou executar o serviço.</p>

            <h2>3. Finalidade do tratamento</h2>
            <p>Os dados são tratados para responder mensagens e pedidos de orçamento, elaborar propostas, prestar e acompanhar serviços, oferecer suporte, cumprir obrigações legais ou contratuais, melhorar o atendimento e proteger os direitos da Danrley Soluções e dos titulares.</p>

            <h2>4. Compartilhamento de dados</h2>
            <p>Não comercializamos dados pessoais. O compartilhamento pode ocorrer apenas quando necessário para a execução do serviço, para atendimento de obrigações legais ou mediante autorização do titular, sempre limitado à finalidade aplicável. Prestadores que apoiam hospedagem, comunicação, análise ou operação podem ter acesso estritamente necessário e devem observar deveres de confidencialidade e segurança.</p>

            <h2>5. Segurança e retenção</h2>
            <p>Adotamos medidas técnicas e administrativas compatíveis com a natureza dos dados para reduzir riscos de acesso não autorizado, perda, alteração ou divulgação indevida. Os dados são mantidos pelo período necessário às finalidades informadas, ao cumprimento de obrigações legais e ao exercício regular de direitos, sendo eliminados ou anonimizados quando não houver mais justificativa para sua conservação.</p>

            <h2>6. Cookies e serviços de terceiros</h2>
            <p>O site pode utilizar cookies e tecnologias semelhantes para garantir seu funcionamento, lembrar preferências e compreender o uso das páginas. Você pode controlar ou bloquear cookies nas configurações do navegador, embora isso possa afetar algumas funcionalidades.</p>
            <p>Links e ferramentas de terceiros, como WhatsApp, LinkedIn, serviços de hospedagem, análise ou publicidade, possuem suas próprias políticas de privacidade. Ao interagir com esses serviços, o tratamento também estará sujeito às regras de seus respectivos operadores.</p>

            <h2>7. Google Ads</h2>
            <p>Caso campanhas do Google Ads sejam utilizadas, o site poderá empregar cookies, tags ou tecnologias de medição para avaliar campanhas e exibir anúncios mais relevantes, conforme as configurações aplicáveis. O Google poderá tratar dados de acordo com sua própria política e com as opções de consentimento disponíveis. Você pode gerenciar a personalização de anúncios nas configurações da sua conta Google e do navegador.</p>

            <h2>8. Direitos do titular</h2>
            <p>Nos termos da LGPD, o titular pode solicitar confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade quando regulamentada, informações sobre compartilhamentos, revogação do consentimento e revisão de decisões automatizadas, quando aplicável. As solicitações serão avaliadas nos limites legais e poderemos pedir informações para confirmar a identidade do solicitante.</p>

            <h2>9. Contato</h2>
            <p>Para dúvidas, solicitações ou exercício de direitos relacionados a esta Política, entre em contato pelo e-mail <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Também é possível utilizar os canais de atendimento informados no site.</p>

            <h2>10. Alterações desta política</h2>
            <p>Esta Política pode ser atualizada para refletir mudanças legais, operacionais ou nos serviços oferecidos. A versão vigente estará sempre disponível nesta página, com a respectiva data de atualização. Recomendamos consultar o conteúdo periodicamente.</p>
          </article>
          <aside className="privacy-aside">
            <strong>Em resumo</strong>
            <p>Usamos os dados necessários para conversar com você, prestar serviços e manter o site funcionando, com transparência e respeito aos seus direitos.</p>
            <a className="button button--secondary" href="./index.html">Voltar ao site</a>
          </aside>
        </div>
      </section>
    </main>
    <Footer homePath="./index.html" />
  </>
}