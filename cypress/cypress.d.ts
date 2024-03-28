declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
  }
}
