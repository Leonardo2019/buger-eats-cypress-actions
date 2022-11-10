/// <reference types='cypress' />

import {faker} from '@faker-js/faker';

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
        var fakers = require('faker-br');
        let CpfRandom = fakers.br.cpf();        

        cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get('input[name="name"]').type(faker.name.fullName()).should('be.visible')
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
        
        cy.get('input[accept^="image"]').attachFile('/Images/' + 'CNH.jpg')
        cy.get('.button-success').should('be.visible').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click()

        
    })

    it('Entregador método - Bicicleta', () => {
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
        cy.contains('Bicicleta').click()

        cy.get('input[accept^="image"]').attachFile('/Images/' + 'CNH.jpg')
        cy.get('.button-success').should('be.visible').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click()
    })

        it('Entregador método - Van/Carro', () => {
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
        cy.contains('Van/Carro').click()

        cy.get('input[accept^="image"]').attachFile('/Images/' + 'CNH.jpg')
        cy.get('.button-success').should('be.visible').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click()
    })

    it('Mensagens dos campos obrigatórios', () => {
        cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get('.button-success').should('be.visible').click()
        
        cy.get('input[name="name"]').should('be.empty')
        cy.contains('É necessário informar o nome').should('be.visible')
        cy.get('input[name="cpf"]').should('be.empty')
        cy.contains('É necessário informar o CPF').should('be.visible')
        cy.get('input[name="email"]').should('be.empty')
        cy.contains('É necessário informar o email').should('be.visible')
        cy.get('input[name="postalcode"]').should('be.empty')
        cy.contains('É necessário informar o CEP').should('be.visible')
        cy.get('input[name="address-number"]').should('be.empty')
        cy.contains('É necessário informar o número do endereço').should('be.visible')

        cy.contains('Selecione o método de entrega').should('be.visible')
        cy.get('input[accept^="image"]').should('be.empty')
        cy.contains('Adicione uma foto da sua CNH').should('be.visible')

    })

    it('Validar Placeholder', () => {

        cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas').click()
        cy.get('input[name="name"]').should('have.attr', 'placeholder', 'Nome completo')
        cy.get('input[name="cpf"]').should('have.attr', 'placeholder', 'CPF somente números')
        cy.get('input[name="email"]').should('have.attr', 'placeholder', 'E-mail')
        cy.get('input[name="whatsapp"]').should('have.attr', 'placeholder', 'Whatsapp')
        cy.get('input[name="postalcode"]').should('have.attr', 'placeholder', 'CEP')
        cy.get('[type="button"]').should('have.value', 'Buscar CEP')
        cy.get('input[name="address"]').should('have.attr', 'placeholder', 'Rua')
        cy.get('input[name="address-number"]').should('have.attr', 'placeholder', 'Número')
        cy.get('input[name="address-details"]').should('have.attr', 'placeholder', 'Complemento')
        cy.get('input[name="district"]').should('have.attr', 'placeholder', 'Bairro')
        cy.get('input[name="city-uf"]').should('have.attr', 'placeholder', 'Cidade/UF')
        cy.contains('Moto').should('have.text', 'Moto')

        cy.get('input[accept^="image"]').attachFile('/Images/' + 'CNH.jpg')
        cy.contains('Foto da sua CNH')
        cy.get('.button-success').should('have.text', 'Cadastre-se para fazer entregas')
        
    })
    
})
