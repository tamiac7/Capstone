import { header, footer, main, nav } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
  ${header(state)}
  ${nav(store.links)}
  ${main(state)}
  ${footer()}
  `;
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "estimate":
        axios.get(`${process.env.TAAY_API}/estimates`).then((response) => {
          store.estimate.estimate = response.data[response.data.length - 1];
          console.log(
            "store.estimate.estimate",
            store.estimate.estimate.estimateItems[0].price
          );
        });
        break;
    }
    done();
  },

  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "buildYourHome") {
      // Add an event handler for the submit button on the form
      document.querySelector("#build").addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the form element
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        // Create an empty array to hold the materials
        const materials = [];

        // Iterate over the toppings array
        let sum = 0;
        for (let input of inputList.build) {
          // If the value of the checked attribute is true then add the value to the toppings array
          if (input.selected) {
            let price = Number(input.id);
            sum += price;
            let estimateItem = {
              itemName: input.value,
              price: Number(input.id),
            };
            materials.push(estimateItem);
          }
        }
        console.log(sum);
        console.log(materials);
        // Create a request body object to send to the API
        const requestData = {
          estimateItems: materials,
          combinedPrice: sum,
        };
        // Log the request body to the console
        console.log("request Body", requestData);

        axios
          // Make a POST request to the API to create a new pizza
          .post(`${process.env.TAAY_API}/estimates`, requestData)
          .then((response) => {
            //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list

            console.log("response body", response.data);
            router.navigate("/estimate");
          })
          // If there is an error log it to the console
          .catch((error) => {
            console.log("It puked", error);
          });
      });
    }

    if (view === "contact") {
      document
        .querySelector("#emailForm")
        .addEventListener("submit", async (e) => {
          e.preventDefault();

          const inputList = e.target.elements;
          const requestData = {
            email: inputList.to.value,
            message: inputList.message.value,
          };
          // const toEmail = document.getElementById("to").value;
          // console.log(toEmail);
          try {
            await axios
              .post(`${process.env.TAAY_API}/sendMail`, requestData)
              .then((response) => {
                alert("Your message was sent successfully!");
                router.navigate("/home");
              });
          } catch (error) {
            console.error(error.message);
            alert("Failed to send");
          }
        });
    }

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  },
});

router
  .on({
    "/": () => render(),
    // The :view slot will match any single URL segment that appears directly after the domain name and a slash
    "/:view": function(match) {
      // If URL is '/about-me':
      // match.data.view will be 'about-me'
      // Using Lodash's camelCase to convert kebab-case to camelCase:
      // 'about-me' becomes 'aboutMe'
      const view = match?.data?.view ? camelCase(match.data.view) : "home";

      // If the store import/object has a key named after the view
      if (view in store) {
        // Then the invoke the render function using the view state, using the view name
        render(store[view]);
      } else {
        // If the store
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
      // Now we can use viewName to find the correct state in our store
      // If viewName is 'aboutMe', it will look for store.aboutMe
      const state = store[view];

      // Finally, render the page with the state
      render(state);
    },
  })
  .resolve();
