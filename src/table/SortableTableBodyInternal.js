import React from 'react';

import {
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';

import TableBody from './TableBody';

const SortableItem = SortableElement(props => props.item);

const SortableForm = SortableContainer((props) => {
  let bodyClasses = `sortable-table-body ${props.tableBodyClassName || ''}`;
  if (props.disabled) {
    bodyClasses = `${bodyClasses} sorting-disabled`;
  }
  return (
    <TableBody className={bodyClasses} style={props.tableBodyStyle || {}}>
      {props.items.map((item, index) => (
        <SortableItem
          key={item.key}
          index={index}
          item={item}
          disabled={props.disabled}
        />))
      }
    </TableBody>
  );
});

export default SortableForm;
