import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * A simple modal footer, primarily for aligning content to the base of the modal.
 */
export default class ModalFooter extends PureComponent {
  static propTypes = {
    /** Any HTML or components */
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="footer">
        {this.props.children}
      </div>
    );
  }
}
