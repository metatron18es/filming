# filming
## Prerequisites

### Node.js

Before you can start working, you need to have Node.js
installed on your machine. The currently supported versions are `18.9.0` or greater.

_NOTE: You can use a tool like [`NVM`](https://github.com/creationix/nvm)
 to install and manage multiple node versions_
 ## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Once you have Node.js and `npm` installed on your machine and have validated
that you are running the proper version, you can set up the development environment
by running the following at the root of the repository:

```bash
$ rm package-lock.json
$ rm -rf node_modules
$ npm i
```

### Compile and Hot-Reload for Development

```bash
$ npm run dev
```

### Type-Check, Compile and Minify for Production

```bash
$ npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```bash
$ npm run test:unit
```
You can launch unit test with a visual interface
```bash
$ npm run test:ui
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```bash
$ npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```bash
$ npm run build
$ npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```bash
$ npm run lint
```
### Type check

```bash
$ npm run type-check
```
