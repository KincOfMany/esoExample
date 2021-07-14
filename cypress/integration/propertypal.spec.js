
describe('My ESO Test', () => {

    Cypress.on('uncaught:exception', () => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    before('Visits Property Pal', () => {
      cy.visit('https://www.propertypal.com/');
    })

    it('Searches using "My Location"',() =>{
        cy.get('.search-ctrl > .search-form-ctrl > #query').type("My Location").should('have.value', 'My Location');
        cy.get('.search-btns > .btn-buy').click();
        cy.url().should('include', 'rlat=55.0175&rlng=-7.3138')
    })
  })
  