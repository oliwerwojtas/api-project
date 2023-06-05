import React from "react";
import { Gallery } from "./Gallery";
import cy from "cypress";
describe("<Navigation />", () => {
  it("renders", () => {
    cy.mount(<Gallery />);
  });
});
