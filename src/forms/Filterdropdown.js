import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import snakeCase from 'lodash.snakecase';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InputString from './InputString';
import ImmutabilityHelper from './ImmutabilityHelper';

/*
 * Returns the value of the option;
 */
const filterOptionValue = (option) => {
  if (option.value === undefined) {
    return option;
  }
  return option.value;
};

/*
 * Returns the string text of the option;
 */
const filterOptionText = (option) => {
  if (option.text === undefined) {
    return option.toString();
  }
  return option.text.toString();
};


export default class FilterDropdown extends PureComponent {
  static defaultProps = {
    placeholder: false,
  }

  static propTypes = {
    /** When dropdown item is changed */
    onChange: PropTypes.func.isRequired,
    /** Values of each item displayed */
    values: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.isRequired,
      })),
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    /** Name of item selected from Drop down */
    name: PropTypes.string.isRequired,
    /** Default values in drop down */
    placeholder: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
      selected: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  /*
   * Clears all the filtered items
   */
  clearFilters() {
    this.setState({ selected: [] });
    this.props.onChange([]);
  }

  /*
   * Updates the search string
   */
  handleSearch(string) {
    this.setState({ search: string });
  }

  /*
   * Determines if the changed item should be added to the filter list or removed.
   */
  handleFilterChange(result) {
    const value = filterOptionValue(result);
    const idxOfItem = this.state.selected.indexOf(value);
    let newSelected;

    if (idxOfItem >= 0) {
      newSelected = ImmutabilityHelper.removeItemFromArrayByIndex(this.state.selected, idxOfItem);
    } else {
      newSelected = ImmutabilityHelper.insertItemIntoArray(this.state.selected, value);
    }

    this.setState({ selected: newSelected });
    this.props.onChange(newSelected);
  }

  /*
   * Open/closes the dropdown
   */
  toggleOpen() {
    this.setState({ open: !this.state.open, search: '' });
  }

  /*
   * Returns class names to add to the primary button (used to highlight the filter icon)
   */
  buttonClasses() {
    let classList = 'negative';
    if (this.state.selected.length > 0) {
      classList += ' has-filters';
    }
    return classList;
  }

  /*
   * Renders filter options based on search results.
   */
  renderSearchResults() {
    let results = this.props.values;
    const search = this.state.search;
    if (search !== '') {
      results = results.filter((result) => {
        if (filterOptionText(result).toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      });
    }

    return results.map((result) => {
      let isChecked = false;
      const filterValue = filterOptionValue(result);
      const filterText = filterOptionText(result);
      if (this.state.selected.indexOf(filterValue) >= 0) isChecked = true;

      return (
        <DropdownItem
          key={filterValue}
          toggle={false}
          onClick={() => this.handleFilterChange(result)}
        >
          <input
            type="checkbox"
            checked={isChecked}
            readOnly
          />
          <div>{filterText}</div>
        </DropdownItem>);
    });
  }

  /*
   * Renders the clear filter button if there are any filters
   */
  renderClearFilter() {
    if (this.state.selected.length > 0) {
      return (
        <div className="clear-filters" role="button" tabIndex={-1} onClick={this.clearFilters}>
          <i className="fa fa-times" /> Clear Selected
        </div>
      );
    }
    return null;
  }

  render() {
    const filteredSearchResults = this.renderSearchResults();
    const clearFilter = this.renderClearFilter();

    return (
      <div style={{ display: 'inline-block' }} className={`filter-dropdown filter-${snakeCase(this.props.name)}`}>
        <Dropdown
          isOpen={this.state.open}
          toggle={() => this.toggleOpen()}
        >
          <DropdownToggle
            tag="button"
            type="button"
            className={this.buttonClasses()}
          >
            <i className="fa fa-filter" /> {this.props.name}
          </DropdownToggle>
          <DropdownMenu className="center" flip={false}>
            <InputString
              defaultValue={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search"
              style={{ margin: '0 .5rem', width: '90%' }}
            />
            <div className="filter-options">
              {filteredSearchResults}
            </div>
            {clearFilter}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
