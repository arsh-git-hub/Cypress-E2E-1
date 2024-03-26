export class registerPage{
    webLocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary',

    }
    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }
    enterLastName(FName){
        cy.get(this.webLocators.lastName).type(FName)
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(telephone){
        cy.get(this.webLocators.telephone).type(telephone)
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm).type(password)

    }
    checkPolicyCheckbox(){
        cy.get(this.webLocators.policyCheckbox).check()
    }
    clickContinue(){
        cy.get(this.webLocators.continue).click()
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }


}