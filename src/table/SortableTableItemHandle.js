import React from 'react';

import {
  SortableHandle,
} from 'react-sortable-hoc';

import SortHandleIcon from './sort-handle.svg';

import TableItem from './TableItem';

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
