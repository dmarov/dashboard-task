describe('Posst tests', () => {
    it('Checks if posts work', () => {
        cy.visit('/posts');

        cy.get('[data-ui-test="pagination-page-0 pagination-active"]').should('be.visible');

        cy.get('[data-ui-test="pagination-page-1"]').click();
        cy.get('[data-ui-test="pagination-page-1 pagination-active"]').should('be.visible');

        cy.get('[data-ui-test="pagination-prev"]').click();
        cy.get('[data-ui-test="pagination-page-0 pagination-active"]').should('be.visible');

        cy.get('[data-ui-test="pagination-next"]').click();
        cy.get('[data-ui-test="pagination-page-1 pagination-active"]').should('be.visible');

        cy.url().should('contain', 'page=2');

        cy.get('[data-ui-test="pagination-prev"]').click();
        cy.get('[data-ui-test="post-1"]').should('be.visible');

        cy.get('[data-ui-test="search-term"]').type('2');
        cy.get('[data-ui-test="post-11"]').should('be.visible');

        cy.get('[data-ui-test="search-type"]').select('1');

        cy.get('[data-ui-test^="post-"]').should('not.exist')

        cy.get('[data-ui-test="search-term"]').clear();
        cy.get('[data-ui-test="post-2"]').should('exist');

        cy.get('[data-ui-test="search-term"]').type('qui');

        cy.get('[data-ui-test="post-2"]').should('exist');
        cy.get('[data-ui-test="post-1"]').should('not.exist');

        cy.get('[data-ui-test="search-type"]').select('2');

        cy.get('[data-ui-test="pagination-page-0 pagination-active"]').should('be.visible');

        cy.get('[data-ui-test="pagination-page-2"]').click();

        cy.get('[data-ui-test="post-user-link-11"]').click();
        cy.url().should('contain', 'user');

        cy.go('back');

        cy.get('[data-ui-test="post-entry-link-11"]').click();
        cy.url().should('contain', 'posts');
    })
})
