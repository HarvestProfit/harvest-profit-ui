import React from 'react';
import { shallow } from 'enzyme';
import TableBody from '../../src/table/TableBody';
import TableRow from '../../src/table/TableRow';

describe('<TableBody />', () => {
  it('should render a table body div', () => {
    const table = shallow(
      <TableBody>
        <TableRow>1</TableRow>
      </TableBody>,
    );
    expect(table.find('.body').exists()).toEqual(true);
  });
});
