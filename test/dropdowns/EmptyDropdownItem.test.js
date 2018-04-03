import React from 'react';
import { shallow } from 'enzyme';
import EmptyDropdownItem from '../../src/dropdowns/EmptyDropdownItem';

describe('<EmptyDropdownItem />', () => {
  it('should render', () => {
    const filter = shallow(
      <EmptyDropdownItem>Test</EmptyDropdownItem>,
    );

    expect(filter.find('small').exists()).toEqual(true);
  });
});
