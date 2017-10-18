import React from 'react';
import { shallow } from 'enzyme';
import InputInternal from '../../src/forms/InputInternal';

describe('<InputInternal />', () => {
  it('should render an input with the value of "hello"', () => {
    const input = shallow(
      <InputInternal
        type="text"
        value="hello"
      />);
    expect(input.find('input').props().value).toEqual('hello');
  });

  it('should render an input with the type of "checkbox"', () => {
    const input = shallow(
      <InputInternal
        type="checkbox"
        value="hello"
      />);
    expect(input.find('input').props().type).toEqual('checkbox');
  });

  it('should call "onChange" when the input has changed', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputInternal
        onChange={onChange}
        type="text"
        value="hello"
      />);
    input.find('input').simulate('change', { target: { value: 'test' } });
    expect(onChange.mock.calls.length).toEqual(1);
  });

  it('should do nothing when changed if "onChange" has not been supplied', () => {
    const input = shallow(
      <InputInternal
        type="text"
        value="hello"
      />);
    input.find('input').simulate('change', { target: { value: 'test' } });
    expect(input.find('input').first().props().value).toEqual('hello');
  });

  it('should call "onBlur" when the focus has moved from the input', () => {
    const onBlur = jest.fn();
    const input = shallow(
      <InputInternal
        onBlur={onBlur}
        type="text"
        value="hello"
      />);
    input.find('input').simulate('focus');
    input.find('input').simulate('blur');
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it('should do nothing on blur if "onBlur" has not been supplied', () => {
    const input = shallow(
      <InputInternal
        type="text"
        value="hello"
      />);
    input.find('input').simulate('focus');
    input.find('input').simulate('change', { target: { value: 'test' } });
    input.find('input').simulate('blur');
    expect(input.find('input').first().props().value).toEqual('hello');
  });

  it('should call "onFocus" when the input has been focused', () => {
    const onFocus = jest.fn();
    const input = shallow(
      <InputInternal
        onFocus={onFocus}
        type="text"
        value="hello"
      />);
    input.find('input').simulate('focus');
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  it('should do nothing on focus if "onFocus" has not been supplied', () => {
    const input = shallow(
      <InputInternal
        type="text"
        value="hello"
      />);
    input.find('input').simulate('focus');
    input.find('input').simulate('change', { target: { value: 'test' } });
    expect(input.find('input').first().props().value).toEqual('hello');
  });

  it('should use the styles supplied from an outside component', () => {
    const onFocus = jest.fn();
    const input = shallow(
      <InputInternal
        onFocus={onFocus}
        style={{ color: 'red' }}
        type="text"
        value="hello"
      />);
    expect(input.find('input').props().style).toEqual({ color: 'red' });
  });
});
