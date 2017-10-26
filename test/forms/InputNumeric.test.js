import React from 'react';
import { shallow } from 'enzyme';
import InputNumeric from '../../src/forms/InputNumeric';

describe('<InputNumeric />', () => {
  it('should render an input with the value of "123" using defaults', () => {
    const input = shallow(
      <InputNumeric
        defaultValue={123}
        onChange={() => {}}
      />);
    expect(input.props().value).toEqual('123');
  });

  it('should use decimal places when specified, like "123.00"', () => {
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={() => {}}
      />);
    expect(input.props().value).toEqual('123.00');
  });

  it('should use a prefix when specified, like "$123"', () => {
    const input = shallow(
      <InputNumeric
        defaultValue={123}
        onChange={() => {}}
        prefix="$"
      />);
    expect(input.props().value).toEqual('$123');
  });

  it('should stop you from entering letters', () => {
    const input = shallow(
      <InputNumeric
        defaultValue={123}
        onChange={() => {}}
      />);

    input.simulate('change', { target: { value: '123test' } });
    expect(input.props().value).toEqual('123');
  });

  it('should render non-numeric characters if given them', () => {
    const input = shallow(
      <InputNumeric
        defaultValue="hello"
        onChange={() => {}}
      />);

    expect(input.props().value).toEqual('hello');
  });

  it('should remove all extraneous characters on focus', () => {
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={() => {}}
        prefix="$"
      />);
    input.simulate('focus');
    expect(input.props().value).toEqual(123);
  });

  it('should add prefix and decimal places after leaving focus', () => {
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={() => {}}
        prefix="$"
      />);
    input.simulate('focus');
    expect(input.props().value).toEqual(123);
    input.simulate('blur');
    expect(input.props().value).toEqual('$123.00');
  });

  it('should add prefix, decimal places, and commas after leaving focus', () => {
    const input = shallow(
      <InputNumeric
        commaSeparator
        decimalPlaces={2}
        defaultValue={1230}
        onChange={() => {}}
        prefix="$"
      />);
    input.simulate('focus');
    expect(input.props().value).toEqual(1230);
    input.simulate('blur');
    expect(input.props().value).toEqual('$1,230.00');
  });

  it('should prevent the user from entering too many decimal places', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '123.3345' } });
    expect(onChange.mock.calls[0][0]).toEqual('123.33');
  });

  it('should prevent the user from entering too many decimal points', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '123.33.45' } });
    expect(onChange.mock.calls[0][0]).toEqual('123.33');
  });

  it('should allow you to enter a negative number', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputNumeric
        allowNegative
        decimalPlaces={2}
        defaultValue={123}
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '-123' } });
    expect(onChange.mock.calls[0][0]).toEqual('-123');
  });

  it('should add a "0" in front of a plain decimal "."', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '.' } });
    expect(onChange.mock.calls[0][0]).toEqual('0.');
  });

  it('should trigger onChange if the input is a number', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={123}
        onChange={onChange}
      />);
    input.simulate('change', { target: { value: '456' } });
    expect(onChange.mock.calls.length).toEqual(1);
  });

  it('should show a blank input when the total is 0 onFocus', () => {
    const input = shallow(
      <InputNumeric
        decimalPlaces={2}
        defaultValue={0}
        onChange={() => {}}
      />);
    input.simulate('focus');
    expect(input.props().value).toEqual('');
  });
});
