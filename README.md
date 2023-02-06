# WeFit Test React

<p align="center" style="background-color: #2F2E41">
  <a href="https://wefit.com.br/" target="_blank" rel="noreferrer noopener">
    <img src="https://user-images.githubusercontent.com/54115624/216507723-680f5174-9963-4b6f-b860-605d751aa02f.png" alt="" style="aspect-ratio: 3; width: 50%; object-fit: cover;" role="banner" loading="lazy" decoding="async" fetchpriority="high" />
  </a>
</p>

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#art-layout">Layout</a>
</h3>
<h3 align="center">
  <a href="#rainbow-documenta%C3%A7%C3%A3o-de-cores">Cores</a>&nbsp;|&nbsp;
  <a href="#abc-fonte-utilizada">Fonte</a>&nbsp;|&nbsp;
  <a href="#zap-como-executar">Executar</a>&nbsp;|&nbsp;
</h3>

---

## :information_source: Sobre

O desafio consiste na criação de um site de e-commerce simplificado do zero, onde foi criado um fluxo seguindo as telas apresentadas no protótipo.

São elas:

* **Home**: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho.
* **Carinho**: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de **empty** com a opção de voltar para tela inicial.
* **Compra realizada**: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.

Para simular o servidor, foi utilizado o JSON-server com o arquivo server fornecido.


## :rocket: Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [immer](https://github.com/immerjs/immer#readme)
- [JSON Server](https://github.com/typicode/json-server)
- [Stitches](https://stitches.dev/)
- [use-context-selector](https://github.com/dai-shi/use-context-selector#readme)
- [@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)


## :art: Layout

Para essa aplicação foi fornecido um layout para que fosse possível seguir e implementar todas as funcionalidades desenhadas no [#Figma](https://www.figma.com/).

[Protótipo do Figma - WeMovie](https://www.figma.com/file/0ZyTELvPCSCnib16XG49YP/Teste-Front-React-WeFit---2022?node-id=0%3A1)

## :rainbow: Documentação de cores

| Cor       | Hexadecimal |
| --------- | ----------- |
| white     | #FFFFFF     |
|           |             |
| gray-100  | #D9D9D9     |
| gray-300  | #999999     |
| gray-500  | #333333     |
| gray-900  | #2F2E41     |
|           |             |
| blue      | #009EDD     |
| green     | #039B00     |


## :abc: Fonte utilizada

- [Open Sans](https://fonts.google.com/specimen/Open+Sans?family=Open+Sans&query=open+sans), designed by [Steve Matteson](https://fonts.google.com/?query=Steve%20Matteson)

## :zap: Como executar

- Clone o projeto:
```
git clone https://github.com/jerp86/wefit-test-react.git
```
- Acesse a pasta clonada:
```
cd wefit-test-react
```
- Instale as dependências:
```
npm ci
```
- Inicie a fake API e o projeto juntos:
```
npm start
```

Caso tenha interesse em rodar em terminais separados, você pode utilizar o seguinte:
| Para iniciar a fake API    | Para iniciar o projeto |
| -------------------------- | ---------------------- |
| ```npm run dev:server ``` | ``` npm run dev ```    |



---

<h4 align="center">
  Feito por Jerp 👋️
</h4>
<h5 align="center">
  <a href="mailto:jerp.dev@gmail.com">Entre em contato!</a>
</h5>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin" loading="lazy" decoding="async" fetchpriority="high" />
  </a>
</p>