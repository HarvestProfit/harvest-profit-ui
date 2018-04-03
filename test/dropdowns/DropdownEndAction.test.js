import React from 'react';
import { shallow } from 'enzyme';
import DropdownEndAction from '../../src/dropdown_extensions/DropdownEndAction';

describe('<DropdownEndAction />', () => {
  it('should render', () => {
    const filter = shallow(
      <DropdownEndAction
        onClick={() => {}}
        text="HEY"
      />,
    );

    expect(filter.find('Button').exists()).toEqual(true);
  });
});
