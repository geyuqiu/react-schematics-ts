**under development**

# component-gen

Generate react component with storybook and unit test(snapshot by enzyme) file by schematics


# Usage

`$ npm run gen -- --name=Header --path=src/components`

```
$ tree src/components/Header/

src/components/Header/
├── Header.tsx
├── Header.test.tsx
```

![](https://github.com/hand-dot/component-gen/blob/master/component-gen.gif)

# Install

`$ npm install --save-dev @angular-devkit/schematics-cli react-schematics-ts`

# Setup

in `package.json`

```
  "scripts": {
    "gen": "schematics react-schematics-ts:react"
  }
```
