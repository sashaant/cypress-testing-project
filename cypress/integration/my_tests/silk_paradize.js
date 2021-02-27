describe('Browser actions', () => {
    it('should load the correct url', () => {
        cy.visit('https://silkparadize.com.ua',{Timeout:10000})
    })

    it('should check correct url', () => {
        cy.url().should('include', 'silkparadize.com')   
    })

    //it('should check for correct element on the page', () => {
        //cy.get(.normal-logo).should('be.visible')  
})