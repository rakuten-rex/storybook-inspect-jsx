/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import addons from '@storybook/addons';
import InspectHtml from '../storybook-inspect-jsx/InspectJsx';

export default addons.register('storybook/inspecthtml', api => {
  addons.addPanel('storybook/inspecthtml/panel', {
    title: 'Inspect JSX',
    render: ({ active }) => {
      const channel = addons.getChannel();

      return (
        <InspectHtml
          channel={channel}
          api={api}
          active={active}
          key="inspect-html"
        />
      );
    },
  });
});
