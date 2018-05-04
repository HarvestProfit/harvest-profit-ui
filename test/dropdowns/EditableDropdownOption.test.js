import React from 'react';
import { shallow } from 'enzyme';
import EditableDropdownOption from '../../src/dropdown_extensions/EditableDropdownOption';

describe('<EditableDropdownOption />', () => {
  it('should render', () => {
    const filter = shallow(
      <EditableDropdownOption
        onClick={() => {}}
        onEditClick={() => {}}
        text="HEY"
      />,
    );

    expect(filter.find('Button').exists()).toEqual(true);
  });
});
