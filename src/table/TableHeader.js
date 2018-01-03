import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<Table>` component to render the table header
 */
const TableHeader = props => (
  <div className={`header ${props.className}`}>
    {props.children}
  </div>
);

TableHeader.propTypes = {
  /** Optional additional class names to apply at the table header level */
  className: PropTypes.string,
  /** Table rows */
  children: PropTypes.node.isRequired,
};

TableHeader.defaultProps = {
  className: '',
};

export default TableHeader;
