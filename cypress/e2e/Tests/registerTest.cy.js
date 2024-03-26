import {registerPage } from '../../pages/registerPage'
import registerData from '../../fixtures/registerData.json'
const registerObj = new registerPage()
describe('Register Form',()=>{
it('Register Flow ',()=>{
    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.checkPolicyCheckbox()
    registerObj.clickContinue()
})
})