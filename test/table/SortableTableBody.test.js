import React from 'react';
import { mount } from 'enzyme';
import { SortableTableBody, TableRow, SortableTableItemHandle } from '../../src/index';

describe('<SortableTableBody />', () => {
  it('should render a sortable table body', () => {
    const table = mount(<SortableTableBody><p>Test</p></SortableTableBody>);
    expect(table.find('TableBody').exists()).toEqual(true);
  });

  it('should render a sortable table body with a drag handle', () => {
    const table = mount(
      <SortableTableBody useDragHandle>
        <TableRow>
          <SortableTableItemHandle />
        </TableRow>
      </SortableTableBody>);
    expect(table.find('TableBody').exists()).toEqual(true);
  });
});
