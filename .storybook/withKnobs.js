import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInspectJsx } from '../src/storybook-inspect-jsx';

export default [
  withKnobs,
  withInspectJsx,
  withA11y,
];
