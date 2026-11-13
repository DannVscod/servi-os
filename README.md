# Portfólio de Danrley Sousa

Portfólio bilíngue em React, Vite e TypeScript. Apresenta experiência, projetos e serviços, com contato por WhatsApp e página de privacidade.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Conteúdo

- `src/data/projects.ts`: os dois projetos pessoais e o case profissional privado, com textos em português e inglês.
- `src/data/experience.ts`: cargo formal e atuação técnica apresentados separadamente.
- `src/data/portfolioServices.ts`: serviços.
- `src/data/skills.ts`: competências exibidas em português e inglês.
- `src/config/site.ts`: WhatsApp, e-mail e perfis públicos.

Geist Sans e Geist Mono são hospedadas em `public/fonts/`; a licença SIL OFL está em `public/fonts/OFL.txt`. O site não depende de um serviço externo para carregar as fontes.

Cada case possui URL própria no formato `?project=slug`. Esse formato funciona em hospedagem estática sem redirecionamento. O título, a descrição e o canonical são atualizados no navegador. Para prévias sociais específicas por case, seria necessária geração de páginas HTML individuais durante o build.

As prévias dos projetos são composições conceituais em CSS, identificadas como tal na interface. O case institucional não divulga órgão, métricas, tecnologia, acesso interno ou repositório privado.

## Verificação e publicação

```bash
pnpm typecheck
pnpm build
```

O workflow `.github/workflows/deploy.yml` publica `dist/` no GitHub Pages após push na branch `main`. O `base` do Vite é definido pelo nome do repositório no GitHub Actions. Esta reformulação local não publica o projeto.

## Reversão

As alterações permanecem no histórico do Git. Revise o diff antes de criar um commit; uma versão anterior pode ser restaurada pelo histórico do repositório.
