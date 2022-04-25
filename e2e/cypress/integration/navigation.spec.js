describe('Navigation tests', () => {
    it('Checks if menu navigation works', () => {
        cy.visit('/');
        cy.url().should('contain', 'dashboard');

        cy.get('[data-ui-test="nav-link-1"]').click();
        cy.url().should('contain', 'posts');

        cy.get('[data-ui-test="nav-link-2"]').click();
        cy.url().should('contain', 'albums');

        cy.get('[data-ui-test="nav-link-3"]').click();
        cy.url().should('contain', 'photos');
    })
})
