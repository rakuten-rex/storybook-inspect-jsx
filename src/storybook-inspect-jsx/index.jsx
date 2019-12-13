/* eslint-disable import/no-extraneous-dependencies */
import jsxToString from 'jsx-to-string';
import addons, { makeDecorator } from '@storybook/addons';

// eslint-disable-next-line import/prefer-default-export
export const withInspectJsx = makeDecorator({
  name: 'withInspectJsx',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context) => {
    const Story = getStory(context);

    // eslint-disable-next-line prefer-const
    let jsx = '';

    if (Story.type.toString() === 'Symbol(react.fragment)') {
      if (Array.isArray(Story.props.children)) {
        Array.from(Story.props.children).forEach(item => {
          jsx += jsxToString(item);
        });
      } else {
        jsx = jsxToString(Story.props.children);
      }
    } else {
      jsx = jsxToString(Story);
    }

    const channel = addons.getChannel();

    channel.emit('storybook/inspectjsx/add_jsx', jsx);

    return Story;
  },
});
