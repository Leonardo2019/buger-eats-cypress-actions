/// <reference types='cypress' />

describe('Automação Buger Eats - Cypress',() => {
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    })

    it('Acessar home e validar title', () => {
        cy.title().should('be.equal', 'Buger Eats')
        cy.get('h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    })

    it('Validar botão - voltar Home', () => {
        cy.get('strong').click()
        cy.get('a').should('have.text', 'Voltar para home').click()
    })

})