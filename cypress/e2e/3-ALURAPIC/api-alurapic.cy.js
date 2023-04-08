//Teste de api
describe('Buscar fotos e dados', ()=> {

    it('buscar fotos do Flavio', ()=> {
        cy.request({
            methodo: 'GET', //O metodo que desejamos testar
            url: 'https://apialurapic.herokuapp.com/flavio/photos' //pa url do site que vamos testar no back end
        }).then((res) => {
            expect(res.status).to.be.equal(200) //verfica se o código devolvido foi 200
            expect(res.body).is.not.empty // se não voltou o corpo vazio
            expect(res.body[0]).to.have.property('description') //esperava que na imagem 0 tivesse descrição
            expect(res.body[0].description).to.be.equal('Farol iluminado') //confirma se a descrição era Farol iluminado 
        }

        )
    
    })
        
    it.only('fazer login do flavio', ()=> {
        cy.request({
            methodo: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty 
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        }

        )
    
    })
    
})