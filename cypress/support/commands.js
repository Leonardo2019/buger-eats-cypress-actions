
import {faker} from '@faker-js/faker';

Cypress.Commands.add('MetodoMoto', () => {
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

        cy.get('input[accept^="image"]').attachFile('/Images/' + 'CNH.jpg')
        cy.get('.button-success').should('be.visible').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click()

}),

Cypress.Commands.add('MetodoBicicleta', () => {
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
}),

Cypress.Commands.add('MetodoVanCarro', () => {
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

