/// <reference types= "cypress" />

describe("Test Datepicker via webdriveruni" , () => {

    it.only("Select date from the datepicker", () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#datepicker').invoke('removeAttr', 'tatget').click({force:true});
    
    //  let date = new Date();
    //  date.setDate(date.getDate())  
    //  cy.log(date.getDate())        // To get current date i,e 22  

    //   let date2 = new Date();
    //  date2.setDate(date.getDate() + 5)   // To get current date i.ee 22 + 5=27
    //  cy.log(date2.getDate())

     var date = new Date
     date.setDate(date.getDate() + 1);   //date.getDate()  inclusive. The date can be changed.

     var futureYear = date.getFullYear();  //date.getFullYear is constant in your code..
      var futureMonth = date.toLocaleString("default", {month: "long"});
      var futureDay = date.getDate();

      cy.log("Future year to select: " + futureYear);
      cy.log("Future month to select: " + futureMonth);
      cy.log("Future day to select: " + futureDay);

    })
})