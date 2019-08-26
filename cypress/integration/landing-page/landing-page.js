import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("Dummy", () => {});

When("I open the App home page", () => {
  cy.visit("/");
});
