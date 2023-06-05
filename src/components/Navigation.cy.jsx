import React from "react";
import Navigation from "./Navigation";
import cy from "cypress";
describe("<Navigation />", () => {
  it("renders", () => {
    cy.mount(<Navigation />);
  });
});
