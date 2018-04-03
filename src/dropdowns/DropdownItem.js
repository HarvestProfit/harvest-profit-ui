import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * A multi select filter dropdown with search ability
 */
export default class DropdownItem extends PureComponent {
  static defaultProps = {
    className: '',
    onClick: () => {},
  }

  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    /** Optional class names for the component */
    className: PropTypes.string,
  }

  render() {
    return (
      <div onClick={this.props.onClick} className={`dropdown-item v2 ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
