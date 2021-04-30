describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Shuld load with correct initial state', () => {
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
