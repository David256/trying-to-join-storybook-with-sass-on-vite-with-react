# Trying to Join the Storybook with SASS on vite.js with React

I did:

```bash
npm create vite .
```

And selected the template `react-ts`.

Modified the files in `src/` and wrote a test page.

Initialized storybook with:

```bash
npx sb init
```

It detected the `vite` and set the builder as `@storybook/builder-vite`.

Next, I passed the CSS file to SASS file, and installed the `sass` package. Restarted **storybook** and both modules could work together.