describe('Login to sauce demo', () => {
    let loginTestData
    const websiteUrl = "https://www.saucedemo.com/"
    const usernameInputBox = "//input[@name='user-name']"
    const loginButton = "//input[@name='login-button']"
    before(() => {
        cy.fixture('LoginCredentials').then((testData) => {
            loginTestData = testData
        })
    })
    it('To verify user is able to login', () => {
        cy.visit(websiteUrl)
        cy.url().should('include', websiteUrl)
        cy.xpath(usernameInputBox).type(loginTestData.userName)
        cy.get('input[name="password"]').type(loginTestData.password)
        cy.xpath(loginButton).click()
        cy.url().should('include', 'inventory.html')
        cy.screenshot()
    })
})