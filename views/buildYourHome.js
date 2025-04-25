import html from "html-literal";

export default (state) => html`
  <main>
    <section id="build-section">
      <form id="build">
        <h1><u>Build Your Home</u></h1>
        <img
          id="homeModel"
          src="https://img-new.cgtrader.com/items/906287/10c33baf2f/modern-house-5-3d-model-10c33baf2f.jpg"
          alt="3DHome"
        />
        <div class="Materials">
          <label for="build">Select Your Materials:</label>
          <select id="materialOne" name="build" multiple>
            <option value="" hidden>Select Materials</option>
            <option value="bricks" id="10000">Bricks</option>
            <option value="windows" id="5000">Windows</option>
            <option value="doors" id="2000">Doors</option>
            <option value="cabinets" id="1500">Cabinets</option>
          </select>
        </div>
        <div>
          <img
            class="home"
            src="https://img-new.cgtrader.com/items/906287/f7c9587d07/modern-house-5-3d-model-f7c9587d07.jpg"
            alt="Home"
          />
        </div>
        <div id="submit">
          <input class="button" type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </section>
  </main>
`;
