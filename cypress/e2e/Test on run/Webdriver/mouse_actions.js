/// <reference types= "cypress" />

describe("Test Mouse Actions via webdriveruni" , () => {

    it("Scroll Elements into view", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});
    
    });
    it("I should be able to drop and drag a draggable item", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});
        cy.get('#draggable').trigger('mousedown', {which : 1});    // id= draggable is the item to be moved. mousedown command is more like holding down your mouse after right clicking.
        cy.get('#droppable').trigger('mousemove').trigger('mouseup') // id=droppable is where the item can be dropped.
        
        });
        it("I should be able to perform a double mouse click", () => {
            cy.visit('http://www.webdriveruniversity.com');
            cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});
            cy.get('#double-click').dblclick();  // The method dblclick means doubleclick.
        });

        it("I should be able to hold down the left mouse click button on a given element", () => {
            cy.visit('http://www.webdriveruniversity.com');
            cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});
            cy.get('#click-box').trigger('mousedown', {which : 1}).then(($element) => {
            expect($element).to.have.css('background-color' , 'rgb(0, 255, 0)')          // Background color of a given element
            })
        });
});
