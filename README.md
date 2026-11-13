# Portfólio de Danrley Sousa

Portfólio bilíngue em React, Vite e TypeScript. Apresenta experiência, projetos e serviços, com contato por WhatsApp e página de privacidade.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Conteúdo

- `src/data/projects.ts`: cases, estado de desenvolvimento e métricas informadas.
- `src/data/experience.ts`: trajetória profissional sem datas ou empregadores não verificados.
- `src/data/portfolioServices.ts`: serviços.
- `src/config/site.ts`: WhatsApp, e-mail e perfis públicos.

Cada case possui URL própria no formato `?project=slug`. Esse formato funciona em hospedagem estática sem redirecionamento. O título, a descrição e o canonical são atualizados no navegador. Para prévias sociais específicas por case, seria necessária geração de páginas HTML individuais durante o build.

As prévias dos projetos são composições ilustrativas em CSS, não capturas das aplicações reais. Tecnologias e resultados não divulgados foram mantidos fora dos cases.

## Verificação e publicação

```bash
pnpm typecheck
pnpm build
```

O workflow `.github/workflows/deploy.yml` publica `dist/` no GitHub Pages após push na branch `main`. O `base` do Vite é definido pelo nome do repositório no GitHub Actions. Esta reformulação local não publica o projeto.

## Reversão

As alterações permanecem no histórico do Git. Revise o diff antes de criar um commit; uma versão anterior pode ser restaurada pelo histórico do repositório.
