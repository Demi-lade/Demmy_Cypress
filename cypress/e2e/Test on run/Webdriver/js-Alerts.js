/// <reference types= "cypress" />

describe("Handling js alerts" , () => {

    it.only("Confirm js alerts contains correct text", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});
    cy.get('#button1').click();
    cy.on('window:alert', (str) => {
       expect(str).to.equal('I am an alert box!');

    });
    });
    it.only("Validate js alert box works correctly when clicking ok", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();
        
        cy.on('window:confirm', (str) => {     //window:alert
            return true;
            // return false; clicks on the other option which here is cancel..
        });
         cy.get('#confirm-alert-text').contains('You pressed OK!');   // to assert that the ok or press ok button is visible.
    });

    it("Validate js alert box works correctly when clicking ok", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it("Validate js alert box works correctly using a stub", () => {
         cy.visit('http://www.webdriveruniversity.com');
         cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

         const stub = cy.stub()
           cy.on('window:confirm', stub)
           cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');   // test that the button has been clicked..

           }).then(() => {
            return true;   // to confirm the correct message
           });
           });
        });
        // cy.on('window:confirm', (str) => {
        //     return false;
        
    //});
    // });