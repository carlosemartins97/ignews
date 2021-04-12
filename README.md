<h1 align="center">ig.news</h1>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  {{app_name}} 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="https://github.com/carlosemartins97" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o Stripe, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.

<p align="center"> 
 <img  src="https://i.imgur.com/gugOW6E.png" alt="dt money dashboard">
 <img  src="https://i.imgur.com/9oX461T.png" alt="dt money dashboard">
 <img  src="https://i.imgur.com/92Qgw8i.png" alt="dt money dashboard">
 <img  src="https://i.imgur.com/ocH3uE0.png" alt="dt money dashboard">
</p>

## :sparkles: Features ##

:heavy_check_mark: Leitura de postagens de acordo com os status de sua assinatura;\
:heavy_check_mark: Utilização do Prismic CMS para criar postagens;\
:heavy_check_mark: Sistema de cadastro e assinatura de conteúdo para os usuários;

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

Antes de começar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/carlosemartins97/ignews

# Access
$ cd ignews

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```

Feito com :heart: por <a href="https://github.com/carlosemartins97" target="_blank">Carlos Eduardo Martins</a>

&#xa0;

<a href="#top">Back to top</a>
