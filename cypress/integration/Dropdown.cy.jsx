import SortDropdown from "../../src/components/Dropdown";

describe("SortDropdown", () => {
  it("should calls handleSortChange with correct parameters when Name A-Z option is clicked", () => {
    const handleSortChange = cy.stub().as("handleSortChange");

    cy.mount(<SortDropdown handleSortChange={handleSortChange} />);

    cy.get("button").contains("Name A-Z").click();

    cy.get("@handleSortChange").should("have.been.calledWith", {
      value: "name-asc",
      label: "Name A-Z",
    });
  });
});
