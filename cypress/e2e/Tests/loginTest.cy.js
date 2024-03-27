import { homePage } from "../../pages/homePage"
import testData from "../../fixtures/testData.json"
const homePageObj= new homePage()
describe('Login',()=>{
    beforeEach(()=>{
        cy.login(testData.login.email,testData.login.password)
    })

    it('Add Product Flow',()=>{
    homePageObj.searchProduct(testData.product.productName)
    homePageObj.clickSearchButton()
    homePageObj.addToCart()
    })
})
