# ReX React UI Component: storybook-inspect-jsx

This project is part of ReX Design System and it can be used to create UI Components compatible with:

React, HTML/CSS and Vue.js  

# How to install

<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />

```
npm install @rakuten-rex/storybook-inspect-jsx@1.3.4 --save
```

<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/yarn.svg?sanitize=true" height="16" />

```
yarn add @rakuten-rex/storybook-inspect-jsx@1.3.4
```

# Getting started

## Storybook Live examples

For a complete guide of properties for React and HTML classes please visit our Storybook page:  

[<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/storybook.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/storybook-inspect-jsx/)   

https://rakuten-rex.github.io/storybook-inspect-jsx/   


**Storybook features**
- [x] Stories by component types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options



### Storybook integration

#### Register

Add this line at the end of the content of `.storybook/addons.js`.   

```js
import '@rakuten-rex/storybook-inspect-jsx/register';
```

#### Story

The addon use the original story to get the original JSX of a React component by using jsx-to-string and show it into the panels tab, after that it returns the original story without any changes.

Example: 

Using `MyComponent.stories.jsx`:

```js
import { withInspectJsx } from '@rakuten-rex/storybook-inspect-jsx';

const stories = storiesOf('MyComponent', module);
stories.addDecorator(withInspectJsx); // <-- First decorator
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);
...
```

## Documentation, source code and distribution

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/github-icon.svg?sanitize=true" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

## Project Stack

| Front-end |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> HTML5 <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS3 & Sass  <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/javascript.svg?sanitize=true" height="16" /> JavaScript ES6 <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React |

| Tools |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/webpack.svg?sanitize=true" height="16" /> webpack <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/storybook-icon.svg?sanitize=true" height="16" /> Storybook <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/babel.svg?sanitize=true" height="16" /> Babel <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/eslint.svg?sanitize=true" height="16" /> ESLint <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/logos/prettier.svg?sanitize=true" height="16" /> Prettier |

## Features

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |
| CSS classes prefix `rex-` |

## Browser Support

| PC | Mobile 
|-------------|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/chrome.svg?sanitize=true" height="14" /> Chrome 49+ | <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/apple.svg?sanitize=true" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/safari.svg?sanitize=true" height="14" /> Safari 9.1+ | <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/android-icon.svg?sanitize=true" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/firefox.svg?sanitize=true" height="14" /> Firefox 31+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/microsoft-edge.svg?sanitize=true" height="14" /> MS Edge 15+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/storybook-inspect-jsx/master/project-scripts/webpack/markdown/browsers/internetexplorer.svg?sanitize=true" height="14" /> IE 11+ | |



