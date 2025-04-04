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
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "buildYourHome":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`https://fakestoreapi.com/products`)
          .then((response) => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response.data", response.data);
            console.log("single", response.data[0]);
            // Create a variable to return a single item within the array of objects.
            let product = response.data[0];
            // Create an object to be stored in the Home state from the response
            store.buildYourHome.product = {
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: product.image,
            };
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view
      ? camelCase(match.data.view)
      : "buildYourHome";

    render(store[view]);
  },
  after: (match) => {
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
