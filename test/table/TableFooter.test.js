import React from 'react';
import { shallow } from 'enzyme';
import TableFooter from '../../src/table/TableFooter';

describe('<TableFooter />', () => {
  it('should render a table footer div', () => {
    const table = shallow(
      <TableFooter />);
    expect(table.find('.footer').exists()).toEqual(true);
  });
});
