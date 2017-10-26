import React from 'react';
import { shallow } from 'enzyme';
import TableContainer from '../../src/tables/TableContainer';

describe('<TableContainer />', () => {
  it('should render a div with the class "table-container"', () => {
    const tableContainer = shallow(
      <TableContainer>
        <table />
      </TableContainer>);
    expect(tableContainer.find('div').exists()).toEqual(true);
  });
});
