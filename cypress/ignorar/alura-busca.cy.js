/*Describe é uma função que tem dois argumentos. O primeiro argumento é o nome da suíte de teste (conjunto de testes de software que são projetados para verificar 
se um determinado software ou aplicativo funciona corretamente em diferentes condições e cenários.). O segundo é uma função onde vou contemplar nesse conjunto de testes. O segundo
é uma função onde posso executar qualquer coisa aqui dentro.
*/


describe('alura bucas cursos', () => { //Suíte de testes

    beforeEach(() => { // comando que vai ser executado antes do inicio de cada caso de teste (mantem cada teste idependente antes de iniciar outro o que tras mais segurança ao resultado)
        cy.visit('https://www.alura.com.br')// Ele é usado para definir uma ação que deve ser executada antes de cada teste dentro de uma suíte de testes.
    })
        it('buscar curso de java', () =>{ // it é o item de teste, esse é o caso de teste individualizado 
            cy.get('#header-barraBusca-form-campoBusca').type('java');//type ('para dizer o que eu quero digitar')
            cy.get('.header-barraBusca-form-submit').click();//  efetua o evento de dar um click 
            cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Aprenda Java com Orientação a Objetos');//.should é o que vai me garantir que ele vai fazer um assert, que ele vai fazer aquela verificação.
            //contain = porque dentro de todos os cursos, precisa conter aquele que eu espero, então fica melhor para localizar dentro dos elementos do que pela posição, o que faz o 
            //teste ficar mais duradouro
        })
})
/*
cy.get('é o comando que vai representar o elemento que eu quero buscar')
*/