import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * A multi select filter dropdown with search ability
 */
export default class EmptyDropdownItem extends PureComponent {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Optional class names for the component */
    className: PropTypes.string,
  }

  render() {
    return (
      <small className={`button v2 dropdown-item ${this.props.className}`}>
        {this.props.children}
      </small>
    );
  }
}
