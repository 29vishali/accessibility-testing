// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("injectPhScripts", () => {
    cy.task("getPhScripts").then((s) => {
        cy.window().then((win) => {
            win.eval(s);
        });
    });
});

Cypress.Commands.add("runPhScan", (elements) => {
    cy.window().then(async (win) => {
        const res = await win.runA11yScan(elements);
        cy.task("pushPhScanResults", res);
    });
});

Cypress.Commands.add("terminatePh", () => {
    cy.task("terminatePh");
});