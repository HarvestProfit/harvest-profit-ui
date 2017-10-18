import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../src/forms/Dropdown';

const options = [
  'value 1',
  'value 2',
];

const optionsWithKeys = [
  { id: 1, text: 'value 1' },
  { id: 2, text: 'value 2' },
];

describe('<Dropdown />', () => {
  it('should render a dropdown', () => {
    const onChange = jest.fn();
    const dropdown = shallow(
      <Dropdown
        onChange={onChange}
        values={options}
      />,
    );
    expect(dropdown.find('select').exists()).toEqual(true);
  });
  it('should handle changes', () => {
    const onChange = jest.fn();
    const dropdown = shallow(
      <Dropdown
        onChange={onChange}
        values={options}
      />,
    );
    dropdown.simulate('change', { target: { value: options[1] } });
    expect(onChange.mock.calls.length).toEqual(1);
  });
  describe('values without ids', () => {
    it('should render values using the value text', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={options}
        />,
      );
      expect(dropdown.find('option').first().props().value).toEqual(options[0]);
    });
  });
  describe('values with ids', () => {
    it('should render values using the value id', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={optionsWithKeys}
        />,
      );
      expect(dropdown.find('option').first().props().value).toEqual(optionsWithKeys[0].id);
    });
  });
});
