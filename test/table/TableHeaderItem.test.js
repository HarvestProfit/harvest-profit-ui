import React from 'react';
import { shallow } from 'enzyme';
import TableHeaderItem from '../../src/table/TableHeaderItem';

describe('<TableHeaderItem />', () => {
  it('should render a table header item div', () => {
    const table = shallow(

      <TableHeaderItem>1</TableHeaderItem>);
    expect(table.find('div').exists()).toEqual(true);
  });

  it('should render a small table header item div', () => {
    const table = shallow(

      <TableHeaderItem size="small">1</TableHeaderItem>);
    expect(table.find('div.small').exists()).toEqual(true);
  });

  it('should render an aligned table header item div', () => {
    const table = shallow(
      <TableHeaderItem align="left">1</TableHeaderItem>);
    expect(table.find('div.left').exists()).toEqual(true);
  });

  it('should render an important table header item div', () => {
    const table = shallow(
      <TableHeaderItem important>1</TableHeaderItem>);
    expect(table.find('div.greater').exists()).toEqual(true);
  });

  it('should render an unimportant table header item div', () => {
    const table = shallow(
      <TableHeaderItem unimportant>1</TableHeaderItem>);
    expect(table.find('div.lesser').exists()).toEqual(true);
  });

  it('should render an ellipsis table header item div', () => {
    const table = shallow(
      <TableHeaderItem ellipsis>1</TableHeaderItem>);
    expect(table.find('div.ellipsis').exists()).toEqual(true);
  });

  it('should render a set width table header item div', () => {
    const table = shallow(
      <TableHeaderItem width="100px">1</TableHeaderItem>);
    expect(table.find('div').exists()).toEqual(true);
  });
});
