import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<TableBody>` component to render a table row
 */
const TableRow = props => (
  <div className={`table-row v2 ${props.className} ${props.align}`} style={props.style}>
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
  /** Aligns all children under the item */
  align: PropTypes.oneOf(['top', 'bottom', 'center']),
};

TableRow.defaultProps = {
  className: '',
  children: null,
  style: {},
  align: 'bottom',
};

export default TableRow;
