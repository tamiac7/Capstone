import navItems from "./navItems.js";
import html from "html-literal";

export default (navItems) => {
  return html`
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        ${navItems.map((item) => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};
