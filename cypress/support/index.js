Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the error caused by loadMoreSettings
    if (err.message.includes('loadMoreSettings is not defined')) {
      return false; // Prevent Cypress from failing the test
    }
    return true; // Allow other errors to fail the test
  });
