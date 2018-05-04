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
  if (option.id === undefined) {
    return option;
  }
  return option.id;
};

/*
 * Returns the string text of the option;
 */
const optionText = (option) => {
  if (option.text === undefined) {
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
    value: undefined,
    component: false,
    endComponent: false,
    defaultEmptyText: 'No options found',
    dropdownToggleComponent: false,
    closeOnSelect: true,
    multiSelect: false,
  }

  static propTypes = {
    /**
     * Gets called whenever the user selects an option
     *
     * @param {string|number|boolean} value The new value
     * @param {string|number|Object} meta The entire value
     */
    onChange: PropTypes.func.isRequired,
    /** An array of values available to the user */
    values: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
    ).isRequired,
    /** The current selected values */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.any),
    ]),
    /** Placeholder text */
    placeholder: PropTypes.string,
    /** Optional class names for the component */
    className: PropTypes.string,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    endComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    dropdownToggleComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    defaultEmptyText: PropTypes.string,
    closeOnSelect: PropTypes.bool,
    multiSelect: PropTypes.bool,
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

    return undefined;
  }

  handleClick(itemValue) {
    const option = this.getOptionForValue(itemValue);
    let selectedValue = this.defaultValue();
    if (option) {
      const value = optionValue(option);
      if (this.props.multiSelect) {
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
      } else {
        selectedValue = value;
      }
    }

    this.props.onChange(selectedValue, option);

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
    return results.map((result) => {
      const value = optionValue(result);
      const text = optionText(result);
      const isSelected = this.optionValueIsSelected(value);

      return this.renderOption(text, value, isSelected);
    });
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
    return (
      <DropdownItem
        key={value}
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
      DropdownToggleComponent = props => (
        <Button>
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
