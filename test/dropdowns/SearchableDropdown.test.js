import React from 'react';
import { mount } from 'enzyme';
import { SearchableDropdown } from '../../src';

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

describe('<SearchableDropdown />', () => {
  it('should render', () => {
    const changeFunc = jest.fn();
    const dd = mount(
      <SearchableDropdown
        onChange={changeFunc}
        values={objectValues}
        value=""
      />,
    );

    expect(dd.find('SearchableDropdownBase').exists()).toEqual(true);
  });
});
