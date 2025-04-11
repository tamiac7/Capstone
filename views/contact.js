import html from "html-literal";

export default () => html`
  <main>
    <h3>
      <u>How can you contact us?</u>
    </h3>
    <div class="Info">
      <p>We can be reached via email at thearchitectandyou@gmail.com.</p>
    </div>
    <div class="material-symbols-outlined"></div>
    <form id="emailForm">
      <input type="email" id="to" placeholder="to email" required />
      <button type="submit">Send</button>
    </form>
  </main>
`;
