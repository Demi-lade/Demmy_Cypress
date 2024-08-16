/// <reference types= "cypress" />


describe("Handling data via webdriver uni", () => {
    beforeEach(() => {
            cy.visit("https://www.webdriveruniversity.com/");
            cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        });
        it("Calculate and assert the total age of all users", () => {
            var userDetails = [];
            let numb = 0  // The number of sales will be addded here, check from line 17.
            cy.get('#thumbnail-1 td').each(($el, index, $list) => {   // This will go through eacg of the items on the table..
              userDetails[index]   = $el.text();
            }).then(() => {
                var i;
                for(i =0; i < userDetails.length; i++) {    // A forloop;
                    if(Number(userDetails[i])) {
                     numb += Number(userDetails[i]);   // it will check for the numbers and add it to line 11;
                    }    
                // cy.log(userDetails[i]);
                } 
                // All that is written above will pick each of the items til  the end of the table.
                cy.log("Found total age :" + numb)
                expect(numb).to.eq(322);
                
            })
        });

         it("Calculate and assert user based on their last name", () => {
          cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {  // The element contains both td and tr that is why its included here. The nth-child added to help us with the pick of the last name. 
           const text = $el.text()
           if(text.includes("Woods")) {
           cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
            const userAge  = age.text();
            expect (userAge).to.equal('80');  
           }) 
           }
          })  
        })
    });