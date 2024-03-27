export class homePage{
    webLocators={
searchInput:'.form-control.input-lg',
clickSearch:'.btn.btn-default.btn-lg',
product:'img[title="MacBook"]',
addToCart:'Add to Cart',
successMessage:'div.alert.alert-success.alert-dismissible'
    }
    searchProduct(productName)
    {
        cy.get(this.webLocators.searchInput).type(productName)
    }
    clickSearchButton()
    {
        cy.get(this.webLocators.clickSearch).click()
    }

    addToCart()
    {
        cy.contains(this.webLocators.addToCart).first().click()
    }
    
    verifySuccessMessage()
    {
         return cy.get(this.webLocators.successMessage)
    
    }
    
} 
