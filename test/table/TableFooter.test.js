import React from 'react';
import { shallow } from 'enzyme';
import { TableFooter } from '../../src/index';

describe('<TableFooter />', () => {
  it('should render a table footer div', () => {
    const table = shallow(
      <TableFooter />);
    expect(table.find('.table-footer').exists()).toEqual(true);
  });
});
