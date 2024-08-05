/// <reference types= "cypress" />


// TEST CASE1
// selecting individual check boxes..
describe("Verifies checkboxes via webdriveruni" , () => {

    it("Check and validate checkboxes", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    //cy.get("input[value='option-1']").click();

    // To validate that the checkbox has been clicked you use an assertion;
    //cy.get("input[value='option-1']").check().should('be.checked');

    // or you can use this;
    cy.get("input[value='option-1']").as('option-1');
    cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked');
    });

    // TEST CASE2

    it("Uncheck and validate checkboxes", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
        cy.get(':nth-child(5) > input').as('option-3');
        //cy.get('@option-3').uncheck();  // you can add this or remove this line of code.
        cy.get('@option-3').uncheck().should('not.be.checked');

    });

    // TEST CASE3
    it("Check multiple checkboxes", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

// Checking multiple boxes using the value element...
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4",]).should('be.checked'); // The addition of .should('be.checked'); is to assert what has been done.
    });
})