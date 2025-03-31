import navItem from "./navItems.js";
import html from "html-literal";

export default (navItems) => {
  return html`
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        ${navItems.map((item) => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};
