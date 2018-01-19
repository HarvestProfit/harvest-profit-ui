import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<Table>` component to render the table header
 */
const TableHeader = props => (
  <div className={`header ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

TableHeader.propTypes = {
  /** Optional additional class names to apply at the table header level */
  className: PropTypes.string,
  /** Table rows */
  children: PropTypes.node.isRequired,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableHeader.defaultProps = {
  className: '',
  style: {},
};

export default TableHeader;
