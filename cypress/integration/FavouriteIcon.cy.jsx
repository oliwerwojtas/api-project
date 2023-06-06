import Game from "../../src/components/Game";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../src/store/index";
import { ToastContainer } from "react-toastify";
describe("Game", () => {
  it("toggles favorite icon and shows toast on duplicate click", () => {
    cy.mount(
      <Provider store={store}>
        <Router>
          <Game />
          <ToastContainer />
        </Router>
      </Provider>
    );

    cy.get("[data-cy='favoriteButton']").should("exist");
    cy.get("[data-cy='favoriteButton'] svg[data-cy='isNotFavorite']").should("exist");
    cy.get("[data-cy='favoriteButton']").click();
    cy.get("[data-cy='favoriteButton'] svg[data-cy='isFavorite']").should("exist");
    cy.get("[data-cy='favoriteButton']").click();
    cy.contains("Already in favorites!").should("be.visible");
  });
});
