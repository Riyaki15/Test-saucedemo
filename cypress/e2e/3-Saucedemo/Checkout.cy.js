import LoginClass from "../../support/LoginLocator"
import ProductClass from "../../support/ProductLocator"
import CheckoutClass from "../../support/CheckoutLocator"
const LoginData = require('../../fixtures/LoginData.json')


describe('Checkout', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/')
  })

  it('Checkout the product', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Susanto')
    cy.get(CheckoutClass.postalCode).type('15409')
    cy.get(CheckoutClass.checkoutBtn2).click()
    cy.get(CheckoutClass.finishBtn).click()
  })
  it('Failed Checkout the product without input First Name', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.lastName).type('Susanto')
    cy.get(CheckoutClass.postalCode).type('15409')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('Failed Checkout the product without input Last Name', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.postalCode).type('15409')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('Failed Checkout the product without input ZIP/Postal Code', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Susanto')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('Cancel Checkout the product in Checkout: Information page', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.cancelBtn).click()
  })
  it('Cancel Checkout the product in Checkout: Overview', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Susanto')
    cy.get(CheckoutClass.postalCode).type('15409')
    cy.get(CheckoutClass.checkoutBtn2).click()
    cy.get(CheckoutClass.cancelBtn).click()
  })


})