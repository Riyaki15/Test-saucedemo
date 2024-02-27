import LoginClass from "../../support/LoginLocator"
const LoginData = require('../../fixtures/LoginData.json')

describe('Login', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/')
  })
  
  it('Sucess Login with valid data', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('Failed Login with invalid username', () => {
    cy.get(LoginClass.user).type(LoginData["wronguser"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('Failed Login with invalid password', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["wrongpass"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('Failed login without input username', () => {
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('Failed login without input password', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.loginBtn).click()
  })

})