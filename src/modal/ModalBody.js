import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a simple body for the modal
 */
export default class ModalBody extends PureComponent {
  static propTypes = {
    /** Any HTML or components */
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="body">
        {this.props.children}
      </div>
    );
  }
}
