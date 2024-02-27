import LoginClass from "../../support/LoginLocator"
import ProductClass from "../../support/ProductLocator"
const LoginData = require('../../fixtures/LoginData.json')

describe('template spec', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/v1')
  }) 
  
  it('Browse the product for detail product', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains(ProductClass.itemBackpack).click()
  })

  it('Browse the product using filters first', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.detailproduct).select('Name (A to Z)')
    cy.contains(ProductClass.itemBackpack).click()
  })
  it('Add to cart after browse the product', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.detailproduct).select('Name (A to Z)')
    cy.contains(ProductClass.itemBackpack).click()
    cy.contains(ProductClass.backpack).click()
    
  })
  it('Remove product from the cart in cart page', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.detailproduct).select('Name (A to Z)')
    cy.contains(ProductClass.itemBackpack).click()
    cy.contains(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.contains(ProductClass.remove).click()
  })
  it('Continue shopping from cart page', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.detailproduct).select('Name (A to Z)')
    cy.contains(ProductClass.itemBackpack).click()
    cy.contains(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.contains(ProductClass.continue).click()
  })
  
})