import React from 'react';
import { mount } from 'enzyme';
import { SortableTableHeaderItem } from '../../src/index';

describe('<SortableTableHeaderItem />', () => {
  it('should render a sortable table header item span', () => {
    const clickFunc = jest.fn();
    const table = mount(
      <SortableTableHeaderItem
        sortBy="name"
        sortRules={{}}
        onClick={clickFunc}
      >
        Test
      </SortableTableHeaderItem>);
    expect(table.find('span').exists()).toEqual(true);

    table.find('span').simulate('click');
    expect(clickFunc.mock.calls.length).toEqual(1);
    expect(clickFunc.mock.calls[0][0]).toEqual('name');
  });
});
