describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visits the app root url and shows header, search and top rated', () => {
    cy.contains('h1', 'Filming');
    cy.get('[data-testid="search-label"]').contains('Busqueda');
    cy.get('[data-testid="movie-search-title"]').contains('Las películas más populares de hoy');
    cy.get('[data-testid="movie-item"]').should('have.length', 6);
  });

  it('search film when you write on search input and click button', () => {
    cy.get('[data-testid="search-input"]').type('Princesa');
    cy.get('[data-testid="search-button"]').click();
    cy.url().should('include', '/search/Princesa');
    cy.get('[data-testid="movie-search-title"]').contains('Resultado de la busqueda de: Princesa');
    cy.get('[data-testid="movie-item"]').should('have.length', 20);
  });

  it('show empty message when there are no results with the search', () => {
    cy.get('[data-testid="search-input"]').type('asdasdasdasd');
    cy.get('[data-testid="search-button"]').click();
    cy.url().should('include', '/search/asdasdasdasd');
    cy.get('[data-testid="movie-search-title"]').contains('Resultado de la busqueda de: asdasdasdasd');
    cy.get('[data-testid="movie-item"]').should('have.length', 0);
    cy.get('[data-testid="empty-search"]').should('be.visible');
  });

  it('show film info when you click on a movie', () => {
    cy.get('[data-testid="search-input"]').type('La lista de schindler');
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="movie-item"]').first().click();
    cy.get('[data-testid="movie-title"]').contains('La lista de Schindler');
  });
});