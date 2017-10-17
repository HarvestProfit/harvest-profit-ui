import React from 'react';
import { shallow } from 'enzyme';
import InputString from '../src/InputString';

describe('<InputNumeric />', () => {
  it('should render an input with the value of "hello" using defaults', () => {
    const input = shallow(
      <InputString
        defaultValue="world"
      />);
    expect(input.props().value).toEqual('world');
  });

  it('should use a prefix when specified, like "hello "', () => {
    const input = shallow(
      <InputString
        defaultValue="world"
        prefix="hello "
      />);
    expect(input.props().value).toEqual('hello world');
  });

  it('should use a suffix when specified, like " world"', () => {
    const input = shallow(
      <InputString
        defaultValue="hello"
        suffix=" world"
      />);
    expect(input.props().value).toEqual('hello world');
  });

  it('should let you change the value', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputString
        defaultValue="hello"
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '123test' } });
    expect(onChange.mock.calls[0][0]).toEqual('123test');
  });

  it('should add prefix and suffix after leaving focus', () => {
    const input = shallow(
      <InputString
        defaultValue="cruel"
        prefix="hello "
        suffix=" world"
      />);
    input.simulate('focus');
    expect(input.props().value).toEqual('cruel');
    input.simulate('blur');
    expect(input.props().value).toEqual('hello cruel world');
  });
});
