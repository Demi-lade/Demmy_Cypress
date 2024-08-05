/// <reference types= "cypress" />



describe("Verify Radio buttons via webdriveruni" , () => {

    it("Check specific Radio buttons", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    cy.get('#radio-buttons').find("[type='radio']").first().check();   // This is to select the first element in the code...
    cy.get('#radio-buttons').find("[type='radio']").eq(4).check();     // To select the other element or options.. USE .eq(number of the option counting from 0).check();

    })

    it.only("Check specific Radio buttons", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='cabbage']").should('be.disabled');
    })
})