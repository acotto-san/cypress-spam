// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { keys } = require("lodash");

Cypress.Commands.add("fbFinalUserLogin",(username,password) =>
{
   cy.session([username,password], () =>{
    cy.visit("https://www.facebook.com/");
    cy.get('#loginbutton').click();
    cy.get("#email").type(username);
    cy.get("#pass").type(password);
    cy.get('#loginbutton').click();
    cy.get('*[href="https://www.facebook.com/profile.php?id=100069342816025"]').should('be.visible');
   })
})

Cypress.Commands.add("socialSupervisorLogin",(username,password) =>
{
   cy.session([username,password], () =>{
    cy.visit("https://qa.ysocial.net/Test/Login.aspx");
    cy.get('input[name="ctl00$contentplaceholderContenido$textboxUser"]').type(
      "QAdmin"
    );
    cy.get(
      'input[name="ctl00$contentplaceholderContenido$textboxPassword"]'
    ).type("asdQWE!23");
    cy.get("#sumbitLogin").click();
    cy.get("#imgAvatar").should('be.visible')
   })
})