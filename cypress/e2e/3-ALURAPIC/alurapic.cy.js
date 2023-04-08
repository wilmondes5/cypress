describe('Login e registro de usuarios alura pic', () =>{
    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    it ('verifica mensagens de validação',() =>{

        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Full name is required!').should('be.visible');
        cy.contains('small', 'Password is required!').should('be.visible');
        cy.contains('small', 'Full name is required!').should('be.visible');
    })

    it ('verifica mensagens de email inválido',() =>{

        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Wilmondes');
        cy.contains('small', 'Invalid e-mail').should('be.visible');
      
    })

    it ('verifica mensagens de senha com menos de 8 caracteres',() =>{

        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Mininum length is 8').should('be.visible');
      
    })

    it ('verifica mensageM Must be lower case',() =>{

        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('WILMONDES');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Must be lower case').should('be.visible');
      
    })
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it.only(`Registra novo usuário ${usuario.userName}`, () =>{
            cy.contains('a','Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email').type(usuario.email);
            cy.get('input[formcontrolname="fullName').type(usuario.fullName);
            cy.get('input[formcontrolname="userName').type(usuario.userName);
            cy.get('input[formcontrolname="password').type(usuario.password);
            cy.contains('button', 'Register').click();
            cy.contains('button', 'Register').click();
        })
    })
    

})
