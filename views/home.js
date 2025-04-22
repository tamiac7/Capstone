import html from "html-literal";
import Architect1 from "../assets/img/Architect1.jpg";

export default () => html`
  <main>
    <h1>
      <u>Choose your Architect</u>
    </h1>
    <div id="Flex-container">
      <div class="card">
        <img src="${Architect1}" alt="architectOne" style="width:100%" />
        <div class="container">
          <h4><b>Jane Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="architectTwo"
          style="width:100%"
        />
        <div class="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Interior Designer</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxwZXJzb258ZW58MHx8MHx8fDA%3D"
          alt="architectThree"
          style="width:100%"
        />
        <div class="container">
          <h4><b>Jamie Doe</b></h4>
          <p>Architectural Designer</p>
        </div>
      </div>
    </div>
  </main>
`;
