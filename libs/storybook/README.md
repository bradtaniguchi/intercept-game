# storybook

This library will be used to run/develop storybook. It will provide
basic examples on how to write stories, and main setup code.

Other libs will be leveraged with storybook via [composition](https://nx.dev/storybook/storybook-composition-setup).

## Running unit tests

Run `nx test storybook` to execute the unit tests via [Jest](https://jestjs.io).

## Running storybook

Run `nx run storybook:storybook` to execute the local storybook project.

## Adding storybook to existing app/lib

Run `nx g @nrwl/storybook:configuration project-name` where project-name is replaced with the actual name of the project

See how to add a sub-storybook below to make sure it appears with the internal-client build.

### Running all storybooks locally

This library is primarily used as the main storybook project, which uses storybook composition to
host/serve all storybooks within the project. These are built and combined within github-actions
and deployed to github pages.

To replicate this behavior locally run the follow commands:

```
npx nx run-many --target=build-storybook --all
mv dist/storybook/storybook/** dist/storybook/
npx http-server dist/storybook
```

### Adding a new sub-storybook

Storybooks will be generated, but wont be automatically linked without updating
the `./storybook/main.js` file within **this** project.

For example:

```
module.export = {
  //...
  refs: {
    // other refs...
    'my-new-lib': {
      title: 'my-new-lib',
      url: 'my-new-lib/',
    }
  }
}
```

This will make it appear within the gh-page automatically. Otherwise to run individual storybooks,
see the project's docs.
