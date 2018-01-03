import React from 'react';
import PropTypes from 'prop-types';

/**
 * Placed directly under the `<Table>` component to render the table body
 */
const TableBody = props => (
  <div className={`body ${props.className}`}>
    {props.children}
  </div>
);

TableBody.propTypes = {
  /** Optional additional class names to apply at the table body level */
  className: PropTypes.string,
  /** Table rows */
  children: PropTypes.node.isRequired,
};

TableBody.defaultProps = {
  className: '',
};

export default TableBody;
