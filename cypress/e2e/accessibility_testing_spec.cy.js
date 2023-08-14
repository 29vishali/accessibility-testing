describe("template spec", () => {
  it("should run purple HATS", () => {
      cy.visit(
          "https://govtechsg.github.io/purple-banner-embeds/purple-integrated-scan-example.htm"
      );
      cy.injectPhScripts();
      cy.runPhScan();
      cy.contains("Click Me").click();
      // Run a scan on <input> and <button> elements
      cy.runPhScan(["input", "button"]);

      cy.terminatePh();
  });

  it("should contain custom flow label", () => {
      cy.task("returnResultsDir").then((res) => {
          cy.visit(`./${res}`);
          cy.get("#pagesScannedModalToggle").should(
              "contain",
              "Demo Cypress Scan"
          );
      });
  });
});