class LandingPage {
  constructor() {
    console.log("LandingPage constructor.");
  }

  visit() {
    cy.visit("/");
  }

  /**
   * Cypress assertion that the node is a start node (square).
   *
   * @param {string} node
   */
  isStartNode(node) {
    let cssPath = "#" + node + " > path";

    cy.get(cssPath).should("have.attr", "d", "M-10,-10h20v20h-20Z");
  }

  /**
   * Cypress assertion that the node is a destination node (triangle).
   *
   * @param {string} node
   */
  isDestNode(node) {
    let cssPath = "#" + node + " > path";

    cy.get(cssPath).should(
      "have.attr",
      "d",
      "M0,-17.54765350603323L15.19671371303185,8.773826753016616L-15.19671371303185,8.773826753016616Z"
    );
  }

  /**
   * Checks Selection `Start` content.
   *
   * @param {string} content
   */
  selectionCompStartDisplays(content) {
    cy.get("[data-testid=selectionStart]").should("have.text", content);
  }

  /**
   * Checks Selection `Destination` content.
   *
   * @param {string} content
   */
  selectionCompDestDisplays(content) {
    cy.get("[data-testid=selectionDest]").should("have.text", content);
  }

  /**
   * Checks Route `Distance` content.
   *
   * @param {string} content
   */
  routeCompDistDisplays(content) {
    cy.get("[data-testid=distance]").should("have.text", content);
  }

  /**
   * Checks Route `Path` content.
   *
   * @param {string} content
   */
  routeCompRouteDisplays(content) {
    cy.get("[data-testid=route]").should("have.text", content);
  }
}

export default LandingPage;
