describe('Custom Commands', () => {
    it('should login to app using cypress command', () => {
        cy.visit('https://books.toscrape.com/index.html',{Timeout:10000})
        cy.login('username', 'password')
    })
