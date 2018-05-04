import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * A simple modal footer, primarily for aligning content to the base of the modal.
 */
export default class ModalFooter extends PureComponent {
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
      <div className="footer" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
