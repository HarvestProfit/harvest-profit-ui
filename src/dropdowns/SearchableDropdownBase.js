import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import InputString from '../inputs/InputString';
import DropdownItem from './DropdownItem';
import EmptyDropdownItem from './EmptyDropdownItem';
import Button from '../misc/Button';

/*
 * Returns the value of the option;
 */
const optionValue = (option) => {
  if (option === null || option === undefined || option.id === undefined) {
    return option;
  }
  return option.id;
};

/*
 * Returns the string text of the option;
 */
const optionText = (option) => {
  if (option === null || option === undefined || option.text === undefined) {
    return option;
  }
  return option.text;
};

/**
 * Creates a searchable dropdown allowing for quick searching in large dropdown lists
 * and selecting a value like with a normal select box
 */
export default class SearchableDropdownBase extends PureComponent {
  static defaultProps = {
    placeholder: 'Select',
    className: '',
    value: null,
    component: false,
    endComponent: false,
    defaultEmptyText: 'No options found',
    dropdownToggleComponent: false,
    closeOnSelect: true,
    multiSelect: false,
    groups: [],
    hideEmptyGroups: false,
    allowEmpty: false,
    emptyOptionText: 'None',
  }

  static propTypes = {
    /**
     * Gets called whenever the user selects an option
     *
     * @param {string|number|boolean} value The new value
     */
    onChange: PropTypes.func.isRequired,
    /**
     * An array of values available to the user. For objects, use `id` for the value and `text`
     * for display value.  Additionally, provide a `group` attribute to specify which group the
     * value belongs to.
     */
    values: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.any,
          text: PropTypes.any,
          group: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }),
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    ).isRequired,
    /** The current selected value(s) */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.any),
    ]),
    /** Placeholder text */
    placeholder: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
      PropTypes.string,
      PropTypes.node,
    ]),
    /** Optionally provide a unique component to render each option from */
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    /** Optionally provide a unique component that gets rendered at the bottom of the option menu */
    endComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    /** The text to render if no option is found in a search */
    defaultEmptyText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    /** Allow for more than one option to be selected.  Value becomes an array. */
    multiSelect: PropTypes.bool,
    /**
     * Groups the provided values into the provided groups.  `key` matches to the `group` attribute
     * on each value.  `name` is the displayed group name.  `emptyText` is the text displayed if
     * there are no options for the group.
     */
    groups: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      emptyText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    })),
    /** If a group is empty, it will not show the group in the option menu. */
    hideEmptyGroups: PropTypes.bool,
    /** Allow for the users to select `none`, clearing the value. */
    allowEmpty: PropTypes.bool,
    /** The text for the select none option. */
    emptyOptionText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** Optional class names for the component */
    className: PropTypes.string,
    /** The component used to render the button that opens the option menu */
    dropdownToggleComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    /** Closes the option menu on selection */
    closeOnSelect: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getOptionForValue(value) {
    return _.find(this.props.values, v => _.toString(optionValue(v)) === _.toString(value));
  }

  getOptionForText(text) {
    return _.find(this.props.values, v =>
      _.toString(optionText(v)).trim().toLowerCase() === _.toString(text).trim().toLowerCase());
  }

  optionValueIsSelected(value) {
    if (this.props.multiSelect) {
      return ((this.props.value || []).indexOf(value) >= 0);
    }
    return this.props.value === value;
  }

  defaultValue() {
    if (this.props.multiSelect) {
      return [];
    }

    return null;
  }

  handleClick(itemValue) {
    const option = this.getOptionForValue(itemValue);
    let selectedValue = this.defaultValue();
    if (option) {
      const value = optionValue(option);
      if (this.props.multiSelect) {
        if (itemValue === null) {
          selectedValue = [];
        } else {
          const idxOfItem = this.props.value.indexOf(value);

          if (idxOfItem >= 0) {
            selectedValue = [
              ...this.props.value.slice(0, idxOfItem),
              ...this.props.value.slice(idxOfItem + 1),
            ];
          } else {
            selectedValue = [
              ...this.props.value,
              value,
            ];
          }
        }
      } else {
        selectedValue = value;
      }
    }

    this.props.onChange(selectedValue);

    let menuIsOpen = this.state.open;
    if (this.props.closeOnSelect) {
      menuIsOpen = false;
    }

    this.setState({ open: menuIsOpen, search: '' });
  }

  handleSearch(string) {
    this.setState({ search: string });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open, search: '' });
  }

  renderSearchResults() {
    let results = this.props.values;
    if (this.state.search !== '') {
      results = results.filter((result) => {
        if (optionText(result).toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      });
    }

    const resultMapFunc = (result) => {
      const value = optionValue(result);
      const text = optionText(result);
      const isSelected = this.optionValueIsSelected(value);

      return this.renderOption(text, value, isSelected);
    };

    if (this.props.groups.length > 0) {
      return this.props.groups.map((group) => {
        let options = results
          .filter(result => result.group === group.key)
          .map(result => resultMapFunc(result));

        if (options.length < 1) {
          if (this.props.hideEmptyGroups) {
            return null;
          }
          options = (
            <EmptyDropdownItem>
              {group.emptyText || this.props.defaultEmptyText}
            </EmptyDropdownItem>
          );
        }

        return (
          <React.Fragment key={group.key}>
            <h5 className="group-title">{group.name}</h5>
            {options}
          </React.Fragment>
        );
      });
    }
    return results.map(result => resultMapFunc(result));
  }

  renderOption(text, value, selected) {
    if (this.props.component) {
      return (
        <this.props.component
          key={value}
          text={text}
          value={value}
          selected={selected}
          onClick={() => this.handleClick(value)}
        />
      );
    }

    let selectedClass = '';
    if (selected) selectedClass = 'selected';
    if (value === null) selectedClass = `${selectedClass} select-none`;
    return (
      <DropdownItem
        key={value || Math.random() * 1000}
        toggle={this.props.closeOnSelect}
        onClick={() => this.handleClick(value)}
        className={selectedClass}
      >
        {text}
      </DropdownItem>
    );
  }

  renderEndComponent(searchResults, hasSelection) {
    if (this.props.endComponent) {
      return (
        <this.props.endComponent
          hasOptions={searchResults.length > 0}
          hasSelection={hasSelection}
          toggleDropdown={this.toggleOpen}
          setSearch={this.handleSearch}
          triggerChange={this.handleClick}
        />
      );
    }
    return null;
  }

  render() {
    let filteredSearchResults = this.renderSearchResults();
    if (filteredSearchResults.length < 1) {
      filteredSearchResults = (
        <EmptyDropdownItem>{this.props.defaultEmptyText}</EmptyDropdownItem>
      );
    } else if (this.props.allowEmpty) {
      filteredSearchResults = (
        <React.Fragment>
          {this.renderOption(this.props.emptyOptionText, null, false)}
          {filteredSearchResults}
        </React.Fragment>
      );
    }

    const selectedValue = this.props.values.filter(v =>
      (this.props.value !== undefined && this.optionValueIsSelected(optionValue(v))));

    let selectedValueText;
    let hasSelection = false;
    if (selectedValue.length > 0) {
      selectedValueText = optionText(selectedValue[0]);
      hasSelection = true;
    }

    if (typeof selectedValueText === 'string' && selectedValueText.length < 1) {
      selectedValueText = this.props.placeholder;
    }

    selectedValueText = selectedValueText || this.props.placeholder;

    let DropdownToggleComponent = this.props.dropdownToggleComponent;
    if (!DropdownToggleComponent) {
      let selectionClass = 'no-selection';
      if (hasSelection) {
        selectionClass = '';
      }

      DropdownToggleComponent = props => (
        <Button className={selectionClass}>
          {props.selectedValue}
        </Button>
      );
    }

    return (
      <div style={{ display: 'inline-block' }} className={`searchable-dropdown v2 ${this.props.className}`}>
        <Dropdown
          isOpen={this.state.open}
          toggle={() => this.toggleOpen()}
        >
          <DropdownToggle tag="div" className="dropdown-toggle v2">
            <DropdownToggleComponent
              selectedValue={selectedValueText}
              hasSelection={hasSelection}
            />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu v2 center">
            <InputString
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search"
              style={{ margin: '0 .5rem', width: '90%' }}
            />
            <div className="dropdown-options">
              {filteredSearchResults}
            </div>
            {this.renderEndComponent(filteredSearchResults, hasSelection)}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
