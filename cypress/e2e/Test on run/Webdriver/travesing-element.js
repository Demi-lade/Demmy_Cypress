/// <reference types= "cypress" />


describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
            cy.visit("https://www.webdriveruniversity.com/");
            cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        });
        it("children() to get the children of DOM elements", () => {
            cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
        });
        // The closest command can be used to find the closest element.
        it("closest() to validate the closest ancestor DOM element", () => {
            cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');  // To get the closest method you will check for the class or id of the element you are trying to get then you pick the closest ul element in the code...  You are using should and the likes to assert.
        });
        it("eql() to retrieve a specific element based on index", () => {           // The list of elements always starts with 0....

// for gomycode = .elementor-nav-menu > *    Using the ul class to select all courses, about gomycode and many more on the task bar..
        cy.get('.traversal-drinks-list > *').eq(3).should('contain', 'Espresso');
        });

        it("filter() to retrieve DOM elements that match a specific selector", () => {
            cy.get('.btn-group-toggle > *').filter('.active').should('contains', 'Button-1');
        });
        // To find paginations.

        it("find() to retrieve DOM elements of a given selector", () => {
            cy.get('.traversal-pagination').findS('li').find('a').should('have.length', '7');   // The length is to confirm the number of pages... The find is to get an item on the list(li);
        });
          // td is a table tag. th means table header.
        it("first() to retrieve the first DOM element within elements", () => {
        cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy');   // using first to select the first element.

        });

        it("last() to retrieve the last DOM element within elements", () => {
            cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');   // using last to select the last name element.  
        });

        it("nextAll() to get all of the net sibling DOM elements within elements until another element", () => {     // nextall is used to click the next sibling.
          cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3');  
        });

        it("nextUntil() to get all of the next sibling DOM elements within elements untill another element", () => {
        cy.get('#coffee').nextUntil('Milk');
        });

        it("not() to remove DOM elemnt(s) from the set of elements", () => {
            cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled');   // The use of the not command is suitable when you want to exclude certain item from a list of elements.... 
        });

        it("parent() to get parent DOM element of elements", () => {
         cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor');
        });

        it("parents() to get parents DOM element of elements", () => {
           cy.get('traversal-cite') .parents().should('match', 'blockquote');
        });


        it("prev() to get previous sibling DOM elements within elements", () => {
            cy.get('#sugar').prev().contains('Espresso');
        });

        it("prevAll() to get all previous sibling DOM elements within elements", () => {
            cy.get('.sales').prevAll().should('have.length', '2');    // prevAll is a good way to select siblings of two elements...
        });

        it("prevUntill() to get previous sibling DOM elements within elements until other element", () => {
            cy.get('#veggie').prevUntil('#fruits').should('have.length', '5');   // it will still move till it gets to the fruit element as a result of prevUntil anad i asserted that the list of the items is 5.
        });

        it("siblings() to get all sibling DOM elements of elements", () => {
            cy.get('.traversal-button-other-states').siblings().should('.have.length', '3');
        });

    });
    


// Gomycode. ads pops up  by class.interactive-button and by id = #hs_cos_wrapper_dnd_area-module-4..
// Gomycode .. for doubleclick and scroll on popsup ads  =