
describe('eMy First test', () => {
    it('Visit the Flask io', function() {
      cy.visit('https://flask.io/o461g57pm0TP');
     })
    })

    describe('Find a element', () => {
        it('Visit the Flask io', function(){
          cy.visit('https://flask.io/o461g57pm0TP')

          cy.contains('Testlist')
         })
        })

        describe('Click on the test list', () => {
            it('Visit the Flask io', function(){
              cy.visit('https://flask.io/o461g57pm0TP')
    
              cy.contains('Testlist').click()
             })
            })

        describe('Font', ()  => {
                it('Visit the Flask io', function(){
                  cy.visit('https://flask.io/o461g57pm0TP')
        
                  cy.get('nav') 
                  .should('be.visible') 
                  .should('have.css', 'font-family') 
                  .and('match', /serif/) 
                })
            })

        describe('Click', () => {
            it('Visit the Flask io', function(){
                cy.visit('https://flask.io/o461g57pm0TP')

                cy.get('.bmc-button').click()
                cy.focused().click()

                })
            })

        describe('background', () =>{
            it('starts with black background', () => {
                cy.visit('https://flask.io/o461g57pm0TP')
                cy.get('body').should('have.css', 'background-color')
              })
            })
        describe('eMy First test', () => {
                    it('Visit the Flask io', function() {
                      cy.visit('https://flask.io/user/sign_in');
                      cy.get('#user_email').type("Apple@apple.com");
                      cy.get('#user_password').type("Password");
                    })
                })

        describe('Forgot my Password buttom ', () => {
                    it('Visit the Flask io Forgot my password ', function() {
                      cy.visit('https://flask.io/user/sign_in');
                      cy.get('.actions').click()
                      cy.contains('Forgot your password').click()
                    })
                })

        describe('Login', () => {
                    it('Login button function', function() {
                      cy.visit('https://flask.io/user/sign_in');
                      cy.get('#user_email').type("ajdin.belko95@gmail.com");
                      cy.get('#user_password').type("123456");
                      cy.get('.actions').click();
                    })
                })