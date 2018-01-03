import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a modal header with a close button and the ability to add a title and subtitle.
 */
export default class ModalHeader extends PureComponent {
  static propTypes = {
    /** The title of the modal */
    title: PropTypes.string,
    /** An optional subtitle of the modal */
    subtitle: PropTypes.string,
    /** By providing children, you will disable the title/subtitle/cancel rendering */
    children: PropTypes.node,
    /** An optional CB to close the modal, the cancel button will not render without this. */
    toggle: PropTypes.func,
  }

  static defaultProps = {
    title: null,
    subtitle: null,
    children: null,
    toggle: null,
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

  renderCancelButton() {
    if (this.props.toggle) {
      return (
        <button className="action v2" onClick={this.props.toggle}>Cancel</button>
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
      <div className="title">
        {this.renderModalTitleText()}
        {this.renderModalSubtitleText()}
        {this.renderCancelButton()}
      </div>
    );
  }
}
