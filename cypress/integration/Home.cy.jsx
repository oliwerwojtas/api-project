import Home from "../../src/pages/Home";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../src/store/index";

describe("Home", () => {
  it("should display exact number of games", () => {
    cy.mount(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    cy.get('[data-cy="upcoming"]').children().should("have.length", 12);
    cy.get('[data-cy="popular"]').children().should("have.length", 12);
    cy.get('[data-cy="newGames"]').children().should("have.length", 12);
  });

  it("filtring games by category from select", () => {
    cy.mount(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    const categories = [
      "Action",
      "Indie",
      "Adventure",
      "RPG",
      "Strategy",
      "Shooter",
      "Casual",
      "Simulation",
      "Puzzle",
      "Arcade",
      "Platformer",
      "Fighting",
    ];

    cy.get('[data-cy="select"]')
      .find("input")
      .then((input) => {
        cy.wrap(input).clear();
        cy.wrap(input).focus();

        categories.forEach((category) => {
          cy.wrap(input).type(`${category}{enter}`, { force: true });

          cy.get('[data-cy="upcoming"]')
            .children()
            .should((games) => {
              expect(games).to.have.length.greaterThan(0);
            });
        });
      });
  });
});
