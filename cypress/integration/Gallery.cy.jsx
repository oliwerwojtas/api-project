import Gallery from "../../src/components/gameDetails/Gallery";

describe("<Gallery />", () => {
  it("renders correctly", () => {
    const screenData = {
      results: [
        { id: 1, image: "path/to/image1.jpg" },
        { id: 2, image: "path/to/image2.jpg" },
        { id: 3, image: "path/to/image3.jpg" },
      ],
    };

    cy.mount(<Gallery screen={screenData} />);
    cy.contains("Screens:").should("be.visible");
    cy.get("img").should("have.length", screenData.results.length);
  });
});
