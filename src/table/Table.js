import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a highly configurable table with responsive capabilities.
 */
const Table = props => (
  <div className={`table v2 ${props.className}`}>
    {props.children}
  </div>
);

Table.propTypes = {
  /** Optional additional class names to apply at the table level */
  className: PropTypes.string,
  /** Table header, body, and footer */
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  className: '',
};

export default Table;
