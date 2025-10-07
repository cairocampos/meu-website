# Meu Website

Projeto iniciado manualmente com [Next.js](https://nextjs.org/) utilizando TypeScript e a App Router.

## Scripts

- `npm run dev` – inicia o servidor de desenvolvimento.
- `npm run build` – gera a build de produção.
- `npm run start` – executa a build em modo produção.
- `npm run lint` – roda o ESLint com as regras recomendadas pelo Next.js.
- `npm run db:generate` – gera migrações do Drizzle ORM com base no schema atual.
- `npm run db:push` – aplica o schema definido no Drizzle diretamente no banco configurado.

## Estrutura

- `src/app` contém as rotas da App Router.
- `src/app/layout.tsx` define o layout raiz e metadados da aplicação.
- `src/app/page.tsx` é a página inicial.
- `src/app/globals.css` reúne os estilos globais.

Para instalar as dependências utilize o gerenciador de pacotes de sua preferência:

```bash
npm install
# ou
pnpm install
# ou
yarn install
```

## Banco de dados com Drizzle ORM

- Configure a string de conexão PostgreSQL no arquivo `.env` utilizando a referência do `.env.example`.
- O schema principal está em `src/db/schema.ts` e a conexão compartilhada no módulo `src/db/client.ts`.
- Utilize os scripts `npm run db:generate` e `npm run db:push` para gerenciar migrações com o Drizzle Kit.
