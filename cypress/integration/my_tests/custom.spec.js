describe('Custom Commands', () => {
    it('should login to app using cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username','password')
    })
})