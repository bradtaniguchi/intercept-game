# common

The common library holds useful and common types that are always available in all libraries and apps. This should be kept as lean and global as possible as this library will be inherited by nearly all libs and apps.

## Running unit tests

Run `nx test common` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint common` to execute the lint via [ESLint](https://eslint.org/).

## Building typedocs:

Run `npx nx run common:typedoc` to generate the typedocs for this library.

### Running typedocs locally:

Run `npx nx run common:typedoc-server`
