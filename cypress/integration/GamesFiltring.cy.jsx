import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../src/store/index";
import GamesFiltring from "../../src/components/GamesFiltring";

describe("GamesFiltring", () => {
  const games = [
    { id: 1, name: "Game C", released: "2022-01-01", background_image: "image-url-1" },
    { id: 2, name: "Game A", released: "2021-01-01", background_image: "image-url-2" },
    { id: 3, name: "Game B", released: "2023-01-01", background_image: "image-url-3" },
  ];

  it("should sort games correctly in ascending order based on the selected sort option", () => {
    cy.mount(
      <MemoryRouter>
        <Provider store={store}>
          <GamesFiltring
            games={games}
            categories={[]}
            selectedCategory={null}
            sortOption="name-asc"
          />
        </Provider>
      </MemoryRouter>
    );
    cy.get('[data-cy="game"]')
      .should("have.length", 3)
      .each((game, index) => {
        cy.wrap(game).contains(`Game ${String.fromCharCode(65 + index)}`);
      });
  });
  it("should sort games correctly in descending order based on the selected sort option", () => {
    cy.mount(
      <MemoryRouter>
        <Provider store={store}>
          <GamesFiltring
            games={games}
            categories={[]}
            selectedCategory={null}
            sortOption="name-desc"
          />
        </Provider>
      </MemoryRouter>
    );

    cy.get('[data-cy="game"]')
      .should("have.length", 3)
      .each((game, index) => {
        cy.wrap(game).contains(`Game ${String.fromCharCode(67 - index)}`);
      });
  });
});
