# Backend CRUDL using Postgres and TypeScript

- **Data validation**: Use the `zod` library for validating input data.
- **Logging**: Implement logging using `ts-log`.
- **App configuration**: Include linting with `eslint`, and set up pre-commit hooks.
- **Unit tests**: Write unit tests using `jest` and `jest-when`.
- **CI/CD pipeline**: Use GitHub Actions as the pipeline to run on GitHub pull requests.
  - The pipeline should include linting and unit tests.
  - Merging is only allowed when the pipeline passes.
- **Postman collections and environments**: Attach Postman collections/environments for end-to-end testing (you may use `newman` to run the tests). Alternatively, write tests using Cypress.
- **API documentation**: Document the API using Swagger.
