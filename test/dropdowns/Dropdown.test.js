import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../../src/index';

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
    expect(onChange.mock.calls[0][0]).toEqual(options[1]);
  });

  it('should handle changes when an object with keys is given', () => {
    const onChange = jest.fn();
    const dropdown = shallow(
      <Dropdown
        onChange={onChange}
        selected={2}
        values={optionsWithKeys}
      />,
    );
    dropdown.simulate('change', { target: { value: optionsWithKeys[1].id.toString() } });
    expect(onChange.mock.calls.length).toEqual(1);
    expect(onChange.mock.calls[0][0]).toEqual(optionsWithKeys[1].id);
    expect(onChange.mock.calls[0][1]).toEqual(optionsWithKeys[1]);
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

  describe('placeholder and empty option', () => {
    it('should render a placeholder', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={optionsWithKeys}
          placeholder
        />,
      );
      expect(dropdown.find('option').first().props().value).toEqual('null');
    });

    it('should not render a placeholder', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={optionsWithKeys}
          selected={1}
          placeholder
        />,
      );
      expect(dropdown.find('option').first().props().value).not.toEqual('null');
    });

    it('should render a placeholder without an empty option', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={optionsWithKeys}
          placeholder
          allowEmpty
        />,
      );
      expect(dropdown.find('option').first().props().value).toEqual('null');
      expect(dropdown.find('option').length).toEqual(3);
    });

    it('should render an empty option', () => {
      const onChange = jest.fn();
      const dropdown = shallow(
        <Dropdown
          onChange={onChange}
          values={optionsWithKeys}
          selected={1}
          placeholder
          allowEmpty
        />,
      );
      expect(dropdown.find('option').first().props().value).toEqual('null');
      expect(dropdown.find('option').length).toEqual(3);
    });
  });
});
