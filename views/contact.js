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
        <input type="email" id="to" name="to" placeholder="to" required />
        <input type="email" id="to" name="to" placeholder="from" required />
        <textarea
          type="textarea"
          id="message"
          name="message"
          placeholder="message"
          required
        ></textarea>
        <button type="submit" onclick="openPopup()">Send</button>
      </form>
      <div class="popup" id="popup">
        <img src="${check}">
        <h2>Thank you!</h2>
        <p>Your email has been sent. Thank you!</p>
        <button type="button" onclick="closePopup()">OK</button>
    </div>
    <script>
      let popup = document.getElementById("popup");

      function openPopup() {
        popup.classList.add("open-popup");
      }
      function closePopup() {
        popup.classList.remove("open-popup");
      }
    </script>
  </main>
`;
