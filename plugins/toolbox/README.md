# toolbox

Welcome to the toolbox plugin!

_This plugin was created through the Backstage CLI_

## Getting started

Your plugin has been added to the example app in this repository, meaning you'll be able to access it by running `yarn start` in the root directory, and then navigating to [/toolbox](http://localhost:3000/toolbox).

You can also serve the plugin in isolation by running `yarn start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.

## Installation

Add the plugin to your frontend app:

```bash
cd packages/app && yarn add @drodil/backstage-plugin-toolbox
```

Expose the questions page:

```ts
// packages/app/src/App.tsx
import { toolboxPage } from '@drodil/backstage-plugin-toolbox';

// ...

const AppRoutes = () => (
  <FlatRoutes>
    // ...
    <Route path="/toolbox" element={<toolboxPage />} />
    // ...
  </FlatRoutes>
);
```

An interface for toolbox is now available at `/toolbox`.
