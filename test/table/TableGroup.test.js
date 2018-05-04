import React from 'react';
import { shallow } from 'enzyme';
import { TableItem, TableGroup } from '../../src/index';

describe('<TableGroup />', () => {
  it('should render a table group div', () => {
    const table = shallow(
      <TableGroup>
        <TableItem>Header Item</TableItem>
      </TableGroup>);
    expect(table.find('div.group').exists()).toEqual(true);
  });
});
