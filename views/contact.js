import html from "html-literal";
import check from "../assets/img/check.png";

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
        <input class="inputForm" type="email" id="to" name="to" placeholder="to" required />
        <input  class="inputForm" type="email" id="to" name="to" placeholder="from" required />
        <textarea
          class="inputForm"
          type="textarea"
          id="message"
          name="message"
          placeholder="message"
          required
        ></textarea>
        <button type="submit" onclick="openPopup()">Send</button>
</form>
  </main>
`;
