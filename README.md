# Create CodeSnorters

A command-line tool for quickly scaffolding boilerplate templates for various development projects.

## Overview

`create-codesnorters` is a CLI designed to streamline the initial setup of your projects. Whether you are starting a new client-side application or a server-side API, this tool provides a set of curated templates to get you up and running in seconds.

## Usage

To create a new project, run the following command in your terminal:

```bash
npx create codesnorters@latest
```

The CLI will guide you through the process, prompting you to select the type of boilerplate and the specific template you want to use.

## Features

*   **Interactive Interface:** A user-friendly command-line experience powered by `@clack/prompts`.
*   **Client & Server Templates:** A selection of templates for both frontend and backend development.
*   **Git Initialization:** Automatically initializes a new git repository in your project.

## Available Templates

### Client-Side

*   **React Starter:** A basic React starter with TypeScript , Tailwind and Vite.
*   **React + Shadcn UI:** A React starter with TypeScript, Vite, and the popular `shadcn/ui` component library.
*   **React + Solana:** A React starter with TypeScript, Vite, and Solana integration for web3 development.

### Server-Side

*   **Express:** A basic Express.js server with TypeScript.
*   **Express + Auth:** An Express.js server with TypeScript and JWT-based authentication pre-configured.
*   **Express + Google Auth:** An Express.js server with TypeScript and Google OAuth integration.
*   **Express + Bun:** An Express.js server with TypeScript, optimized to run with the Bun runtime.

## Contributing

Contributions are welcome! If you have ideas for new templates or features, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.