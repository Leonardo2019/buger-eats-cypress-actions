/// <reference types='cypress' />

import {faker} from '@faker-js/faker';


describe('Cadastro Fakers - Burger Eats',() => {
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/')
    })

    it('Acessar home e validar title', () => {
        cy.title().should('be.equal', 'Buger Eats')
        cy.get('h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    })

    it('Validar cadastro fakers', () => {
        var fakers = require('faker-br');
        let CpfRandom = fakers.br.cpf();        

        cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get('input[name="name"]').type(faker.internet.userName())
        cy.get('input[name="cpf"]').type(CpfRandom).should('be.visible')
        cy.get('input[name="email"]').type(faker.internet.email()).should('be.visible')
        cy.get('input[name="whatsapp"]').type(faker.phone.number('9########'))
        cy.get('input[name="postalcode"]').type('02235000').should('be.visible')
        cy.get('input[type="button"]').click().should('be.visible')
        cy.get('input[name="address"]').should('be.visible')
        cy.get('input[name="address-number"]').type(faker.phone.number('###'))
        cy.get('input[name="address-details"]').type(faker.vehicle.vehicle())
        cy.get('input[name="district"]').should('be.visible')
        cy.get('input[name="city-uf"]').should('be.visible')
        cy.contains('Moto').click()




    })
    
})