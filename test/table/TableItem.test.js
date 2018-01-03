import React from 'react';
import { shallow } from 'enzyme';
import TableItem from '../../src/table/TableItem';

describe('<TableItem />', () => {
  it('should render a table item div', () => {
    const table = shallow(
      <TableItem>1</TableItem>);
    expect(table.find('div > span').exists()).toEqual(true);
  });

  it('should render a small table item div', () => {
    const table = shallow(
      <TableItem size="small">1</TableItem>);
    expect(table.find('div.small').exists()).toEqual(true);
  });

  it('should render an aligned table item div', () => {
    const table = shallow(
      <TableItem align="left">1</TableItem>,
    );
    expect(table.find('div.left').exists()).toEqual(true);
  });

  it('should render an important table item div', () => {
    const table = shallow(
      <TableItem important>1</TableItem>);
    expect(table.find('div.greater').exists()).toEqual(true);
  });

  it('should render an unimportant table item div', () => {
    const table = shallow(
      <TableItem unimportant>1</TableItem>);
    expect(table.find('div.lesser').exists()).toEqual(true);
  });

  it('should render an ellipsis table item div', () => {
    const table = shallow(
      <TableItem ellipsis>1</TableItem>);
    expect(table.find('div.ellipsis').exists()).toEqual(true);
  });

  it('should render a set width table item div', () => {
    const table = shallow(
      <TableItem width="100px">1</TableItem>);
    expect(table.find('div').exists()).toEqual(true);
  });
});
