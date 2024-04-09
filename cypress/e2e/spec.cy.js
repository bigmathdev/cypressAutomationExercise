describe('Registra usuário', () => {
  it('Carrega o brownser e avança para a página', () => {
    cy.visit('/')
  })
  
  it('Verifica se a página carregou corretamente', () => {
    cy.get('body').should('be.visible')
    cy.get('.header-middle').should('be.visible')
    cy.get('#slider').should('be.visible')
    cy.get('section[style="height: auto !important;"]').should('be.visible')
  })

  it('Clica no botão “Signup / Login”', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })

  it("Verifica se 'New User Signup!' está visível", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible')
  })

  it("Entra com nome e endereço no fomulário", () => {
    cy.get('[data-qa="signup-name"]').type('Matheus')
    cy.get('[data-qa="signup-email"]').type('jomlaserzo@gufum.com')
  })

  it("Clica no botão 'Signup'", () => {
    cy.get('[data-qa="signup-button"]').click()
  })

  it("Valida que o login form está visível", () => {
    cy.get('.login-form').should('be.visible')
  })

  it("Preenche os campos do formulário", () => {
    cy.get('#id_gender1').click()
    cy.get('#name').clear().type('Matheus')
    cy.get('#password').type(123455)
    cy.get('#days').select(14)
    cy.get('#months').select('March')
    cy.get('#years').select('1996')
  })

  it("Seleciona checkbox 'Sign up for our newsletter!'", () => {
    cy.get('#newsletter').click()
  })

  it("Seleciona checkbox 'Receive special offers from our partners!'", () => {
    cy.get('#optin').click()
  })

  it("Preenche os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", () => {
    cy.get('#first_name').type('Matheus')
    cy.get('#last_name').type('Santos')
    cy.get('#company').type('Teste')
    cy.get('#address1').type('R sao miguel, 78, Company name')
    cy.get('#address2').type('Algum endereço aqui')
    cy.get('#country').select('Canada')
    cy.get('#state').type('SP')
    cy.get('#city').type('Jacarei')
    cy.get('#zipcode').type(12320650)
    cy.get('#mobile_number').type(991817649)
    cy.get('[data-qa="create-account"]').click()
  })

  it("Verifica se a conta foi criado com sucesso", () => {
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })

  it("Verifica se está escrito 'Logged in as username'", () => {
    cy.get('b').should('have.text', 'Matheus')
  })

  it("Deleta conta criada", () => {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})