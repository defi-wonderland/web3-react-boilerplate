# Web3 React Boilerplate

## Features

- Modern React setup with the latest tools and libraries.
- Boilerplate for building web3-enabled applications.
- Example unit and integration tests included.
- Code linting and formatting for clean and maintainable code.
- GitHub workflows for continuous integration.

## Setup

1. Clone this repository.
2. Copy the `.env.example` file to `.env` and fill in the variables.
3. Install the project dependencies by running:

   ```bash
   pnpm install
   ```

## Available Scripts

Available scripts that can be run using `pnpm`:

| Script         | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `dev`          | Start the development server using Next.                     |
| `build`        | Build the project for production.                            |
| `preview`      | Preview the production build using Next.                     |
| `lint`         | Run ESLint on the source code to check for coding standards. |
| `lint:fix`     | Run ESLint and automatically fix code formatting issues.     |
| `prettier`     | Check code formatting using Prettier.                        |
| `prettier:fix` | Format code using Prettier and automatically fix issues.     |
| `format`       | Run Prettier and ESLint to format and fix code issues.       |
| `format:check` | Check code formatting and linting without making changes.    |
| `test`         | Run tests using Cypress and Jest                             |

## Technologies Used

This boilerplate leverages the latest technologies, including:

- [NextJS](https://nextjs.org/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)
- [Rainbowkit](https://www.rainbowkit.com/)
