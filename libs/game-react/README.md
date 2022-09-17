# game-react

This library holds the "implementation" of the main code/logic that goes
into the actual game app. The `game-client` app should manage the high level
data management, where as this library has the actual implementations and logic
so things can be managed from within storybook.

All components within this library should be essentially stateless.

## Running unit tests

Run `nx test game-react` to execute the unit tests via [Jest](https://jestjs.io).

## Running storybook

Run `nx run game-react:storybook` to execute the local storybook project.

<!-- white space change to trigger nx -->
