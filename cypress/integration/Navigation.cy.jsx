import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../src/store/index";
import Navigation from "../../src/components/Navigation";

describe("<Navigation />", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    );
  });

  it("renders a app name", () => {
    cy.contains("GameFinder");
  });

  it("searches and displays results", () => {
    cy.get('[data-cy="gameInput"]').type("League");
    cy.get('[data-cy="inputResults"]').should((results) => {
      expect(results).to.have.length.greaterThan(0);
    });

    cy.get('[data-cy="inputResults"]').should("have.length.greaterThan", 0);
  });

  it("clears search results", () => {
    cy.get('[data-cy="gameInput"]').type("League");

    cy.get('[data-cy="gameInput"]').clear();
    cy.get('[data-cy="inputResults"]').should("not.exist");
  });
});
