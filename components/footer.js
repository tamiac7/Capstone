import html from "html-literal";

export default (navItems) => html`
  <footer id="footer">
    <div>
      <p>Your Dream Home</p>
    </div>
    <div class="linksFooter">
      <a href="about" data-navigo>About</a>
      <a href="contact" data-navigo>Contact</a>
    </div>
  </footer>
`;
