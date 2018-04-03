import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the footer for the table.  In most cases, HP will use an empty footer
 * if the table is alone in a panel.  The footer can be a good place for table meta
 * data as well as possible error notification.
 */
const TableFooter = props => (
  <div className={`table-footer v2 ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

TableFooter.propTypes = {
  /** Optional additional class names to apply at the table body level */
  className: PropTypes.string,
  /** Table footer information, text or nodes */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableFooter.defaultProps = {
  className: '',
  children: null,
  style: {},
};

export default TableFooter;
