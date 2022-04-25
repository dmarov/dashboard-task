describe('Users tests', () => {
    it('Checks if user page works', () => {
        cy.visit('/users/1');

        cy.get('[data-ui-test="user-album-link-1"]').click();
        cy.url().should('contain', 'albums');

        cy.go('back');

        cy.get('[data-ui-test="user-post-link-1"]').click();
        cy.url().should('contain', 'posts');
    })
})
