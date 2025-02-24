# Fuchs

## How to

1. Apply node version (see [nvm](https://github.com/nvm-sh/nvm))

```shell
nvm install
nvm use
corepack enable
```

2. Install dependencies

```shell
yarn
```

3. Run setup

```shell
yarn setup
```

5. Go through setup prompts and after check that all major scripts are executing

```shell
yarn run dev
yarn run test
yarn run build
```

6. If you bump dependencies, please create a pull request in template project repo, many thanks!

## TODO

1. Optional storybook integration ([plugin](https://github.com/storybookjs/storybook/tree/next/code/builders/builder-vite/))
2. Plugins that can be useful (from [awesome-vite](https://github.com/vitejs/awesome-vite)):
   - [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) - dev mode TypeScript checking
   - [vite-plugin-json-server](https://github.com/yracnet/vite-plugin-json-server) - can be used as mock API
   - [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - also can be used as mock API
   - [vite-plugin-image-optimized](https://github.com/FatehAK/vite-plugin-image-optimizer) - use instead of `vite-svg-loader`
     - Need to be cautious about potential quality loss and build times
3. Add an optional router
