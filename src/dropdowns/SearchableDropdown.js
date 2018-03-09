import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InputString from '../inputs/InputString';

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
export default class SearchableDropdown extends PureComponent {
  static defaultProps = {
    placeholder: 'Select',
    className: '',
    value: undefined,
  }

  static propTypes = {
    /**
     * Gets called whenever the user selects an option
     *
     * @param {string|number|boolean} value The new value
     */
    onChange: PropTypes.func.isRequired,
    /** An array of values available to the user */
    values: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    /** The current selected values */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    /** Placeholder text */
    placeholder: PropTypes.string,
    /** Optional class names for the component */
    className: PropTypes.string,
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

  handleClick(itemValue) {
    this.props.onChange(itemValue);
    this.setState({ open: false, search: '' });
  }

  handleSearch(string) {
    this.setState({ search: string });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
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
      let selectedClass = '';
      const filterValue = optionValue(result);
      const filterText = optionText(result);
      if (this.props.value !== undefined && this.props.value === filterValue) selectedClass = 'selected';

      return (
        <DropdownItem
          key={filterValue}
          toggle={false}
          onClick={() => this.handleClick(filterValue)}
          className={selectedClass}
        >
          {filterText}
        </DropdownItem>
      );
    });
  }

  render() {
    const filteredSearchResults = this.renderSearchResults();
    const selectedValue = this.props.values.filter(v =>
      (this.props.value !== undefined && this.props.value === optionValue(v)));

    let selectedValueText;
    if (selectedValue.length > 0) {
      selectedValueText = optionText(selectedValue[0]);
    }

    if (typeof selectedValueText === 'string' && selectedValueText.length < 1) {
      selectedValueText = this.props.placeholder;
    }

    selectedValueText = selectedValueText || this.props.placeholder;
    return (
      <div style={{ display: 'inline-block', minWidth: '10rem' }} className={`searchable-dropdown v2 ${this.props.className}`}>
        <Dropdown
          isOpen={this.state.open}
          toggle={() => this.toggleOpen()}
        >
          <DropdownToggle
            tag="button"
            type="button"
          >
            {selectedValueText}
          </DropdownToggle>
          <DropdownMenu className="center" flip={false}>
            <InputString
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search"
              style={{ margin: '0 .5rem', width: '90%' }}
            />
            {filteredSearchResults}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
