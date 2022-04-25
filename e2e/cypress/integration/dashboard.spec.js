describe('Dashboard tests', () => {
    it('Checks if dashboard works', () => {
        cy.visit('/');

        cy.get('[data-ui-test="total-posts"]').should('not.be.empty');
        cy.get('[data-ui-test="total-albums"]').should('not.be.empty');
        cy.get('[data-ui-test="total-photos"]').should('not.be.empty');
        cy.get('[data-ui-test="dashboard-post"]').should('be.visible');
        cy.get('[data-ui-test="dashboard-photo"]').should('be.visible');

        cy.get('[data-ui-test="post-link"]').first().click();
        cy.url().should('contain', 'posts');

        cy.visit('/');

        cy.get('[data-ui-test="photo-link"]').first().click();
        cy.url().should('contain', 'photos');
    })
})
