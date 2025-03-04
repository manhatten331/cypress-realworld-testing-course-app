describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains('tom@aol.com')
    })

    it("does NOT allow a invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("does NOT allow a user to sign up if they are already subscribed", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
    })
})