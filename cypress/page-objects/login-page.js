export class LoginPage {

    login_button = ('.sign-in')
    user_id_textfield = ('[id="username"]')
    password_textfield =('[id="password"]')

    navigateToApp() {
        cy
            .visit('https://ryze-staging.formedix.com/sign-in')
    }

    enterLoginCredentials(valid) {
        if (valid == "valid") {
            cy
            .get(this.user_id_textfield).type('testteamtechtest')
            .get(this.password_textfield).type('Ryz3T3st!x')
        }
        else
            cy
            .get(this.user_id_textfield).type('jcastaneda@yopmail.com')
            .get(this.password_textfield).type('31!Password123')
    }

    verifyLoginButton(button) {
        if (button == "SIGN IN") {
            cy.get(this.login_button).should('be.visible')
        }
        else
            cy.get(this.reset_button).should('be.visible')     
    }

    clickLoginButton(button) {
        if (button == "SIGN IN") {
            cy.get(this.login_button).click()
        }
        else
            cy.get(this.reset_button).click()   
    }

 

  
}