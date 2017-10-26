import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/tables/Table';

describe('<Table />', () => {
  it('should render a table', () => {
    const table = shallow(
      <Table />);
    expect(table.find('table').exists()).toEqual(true);
  });
});
