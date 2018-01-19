import React from 'react';
import { shallow } from 'enzyme';
import { SearchableDropdown } from '../../src/index';

const options = [
  'value 1',
  'value 2',
];

describe('<SearchableDropdown />', () => {
  it('should render a searchable dropdown', () => {
    const onChange = jest.fn();
    const dropdown = shallow(
      <SearchableDropdown
        onChange={onChange}
        values={options}
      />,
    );
    expect(dropdown.find('div').exists()).toEqual(true);
  });
});
