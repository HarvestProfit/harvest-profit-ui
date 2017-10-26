import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../../src/forms/Switch';

describe('<Switch />', () => {
  it('should render a checked switch', () => {
    const input = shallow(
      <Switch
        value
        onClick={() => {}}
      />);
    expect(input.find('input').props().checked).toEqual(true);
  });

  it('should render an unchecked switch', () => {
    const input = shallow(
      <Switch
        value={false}
        onClick={() => {}}
      />);
    expect(input.find('input').props().checked).toEqual(false);
  });

  it('should render an unchecked switch', () => {
    const onClick = jest.fn();
    const input = shallow(
      <Switch
        value={false}
        onClick={onClick}
      />);
    input.find('input').first().simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
