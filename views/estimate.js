import html from "html-literal";

export default (state) => html`
  <main>
    <h1><u>Your Total Estimate</u></h1>
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img
            class="Architects"
            id="estimate"
            src="https://media.istockphoto.com/id/952643774/photo/real-estate-agent-with-client-or-architect-team-checking-a-housing-model-and-its-blueprints.webp?a=1&b=1&s=612x612&w=0&k=20&c=o8wVjbW0BVdxHR95MVRMzN5VL80eAqg_q-UrWQVq7ek="
            alt="Estimate"
          />
        </div>
        <div class="flip-box-back">
          <h2>Estimate</h2>
          <p>Below is your Total estimate!</p>
          ${state.estimate.combinedPrice}
        </div>
      </div>
    </div>
  </main>
`;
