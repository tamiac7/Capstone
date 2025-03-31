import html from "html-literal";

export default () => html`
  <footer id="footer">
    <p>Your Dream Home</p>
    <div id="footerLinks">
      <div class="linksFooter">
        <a href="about" data-navigo>About</a>
        <a href="contact" data-navigo>Contact</a>
      </div>
    </div>
  </footer>
`;
