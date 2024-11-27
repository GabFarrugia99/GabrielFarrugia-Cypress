describe('Search Feature Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display search results for a valid query', () => {
    cy.viewport(1280, 800);
    cy.get('a.search-link.d-flex.align-items-center').eq(1)
    .find('#searchIcon') 
    .click({ force: true });
    cy.get('#searchContainer > div > form > label > input').should('be.visible').type('football{enter}');
    cy.get('div.pb-4.col-md-6.col-lg-4').should('be.visible');
  });

  it('should display search results for an invalid query', () => {
    cy.viewport(1280, 800);
    cy.get('a.search-link.d-flex.align-items-center').eq(1)
    .find('#searchIcon') 
    .click({ force: true });
    cy.get('#searchContainer > div > form > label > input').should('be.visible').type('wscfwegvw{enter}');
    it('should display "Nothing Found" message', () => {
      cy.contains('Nothing Found').should('be.visible');
    });
    });

    it('should close the search bar when the close button is clicked', () => {
      cy.viewport(1280, 800);
      cy.get('a.search-link.d-flex.align-items-center').eq(1)
      .find('#searchIcon') 
      .click({ force: true });
      cy.get('#searchContainer > div > form > label > input').should('be.visible');
      cy.get('#closeSearchBtn').click();
      cy.get('#searchContainer > div > form > label > input').should('not.be.visible');
    });

  it('Mobile-should display search results for a valid query', () => {
    cy.viewport(375, 667);
     cy.get('a.search-link.d-flex.align-items-center').eq(1)
    .find('#searchIcon') 
    .click({ force: true });
    cy.get('#searchContainer > div > form > label > input').should('be.visible').type('football{enter}');
    cy.get('div.pb-4.col-md-6.col-lg-4').should('be.visible');
  });

  it('Mobile-should display search results for an invalid query', () => {
    cy.viewport(375, 667);
    cy.get('a.search-link.d-flex.align-items-center').eq(1)
    .find('#searchIcon')  
    .click({ force: true });
    cy.get('#searchContainer > div > form > label > input').should('be.visible').type('wscfwegvw{enter}');
    it('should display "Nothing Found" message', () => {
      cy.contains('Nothing Found').should('be.visible');
    });
  });

    it('Mobile-should close the search bar when the close button is clicked', () => {
      cy.viewport(375, 667);
      cy.get('a.search-link.d-flex.align-items-center').eq(1)
      .find('#searchIcon') 
      .click({ force: true });
      cy.get('#searchContainer > div > form > label > input').should('be.visible');
      cy.get('#closeSearchBtn').click();
      cy.get('#searchContainer > div > form > label > input').should('not.be.visible');
    });
  });

