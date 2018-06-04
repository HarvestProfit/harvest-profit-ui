import React from 'react';
import { shallow } from 'enzyme';
import { LabelValue } from '../../src/index';

describe('<LabelValue />', () => {
  it('should render a horizontal label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
      />);
    expect(labelValue.hasClass('horizontal')).toEqual(true);
    expect(labelValue.find('h4').at(0).text()).toEqual('label');
    expect(labelValue.find('h4').at(1).text()).toEqual('value');
  });

  it('should render a vertical label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
        stacked
      />);
    expect(labelValue.hasClass('vertical')).toEqual(true);
    expect(labelValue.find('h4').at(1).text()).toEqual('label');
    expect(labelValue.find('h4').at(0).text()).toEqual('value');
  });

  it('should render a horizontal swapped label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
        swapped
      />);
    expect(labelValue.hasClass('horizontal')).toEqual(true);
    expect(labelValue.find('h4').at(1).text()).toEqual('label');
    expect(labelValue.find('h4').at(0).text()).toEqual('value');
  });

  it('should render a vertical swapped label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
        stacked
        swapped
      />);
    expect(labelValue.hasClass('vertical')).toEqual(true);
    expect(labelValue.find('h4').at(0).text()).toEqual('label');
    expect(labelValue.find('h4').at(1).text()).toEqual('value');
  });

  it('should render an important label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
        important
      />);
    expect(labelValue.hasClass('important')).toEqual(true);
  });

  it('should render an unimportant label value', () => {
    const labelValue = shallow(
      <LabelValue
        label="label"
        value="value"
        unimportant
      />);
    expect(labelValue.hasClass('unimportant')).toEqual(true);
  });
});
