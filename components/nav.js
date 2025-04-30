import navItem from "./navItems.js";
import html from "html-literal";

export default (navItems) => {
  return html`
    <nav class="topnav">
      <a href="home" data.navigo>Home</a>
      <a href="about" data.navigo>About</a>
      <a href="contact" data.navigo>Contact</a>
      <a href="buildYourHome" data.navigo>Build Your Home</a>
      <a href="estimate" data.navigo>Estimate</a>
    </nav>
  `;
};
