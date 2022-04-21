# Vue 3 Unit testing

This is a simple project to show how to unit-test in Vue3, incorporating `msw` library to mock API request for use in test and setting up the coverage report for use in Sonarqube

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Using msw to mock API for both browser and node
1. Run `npm i msw --save-dev` to install msw in project
2. Create request handler
3. Run `npx msw init public/ --save` to setup mock service worker script
4. Setup service worker according to running env (if browser, user `setupWorker`. Use `setupServer` for running msw in node)

Docs are here: https://mswjs.io/docs/getting-started/integrate/browser


## Setting up coverage in vite/vitest
Add the coverage setting to `vite.config.ts`
```
export default defineConfig({
  // ...other setup
  test: {
    coverage: {
      reporter: ['lcov', 'text', 'json', 'html'],
    },
    reporters: ["junit"],
  },
});
```

> Reporter: `lcov` is used to integrate coverage report into Sonarqube
> Reporter the default `text, json, html` allowed the coverage report to be rendered in console in a more readable text.


## Integrating coverage with sonarqube
To integrate the coverage report with sonarqube, furter setup is needed.
Add below setting to sonar properties / argument when running sonar scanner
```
-Dsonar.javascript.coveragePlugin=lcov 
-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
```

Doc is here to setup sonarqube locally: https://docs.sonarqube.org/latest/setup/get-started-2-minutes/
Docs is here to setup coverage in sonarqube: https://docs.sonarqube.org/latest/analysis/coverage/
