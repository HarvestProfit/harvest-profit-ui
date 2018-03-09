import React from 'react';
import { shallow } from 'enzyme';
import { SearchableDropdownList } from '../../src/index';

const options = [
  'value 1',
  'value 2',
];

describe('<SearchableList />', () => {
  it('should render a searchable list', () => {
    const onChange = jest.fn();
    const dropdown = shallow(
      <SearchableDropdownList
        onChange={onChange}
        values={options}
      />,
    );
    expect(dropdown.find('div').exists()).toEqual(true);
  });
});
