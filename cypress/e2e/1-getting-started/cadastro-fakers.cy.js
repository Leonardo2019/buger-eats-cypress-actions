/// <reference types='cypress' />

// import {slowCypressDown} from 'cypress-slow-down'
// slowCypressDown(600)

describe('Cadastro Fakers - Burger Eats',() => {
    
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    })

    it('Acessar home e validar title', () => {
        cy.title().should('be.equal', 'Buger Eats')
        cy.get('h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    })

    it('Cadastro fakers - Método Moto', () => {
        cy.MetodoMoto()

    })

    it('Entregador método - Bicicleta', () => {
        cy.MetodoBicicleta()
    })

    it('Entregador método - Van/Carro', () => {
        cy.MetodoVanCarro()
    })
    
})
