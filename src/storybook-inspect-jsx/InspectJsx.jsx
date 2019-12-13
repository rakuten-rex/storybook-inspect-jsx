/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
import React from 'react';
import { bool, shape, func } from 'prop-types';
import { STORY_CHANGED } from '@storybook/core-events';
import pretty from 'pretty';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';

export default class InspectJsx extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      jsx: '',
    };
    this.onAddHtml = this.onAddHtml.bind(this);
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  componentDidMount() {
    const { api } = this.props;
    this.onChannelActions();

    api.on(STORY_CHANGED, this.onStoryChange);
  }

  componentDidUpdate(prevProps) {
    const { active } = this.props;

    if (active !== prevProps.active) {
      if (active) {
        this.onChannelActions();
      }
    }
  }

  componentWillUnmount() {
    const { channel, api } = this.props;
    api.off(STORY_CHANGED, this.onStoryChange);
    channel.removeListener('storybook/inspectjsx/add_jsx', this.onAddHtml);
  }

  onChannelActions() {
    const { channel } = this.props;

    channel.on('storybook/inspectjsx/add_jsx', jsx => {
      const doubleQuotesPatch = jsx.replace(/&quot;/gi, '"');
      const cleanHtml = doubleQuotesPatch;

      this.onAddHtml(cleanHtml);
    });
  }

  onStoryChange() {
    this.onAddHtml('');
  }

  onAddHtml(jsx) {
    const formatedHtml = pretty(jsx);
    const highlightHtml = highlight(
      formatedHtml,
      // eslint-disable-next-line no-undef
      languages.markup,
      'jsx'
    );

    this.setState({
      jsx: highlightHtml,
    });
  }

  render() {
    const { active } = this.props;
    const { jsx } = this.state;

    if (active) {
      return (
        <div style={{ paddingLeft: '20px' }}>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: jsx }} />
          </pre>
        </div>
      );
    }

    return null;
  }
}

InspectJsx.propTypes = {
  active: bool.isRequired,
  channel: shape({
    on: func,
    removeListener: func,
  }).isRequired,
  api: shape({
    onStory: func,
  }).isRequired,
};
