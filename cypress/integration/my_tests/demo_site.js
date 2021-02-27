describe('Browser actions', () => {
    it('should load the correct url', () => {
        cy.visit('https://books.toscrape.com/index.html',{Timeout:10000})
        cy.url().should('include', 'index.html')
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload')
    })

    it('should click on travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq',11)   
    })


    it('should ckick on poetry category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    })

    it('should ckick on Olio book detail', () => {
        cy.get('a')
            .contains('Olio')
            .click()
    })

    it('should have correct price', () => {
        cy.get('.price_color')
            .contains('£23.88')
    })
})


