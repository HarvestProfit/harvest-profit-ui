import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/table/TableRow';

describe('<TableRow />', () => {
  it('should render a table row div', () => {
    const table = shallow(
      <TableRow>1</TableRow>);
    expect(table.find('div').exists()).toEqual(true);
  });
});
