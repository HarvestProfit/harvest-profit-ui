import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/table/Table';
import TableFooter from '../../src/table/TableFooter';

describe('<Table />', () => {
  it('should render a table div', () => {
    const table = shallow(
      <Table>
        <TableFooter />
      </Table>);
    expect(table.find('div.table').exists()).toEqual(true);
  });
});
