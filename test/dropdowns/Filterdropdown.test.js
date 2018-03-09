import React from 'react';
import { shallow } from 'enzyme';
import { FilterDropdown } from '../../src/index';

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

describe('<FilterDropdown />', () => {
  describe('provides the ability to control the selected options', () => {
    it('should set the selected options with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <FilterDropdown
          onChange={changeFunc}
          values={objectValues}
          value={[1]}
          name="Filter"
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual([1, 2]);
    });

    it('should set the selected options with string values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <FilterDropdown
          onChange={changeFunc}
          values={stringValues}
          value={['first names']}
          name="Filter"
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual(['first names', 'last names']);
    });
  });

  describe('provides the ability to select options', () => {
    it('should select the first option with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <FilterDropdown
          onChange={changeFunc}
          values={objectValues}
          value={[]}
          name="Filter"
        />,
      );

      filter.setState({
        search: 'first',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual([1]);
    });

    it('should select the first option with string values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <FilterDropdown
          onChange={changeFunc}
          values={stringValues}
          value={[]}
          name="Filter"
        />,
      );

      filter.setState({
        search: 'first',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual(['first names']);
    });
  });

  describe('provides the ability to search options', () => {
    it('should filter to "first" with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <FilterDropdown
          onChange={changeFunc}
          values={objectValues}
          value={[]}
          name="Filter"
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
        <FilterDropdown
          onChange={changeFunc}
          values={stringValues}
          value={[]}
          name="Filter"
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
