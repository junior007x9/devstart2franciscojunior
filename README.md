# devstart2franciscojunior
# Projeto Página de Postagem (posting--page)

Este projeto é um desafio front-end focado na interação completa entre HTML, CSS e JavaScript para consumir uma API real. A aplicação simula a criação de um post (como em um blog ou rede social), onde o usuário insere um título e um conteúdo, envia esses dados para uma API pública e vê o post "criado" ser renderizado de volta na tela, tudo de forma assíncrona.

O projeto utiliza a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para simular o backend.

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página, contendo o formulário de entrada e as áreas de saída (renderização).
* **JavaScript (ES6+):** Script principal (`main.js`) responsável por:
    * Manipulação do DOM (seleção de elementos).
    * Captura de eventos (`submit` do formulário).
    * Prevenção do comportamento padrão do navegador (`event.preventDefault()`).
    * Consumo de API usando `fetch()`.
* **API Fetch (POST):** Uso do `fetch()` nativo do navegador para realizar uma requisição `POST` assíncrona.
* **Bootstrap 5 (via CDN):** Utilizado para todo o layout responsivo, componentes de formulário (`.form-control`), botões (`.btn`) e cards (`.card`).
* **Normalize.css (via CDN):** Incluído para garantir uma renderização padronizada e consistente entre diferentes navegadores.
* **JSONPlaceholder:** API pública utilizada como *mock* de backend para o endpoint `/posts`.

## Funcionalidades Implementadas

Este projeto atende a todos os requisitos da especificação:

1.  **Formulário de Entrada:** A página possui um formulário (`<form id="post-form">`) com campos para "Título" (`#post-title`) e "Conteúdo" (`#post-body`).
2.  **Envio Assíncrono (POST):** Ao submeter o formulário:
    * O JavaScript previne o recarregamento da página.
    * Um objeto `data` é criado no formato `{ title, body, userId: 1 }`, exatamente como especificado.
    * Uma requisição `POST` é enviada via `fetch` para `https://jsonplaceholder.typicode.com/posts` com o `body` e `headers` corretos.
3.  **Renderização Dinâmica:** Após a API responder com sucesso (retornando o objeto postado), o JavaScript preenche dinamicamente as tags de saída no HTML:
    * O título retornado é inserido em `<h2 id="renderizador-titulo">`.
    * O conteúdo retornado é inserido em `<p id="renderizador-conteudo">`.
4.  **Limpeza do Formulário:** Após o sucesso da postagem, os campos de Título e Conteúdo são automaticamente limpos, deixando o formulário pronto para um novo post.

## Como Executar

Este projeto consiste apenas em arquivos front-end estáticos e consome uma API pública, não requerendo nenhuma instalação de backend ou dependências (além de uma conexão com a internet para buscar os CDNs).

1.  Clone este repositório ou baixe os três arquivos (`index.html`, `style.css`, `main.js`).
2.  Coloque os três arquivos na mesma pasta.
3.  Abra o arquivo `index.html` diretamente em qualquer navegador web moderno.
