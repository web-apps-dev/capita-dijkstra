import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../LandingPage";

const landingPage = new LandingPage();

When("I open the App home page", () => {
  cy.visit("/");
});

Then(/^Graph comp shows (\w) and (\w)$/, (start, dest) => {
  landingPage.isStartNode(start);
  landingPage.isDestNode(dest);
});

And(/^Selection comp shows (\w) and (\w)$/, (start, dest) => {
  landingPage.selectionCompStartDisplays(start);
  landingPage.selectionCompDestDisplays(dest);
});

And(
  /^Results comp shows (\w*) and ([\w*\-]*)|(Infinity)$/,
  (distance, route) => {
    landingPage.routeCompDistDisplays(distance);
    landingPage.routeCompRouteDisplays(route);
  }
);

/* istanbul ignore next */
// Have to wait a little while for the animation
// to scroll the graph into view.
When(/^I single click (\w) node$/, node => {
  cy.wait(2000)
    .get("g#" + node + ".node > path")
    .should("be.visible")
    .click({ force: true })
    .wait(200);
});

When(/^I double click (\w) node$/, node => {
  cy.get("g#" + node + " > path")
    .should("be.visible")
    .trigger("click")
    .trigger("click")
    .wait(200);
});

When(/^I select (\w) and (\w) nodes$/, (start, dest) => {});
