/// <reference types='cypress' />


describe('Teste de API', () => {
    it('API / GET Listar livros', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
            

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body[0].description).to.equal('Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n');
            expect(response.body[0].title).to.equal('Book 1');
            console.log(response.body)
        })
    })

    it('API / POST Cadastrar Livro', () => {
        cy.request({
            method: 'POST',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities',
            body: {
                id: 222,
                title: "Titulo de teste",
                dueDate: "2022-11-09T22:10:23.582Z",
                completed: true
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.title).to.equal('Titulo de teste')
            console.log(response.body)
        })
    })

    it('API / GET - Buscar Livro', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities/2',
            
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.title).to.equal('Activity 2')
            console.log(response.body)

        })
    })
    
})