import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InputString from './InputString';

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
 */
export default class SearchableDropdown extends PureComponent {
  static defaultProps = {
    placeholder: false,
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
    /** Placeholder text */
    placeholder: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
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
        const resultText = `${optionText(result)}`;
        if (resultText.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      });
    }
    return results.map(result => (
      <DropdownItem
        key={optionValue(result)}
        onClick={() => this.handleClick(optionValue(result))}
      >
        {optionText(result)}
      </DropdownItem>
    ));
  }

  render() {
    const filteredSearchResults = this.renderSearchResults();
    return (
      <div style={{ display: 'inline-block', minWidth: '10rem' }}>
        <Dropdown
          isOpen={this.state.open}
          toggle={() => this.toggleOpen()}
        >
          <DropdownToggle
            tag="button"
            type="button"
          >
            {this.props.placeholder || 'Select'}
          </DropdownToggle>
          <DropdownMenu className="center" flip={false}>
            <InputString
              defaultValue={this.state.search}
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
