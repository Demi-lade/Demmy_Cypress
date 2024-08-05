/// <reference types= "cypress" />

describe("Handling iframe and modal" , () => {

    it.only("Handle webdriveruni iframe and modal", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#iframe').invoke('removeAttr', 'target').click({force:true});
    cy.get('#frame').then($iframe => {             // The use of promises.. Find is to look for an element and the body in the bracket is what we need to get using find.
    const body = $iframe.contents().find('body')   // iframe is the name of what we are looking for. We are also looking for the contents 
    cy.wrap(body).as('iframe');                    // wrap is cypress command to hold up  the jquery element used above. also the use of 'as' command is an indication of alias.
    })
    // Testing for the find out more button.

    cy.get('@iframe').find('#button-find-out-more').click();                // @ must be added when using an alias command. e.g '@iframe'
    cy.get('@iframe').find('#myModal').as('modal');

    // Asserting the text popping out after clicking the find out more button...
    cy.get('@modal').should(($expectedText) => {
    const text = $expectedText.text();
    expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range')  // when using 'include' ,you dont need to add the whole text.

    })
    cy.get('@modal').contains('Close').click();
    })
})