import React from 'react';
import { shallow } from 'enzyme';
import { RelationalTextfield } from '../../src';

const objectValues = [
  {
    id: 1,
    text: 'First Names',
  },
  {
    id: 2,
    text: 'Last Names',
  },
  {
    id: 3,
    text: 'Family',
  },
  {
    id: 4,
    text: 'Friends',
  },
];

const stringValues = ['First Names', 'Last Names', 'Family', 'Friends'];

describe('<RelationalTextfield />', () => {
  describe('text field dictates search', () => {
    it('should set the selected option with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={objectValues}
          value=""
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual(2);
    });

    it('should set the selected option with string values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={stringValues}
          value=""
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual('Last Names');
    });
  });

  describe('provides the ability to select an option', () => {
    it('should select the first option with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={objectValues}
          value=""
        />,
      );

      filter.setState({
        search: 'first',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual(1);
    });

    it('should select the first option with string values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={stringValues}
          value=""
        />,
      );

      filter.setState({
        search: 'first',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual('First Names');
    });
  });

  describe('provides the ability to search options', () => {
    it('should filter to "first" with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={objectValues}
          value=""
        />,
      );

      filter.setState({
        search: 'first',
      });

      const options = filter.find('DropdownItem');
      expect(options.length).toEqual(1);
    });

    it('should filter to "first" with string values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <RelationalTextfield
          onChange={changeFunc}
          values={stringValues}
          value=""
        />,
      );

      filter.setState({
        search: 'first',
      });

      const options = filter.find('DropdownItem');
      expect(options.length).toEqual(1);
    });
  });
});
