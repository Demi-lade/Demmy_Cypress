/// <reference types= "cypress" />

describe("Test contact us form via WebdriverUni" , () => {
it.only("should be able to submit a successful submission via contact us form", () => {
//cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');

//Whenever we click on this page we are navigated to a new before its opened, so as to over come that we need to add the following lines to our code.
cy.visit("http://www.webdriveruniversity.com");
cy.get("CONTACT US")
cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include' , 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');

//cy.get('#contact-us').click({force: true})
//Positive test case.
cy.get('[name="first_name"]').type('Julia');
cy.get('[name="last_name"]').type('Excel');
cy.get('[name="email"]').type('juliaexcel@op.com');
cy.get('textarea.feedback-input').type('I am thrilled to be on board');
cy.get('[type="submit"]').click();
cy.get('h1').should('have.text', 'Thank You for your Message!');
});

//Negative test case...you should always test manually to see the result before automating.
it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
   // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type('Julia');
    cy.get('[name="last_name"]').type('Excel');
    cy.get('textarea.feedback-input').type('I am thrilled to be on board');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
    cy.get('body').contains('Error: Invalid email address');
});

});