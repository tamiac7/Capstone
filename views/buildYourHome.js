import html from "html-literal";

export default (state) => html`
  <main>
    <h1><u>Build Your Home</u></h1>
    <h3>Your product is ${state.product.image}</h3>
    <img src="${state.product.image}" alt="me" />
  </main>
`;
