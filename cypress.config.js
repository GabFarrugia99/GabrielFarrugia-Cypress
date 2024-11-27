module.exports = {
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/integration/**/*.spec.js',
    baseUrl: 'https://www.unibet.co.uk/blog',
    visitTimeout: 20000,
    retryOnStatusCodeFailure: true,
  },
};
