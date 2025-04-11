import html from "html-literal";

export default (state) => html`
  <section id="build">
    <form id="build">
      <h1><u>Build Your Home</u></h1>
      <img id="homeModel" src="https://img-new.cgtrader.com/items/906287/10c33baf2f/modern-house-5-3d-model-10c33baf2f.jpg" alt="3DHome">
      <div>
        <label for="build">Build Your Home:</label>
        <select id="build" name="build">
          <option value="" hidden>Select Materials</option>
          <option value="bricks">Bricks</option>
          <option value="windows">Windows</option>
          <option value="doors">Doors</option>
          <option value="cabinets">Cabinets</option>
        </select>
      </div>
      <img class="home" src="https://img-new.cgtrader.com/items/906287/f7c9587d07/modern-house-5-3d-model-f7c9587d07.jpg" alt="Home">
      <div id="submit">
        <input type="submit" name="submit" value="Submit" />
    </div>
  </section>
`;
