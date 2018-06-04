import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchableDropdownBase from '../../src/dropdowns/SearchableDropdownBase';

const objectValues = [
  {
    id: 1,
    text: 'First Names',
    group: 'one',
  },
  {
    id: 2,
    text: 'Last Names',
    group: 'one',
  },
  {
    id: 3,
    text: 'Family',
    group: 'two',
  },
  {
    id: 4,
    text: 'Friends',
    group: 'two',
  },
];

const groups = [
  {
    key: 'one',
    name: 'One',
  },
  {
    key: 'two',
    name: 'Two',
  },
  {
    key: 'three',
    name: 'Three',
  },
];

const stringValues = ['First Names', 'Last Names', 'Family', 'Friends'];

describe('<SearchableDropdownBase />', () => {
  describe('provides the ability to control the selected option', () => {
    it('should set the selected option with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
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
        <SearchableDropdownBase
          onChange={changeFunc}
          values={stringValues}
          value=""
          name="Filter"
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual('Last Names');
    });

    it('should set the selected option with object values and multi select', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value={[]}
          multiSelect
        />,
      );

      filter.setState({
        search: 'last',
      });


      filter.find('DropdownItem').simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual([2]);
      expect(changeFunc.mock.calls[0][1]).toEqual(objectValues[1]);
    });
  });

  describe('provides the ability to select an option', () => {
    it('should select the first option with object values', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value=""
          name="Filter"
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
        <SearchableDropdownBase
          onChange={changeFunc}
          values={stringValues}
          value=""
          name="Filter"
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
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value=""
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
        <SearchableDropdownBase
          onChange={changeFunc}
          values={stringValues}
          value=""
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

  describe('provides the ability to group options', () => {
    it('should show options in groups', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value=""
          groups={groups}
        />,
      );

      filter.setState({
        search: 'first',
      });

      const options = filter.find('DropdownItem');
      const categories = filter.find('.group-title');
      expect(options.length).toEqual(1);
      expect(categories.length).toEqual(3);
    });

    it('should show options in groups hiding empty groups', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value=""
          groups={groups}
          hideEmptyGroups
        />,
      );

      filter.setState({
        search: 'first',
      });

      const options = filter.find('DropdownItem');
      const categories = filter.find('.group-title');
      expect(options.length).toEqual(1);
      expect(categories.length).toEqual(1);
    });
  });

  describe('provides the ability to select none and clear the value', () => {
    it('should clear the value', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value={1}
          allowEmpty
        />,
      );

      const clear = filter.find('.select-none');
      clear.simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual(null);
    });

    it('should clear the value with multi select', () => {
      const changeFunc = jest.fn();
      const filter = shallow(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value={[1]}
          allowEmpty
          multiSelect
        />,
      );

      const clear = filter.find('.select-none');
      clear.simulate('click');
      expect(changeFunc.mock.calls.length).toEqual(1);
      expect(changeFunc.mock.calls[0][0]).toEqual([]);
    });
  });

  describe('provides the ability to set a placeholder', () => {
    it('should render a placeholder', () => {
      const changeFunc = jest.fn();
      const filter = mount(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value=""
          placeholder="Search"
        />,
      );

      const placeholder = filter.find('.no-selection');
      expect(placeholder.at(0).text()).toEqual('Search');
    });

    it('should not render a placeholder', () => {
      const changeFunc = jest.fn();
      const filter = mount(
        <SearchableDropdownBase
          onChange={changeFunc}
          values={objectValues}
          value={1}
          placeholder="Search"
        />,
      );

      const placeholder = filter.find('.no-selection');
      expect(placeholder.exists()).toEqual(false);
    });
  });
});
