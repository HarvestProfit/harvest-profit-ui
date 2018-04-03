import React from 'react';
import { mount } from 'enzyme';
import { SearchableDropdownList } from '../../src';

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

describe('<SearchableDropdownList />', () => {
  it('should render', () => {
    const changeFunc = jest.fn();
    const dd = mount(
      <SearchableDropdownList
        onChange={changeFunc}
        values={objectValues}
        value=""
      />,
    );

    expect(dd.find('SearchableDropdownBase').exists()).toEqual(true);
  });
});
