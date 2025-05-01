import html from "html-literal";

export default (navItems) => html`
  <footer id="footer">
    <div class="linksFooter">
      <p>Your Dream Home</p>
      <a href="about" data-navigo>About</a>
      <a href="contact" data-navigo>Contact</a>
    </div>
  </footer>
`;
