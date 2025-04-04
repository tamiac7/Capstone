import html from "html-literal";

export default () => html`
  <main>
    <h1>
      <u class="alumni-sans-collegiate-one-regular">Choose your Architect</u>
    </h1>
    <div id="Flex-container">
      <div>
        <button type="button" class="collapsible">
          <p><b>Architect #1</b></p>
        </button>
        <div class="content">
          <p>Hello, my name is Jamie and I am an award winning Architect.</p>
        </div>
      </div>
      <div>
        <button type="button" class="collapsible">
          <p><b>Architect #2</b></p>
        </button>
        <div class="content">
          <p>Hello, my name is Jamie and I am an award winning Architect.</p>
        </div>
      </div>
      <div>
        <button type="button" class="collapsible">
          <p><b>Architect #3</b></p>
        </button>
        <div class="content">
          <p>Hello, my name is Jamie and I am an award winning Architect.</p>
        </div>
      </div>
    </div>
  </main>
`;
