import html from "html-literal";

export default () => html`
  <main>
    <h3>
      <u>How can you contact us?</u>
    </h3>
    <div class="Info">
      <div class="contact">
        <p>We can be reached via email at thearchitectandyou@gmail.com.</p>
      </div>
      <form id="emailForm">
        <input type="email" id="to" name="to" placeholder="to email" required />
        <textarea
          type="textarea"
          id="message"
          name="message"
          placeholder="message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="material-symbols-outlined"></div>
  </main>
`;
