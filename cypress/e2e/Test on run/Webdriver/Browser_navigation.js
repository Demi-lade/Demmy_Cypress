/// <reference types= "cypress" />

// working on different browser with the same origin....

describe("Validate WebdriverUni homepage links" , () => {
    it.only("confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'contactus');

        cy.go('back')        // cy.go enables us to perform browswer functions e.g going front and back etc
        cy.reload ()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        //cy.reload(true)    // without using cache;

        cy.go('forward')
        cy.url().should('include', 'contactus');

        //Testing for login portal....
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'Login-Portal')  //this is an assertion..
        cy.go('back')
        //cy.url().should('include', 'contactus');

        // Testing for to list.
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'To-Do-List');  
        cy.go('back')


        
    });
})       