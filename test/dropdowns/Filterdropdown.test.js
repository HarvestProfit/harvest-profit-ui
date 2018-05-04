import React from 'react';
import { mount } from 'enzyme';
import { FilterDropdown } from '../../src';

const objectValues = [
  {
    id: 1,
    text: 'First Names',
  },
  {
    id: 2,
    text: 'Last Names',
  },
  {
    id: 3,
    text: 'Family',
  },
  {
    id: 4,
    text: 'Friends',
  },
];

describe('<FilterDropdown />', () => {
  it('should render', () => {
    const changeFunc = jest.fn();
    const dd = mount(
      <FilterDropdown
        onChange={changeFunc}
        values={objectValues}
        value={[1]}
        name="Filter"
      />,
    );

    expect(dd.find('SearchableDropdownBase').exists()).toEqual(true);
    dd.find('.filterdropdown-end-action .button').simulate('click');
    expect(changeFunc.mock.calls.length).toEqual(1);
    expect(changeFunc.mock.calls[0][0]).toEqual([]);
  });
});
