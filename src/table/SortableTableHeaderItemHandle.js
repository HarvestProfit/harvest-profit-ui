import React from 'react';
import PropTypes from 'prop-types';

import TableHeaderItem from './TableHeaderItem';

const SortableTableHeaderItemHandle = props => (
  <TableHeaderItem
    {...props}
    className={`table-sort-handle v2 ${props.className || ''}`}
  >
    {props.children}
  </TableHeaderItem>
);


SortableTableHeaderItemHandle.propTypes = {
  /** Optional additional class names to apply at the table level */
  className: PropTypes.string,
  /** Table header, body, and footer */
  children: PropTypes.node.isRequired,
};

SortableTableHeaderItemHandle.defaultProps = {
  className: '',
};

export default SortableTableHeaderItemHandle;
