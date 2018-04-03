import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<Table>` component to render the table body
 */
const TableBody = props => (
  <div className={`table-body v2 ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

TableBody.propTypes = {
  /** Optional additional class names to apply at the table body level */
  className: PropTypes.string,
  /** Table rows */
  children: PropTypes.node.isRequired,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableBody.defaultProps = {
  className: '',
  style: {},
};

export default TableBody;
