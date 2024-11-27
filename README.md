
# GabrielFarrugia-Cypress

## Overview
This project demonstrates the use of Cypress for automating the testing of the search feature on the Unibet Blog site. The tests cover scenarios for valid and invalid search queries, the functionality of the close search button as well as ensuring the search results are responsive across desktop and mobile viewports.

## Project Structure
```
Cypress-Test-Automation/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── search/
│   │       ├── search.spec.js
│   ├── plugins/
│   ├── support/
│   ├── index.js
├── node_modules/
├── cypress.config.js
├── package.json
├── README.md
```

## Installation and Running Tests

### 1. Clone the repository:
```bash
git clone https://github.com/GabFarrugia99/GabrielFarrugia-Cypress.git
cd GabrielFarrugia-Cypress
```

### 2. Install dependencies:
```bash
npm install cypress
```

### 3. Open Cypress:
```bash
npm run cypress:open
```

### 4. Run tests headlessly:
```bash
npm run cypress:run
```

## Design Considerations
1. **Viewport Configuration**: The tests are run on both desktop (1280x800) and mobile (375x667) viewports to ensure functionality.
2. **Test Case Coverage**: 
   - Valid search queries.
   - Invalid search queries.(e.g., random characters)
   - Functionality of the close search button
3. **Maintainability**: 
   - Reusable Cypress commands for search functionality.
   - Organized project structure for scalability.

## Further Automation Considerations
1. **Pagination**: Automate tests for pagination or infinite scroll behavior on search results.
2. **Performance**: Validate search performance by measuring the response time.
3. **Error Handling**: Test for edge cases such as special characters or SQL injection attempts in search input.
4. **Visual Testing**: Implement visual regression testing to ensure UI consistency.

## Conclusion
This project serves as a basic framework to automate search feature testing using Cypress. Further enhancements can be made with more complex scenarios and integration with CI/CD pipelines for continuous testingand and scalability.
