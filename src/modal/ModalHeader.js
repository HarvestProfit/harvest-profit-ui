import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a modal header with a close button and the ability to add a title and subtitle.
 */
export default class ModalHeader extends PureComponent {
  static defaultProps = {
    style: {},
  }
  static propTypes = {
    /** The title of the modal */
    title: PropTypes.string,
    /** An optional subtitle of the modal */
    subtitle: PropTypes.string,
    /** By providing children, you will disable the title/subtitle/cancel rendering */
    children: PropTypes.node,
    /** Optional styles */
    style: PropTypes.shape({}),
  }

  static defaultProps = {
    title: null,
    subtitle: null,
    children: null,
  }

  renderModalTitleText() {
    if (this.props.title) {
      return (
        <h1>{this.props.title}</h1>
      );
    }
    return null;
  }

  renderModalSubtitleText() {
    if (this.props.subtitle) {
      return (
        <h3>{this.props.subtitle}</h3>
      );
    }
    return null;
  }

  render() {
    if (this.props.children) {
      return (
        <div className="title">
          {this.props.children}
        </div>
      );
    }
    return (
      <div className="title" style={this.props.style}>
        {this.renderModalTitleText()}
        {this.renderModalSubtitleText()}
      </div>
    );
  }
}
