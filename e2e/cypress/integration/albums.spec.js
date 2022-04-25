describe('Albums tests', () => {
    it('Checks if albums work', () => {
        cy.visit('/albums');

        cy.checkPagination();

        cy.get('[data-ui-test="pagination-prev"]').click();
        cy.get('[data-ui-test="album-entry-1"]').should('be.visible');

        cy.get('[data-ui-test="search-term"]').type('3');
        cy.get('[data-ui-test="album-entry-21"]').should('be.visible');

        cy.get('[data-ui-test="search-type"]').select('1');

        cy.get('[data-ui-test^="album-entry-"]').should('not.exist');

        cy.get('[data-ui-test="search-term"]').clear();
        cy.get('[data-ui-test="album-entry-1"]').should('exist');

        cy.get('[data-ui-test="search-term"]').type('con');

        cy.get('[data-ui-test="album-entry-12"]').should('exist');
        cy.get('[data-ui-test="album-entry-1"]').should('not.exist');

        cy.get('[data-ui-test="pagination-page-0 pagination-active"]').should('be.visible');

        cy.get('[data-ui-test="pagination-page-1"]').click();

        cy.get('[data-ui-test="album-entry-link-95"]').click();
        cy.url().should('contain', 'albums');

        cy.go('back');

        cy.get('[data-ui-test="album-entry-user-link-95"]').click();
        cy.url().should('contain', 'users');
    })
})
