import React from 'react';
import PropTypes from 'prop-types';

import TableHeaderItem from './TableHeaderItem';

/**
 * This component is simply a `TableHeaderItem` that is sized to the same
 * size of the `SortableTableItemHandle`.  It also supports the addition of
 * the `SortableTableHeaderItem` so you can change the sort direction of the
 * drag and drop table.
 */
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
  children: PropTypes.node,
};

SortableTableHeaderItemHandle.defaultProps = {
  className: '',
  children: null,
};

export default SortableTableHeaderItemHandle;
