import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a simple body for the modal
 */
export default class ModalBody extends PureComponent {
  static defaultProps = {
    style: {},
  }
  static propTypes = {
    /** Any HTML or components */
    children: PropTypes.node.isRequired,
    /** Optional styles */
    style: PropTypes.shape({}),
  }

  render() {
    return (
      <div className="body" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
