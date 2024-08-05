/// <reference types= "cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni" , () => {

    it("Select specific product via autocomplete lists", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});
    cy.get('#myInput').type('B');
    })
})