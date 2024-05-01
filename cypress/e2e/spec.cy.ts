describe('Renders every component', () => {
  it('Renders App component', () => {
    cy.visit('/');
    cy.getByTestId('boilerplate-title').should('exist');
  });
});
