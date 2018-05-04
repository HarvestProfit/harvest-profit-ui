import React from 'react';
import { shallow } from 'enzyme';
import { TableRow, TableBody } from '../../src/index';

describe('<TableBody />', () => {
  it('should render a table body div', () => {
    const table = shallow(
      <TableBody>
        <TableRow>1</TableRow>
      </TableBody>,
    );
    expect(table.find('.table-body').exists()).toEqual(true);
  });
});
