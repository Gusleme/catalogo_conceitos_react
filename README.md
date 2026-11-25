# Catálogo de Conceitos React

Aplicação React desenvolvida como atividade prática da Aula 09, abordando conceitos avançados de React: estado com `useState`, formulários controlados, efeitos colaterais com `useEffect`, consumo de APIs públicas, navegação com React Router e boas práticas de desenvolvimento.

## Descrição

O Catálogo de Conceitos React é uma aplicação de página única (SPA) com navegação por URLs simuladas. Exibe um feed de posts consumido de uma API pública (JSONPlaceholder), permite visualizar detalhes de cada post, acessar uma página de contato com formulário validado e trata rotas inexistentes com uma página 404 personalizada.

## Funcionalidades

- **Feed/Portfólio (`/`)**: Lista de posts buscados de uma API pública via `useEffect`, exibidos em cards com link para detalhes.
- **Detalhes do post (`/detalhes/:id`)**: Exibição detalhada de um post específico, obtendo o parâmetro `id` da URL via `useParams`.
- **Contato (`/contato`)**: Formulário controlado com os campos Nome (mínimo 3 caracteres), E-mail (deve conter `@` e `.com`) e Mensagem (mínimo 10 caracteres), com mensagens de erro em tempo real e botão de envio desabilitado enquanto houver erros.
- **Navegação com React Router**: Links entre páginas sem recarregar o navegador (`BrowserRouter`, `Routes`, `Route`, `Link`).
- **Página 404 (`*`)**: Página personalizada para rotas inexistentes com botão para voltar à página inicial.
- **Layout responsivo**: Estilização limpa com CSS, adaptada para dispositivos móveis.

## Conceitos utilizados

- **useState**: gerenciamento de estado local (posts, loading, erro, dados do formulário, erros de validação).
- **useEffect**: busca de dados da API após a montagem do componente, com array de dependências vazio `[]` e limpeza para evitar atualizações após desmontagem.
- **Formulários controlados**: valor dos inputs vinculado ao estado e atualizado via `onChange`; prevenção do recarregamento da página no envio com `preventDefault`.
- **Consumo de API**: requisições com `fetch` à API JSONPlaceholder e tratamento de estados de carregamento e erro.
- **React Router**: `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams` e navegação por caminhos (`/`, `/contato`, `/detalhes/:id`, `*`).
- **Renderização condicional**: exibição de estados de carregamento, erro, sucesso e conteúdo conforme o estado da aplicação.
- **Props**: passagem de dados entre componentes (ex: post para `PostCard`).

## Como executar

```bash
npm install
npm start
```

Para gerar o build de produção:

```bash
npm run build
```

## Rotas

| Caminho | Página |
|---------|--------|
| `/` | Feed de posts |
| `/contato` | Formulário de contato |
| `/detalhes/:id` | Detalhes de um post |
| `*` | Página 404 |
