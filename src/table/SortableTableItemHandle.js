import React from 'react';

import {
  SortableHandle,
} from 'react-sortable-hoc';

import SortHandleIcon from '../../images/table/sort-handle.svg';

import TableItem from './TableItem';

/**
 * This is a `TableItem` that can be used as a handle for the drag and drop
 * `SortableTableBody`.  This is useful for when the `SortableTableBody` has
 * `useDragHandle`, that will disable dragging on the table row and sorting
 * will not be available unless you have a handle.  See the `SortableTableBody`
 * documentation for how to define a custom sort handle.
 */
const SortableTableItemHandle = SortableHandle(props => (
  <TableItem
    important={props.important}
    unimportant={props.unimportant}
    style={props.style}
    size={props.size}
    align={props.align}
    width={props.width}
    className={`table-sort-handle v2 ${props.className || ''}`}
  >
    <img alt="Click and Drag to Sort" src={SortHandleIcon} />
  </TableItem>
));

export default SortableTableItemHandle;
