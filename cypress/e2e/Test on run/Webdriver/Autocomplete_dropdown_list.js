/// <reference types= "cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni" , () => {

    it("Select specific product via autocomplete lists", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});
    cy.get('#myInput').type('B');

    })
    it.only("Select specific values via dropdown lists", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});

        cy.get('#myInput').type('A');  // Make sure to change this to the letter you want to test;

        cy.get('#myInputautocomplete-list> *').each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = 'Avocado';  // you can change the product to any item you want to test.
        //const productToSelect = 'Apple';
        //const productToSelect = 'Almond';

        
        if (prod ===  productToSelect) {

            $el.trigger('click');  // A new jquery method added.
            cy.get('#submit-button').click();
            cy.url().should('include', productToSelect); 
        }
        })
    })
})