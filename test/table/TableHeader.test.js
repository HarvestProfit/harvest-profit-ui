import React from 'react';
import { shallow } from 'enzyme';
import { TableHeader, TableHeaderItem } from '../../src/index';

describe('<TableHeader />', () => {
  it('should render a table header div', () => {
    const table = shallow(
      <TableHeader>
        <TableHeaderItem>Header Item</TableHeaderItem>
      </TableHeader>);
    expect(table.find('.header').exists()).toEqual(true);
  });
});
