import html from "html-literal";

export default () =>
  html`
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
