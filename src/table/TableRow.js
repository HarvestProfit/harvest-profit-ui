import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<TableBody>` component to render a table row
 */
const TableRow = props => (
  <div className={`${props.className}`} style={props.style}>
    {props.children}
  </div>
);

TableRow.propTypes = {
  /** Optional additional class names to apply at the table row level */
  className: PropTypes.string,
  /** Table items or groups */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableRow.defaultProps = {
  className: '',
  children: null,
  style: {},
};

export default TableRow;
