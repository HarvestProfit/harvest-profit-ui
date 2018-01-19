import React from 'react';
import { shallow } from 'enzyme';
import { InputTextArea } from '../../src/index';

describe('<InputTextArea />', () => {
  it('should render a textarea with the value of "hello" using defaults', () => {
    const input = shallow(
      <InputTextArea
        value="world"
        onChange={() => {}}
      />);
    expect(input.props().value).toEqual('world');
  });

  it('should let you change the value', () => {
    const onChange = jest.fn();
    const input = shallow(
      <InputTextArea
        value="hello"
        onChange={onChange}
      />);

    input.simulate('change', { target: { value: '123test' } });
    expect(onChange.mock.calls[0][0]).toEqual('123test');
  });
});
