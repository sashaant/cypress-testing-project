class BasePage{
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBotton() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()

    }  
}

describe('Abstraction with Classes', () => {

    before(function (){
        //runs before all test inside describe 
        //setup or test context
        //seed or reset the database
        HomePage.loadHomePage
    })

    after(function () {
        //runs after all tests inside describe blockare done
        //test clean up
        //clean cookies or localStorage
    })


    beforeEach(function () {
        //runs before each it block in the describe  
    })

    afterEach(function () {
        //runs after each it block in the describe  
    })



    it('should scroll down and up on the page', () =>{
       HomePage.loadHomePage()
       HomePage.scrollToBotton()
       HomePage.wait(5000)
       HomePage.scrollToTop()
       HomePage.wait(5000)

    })
})