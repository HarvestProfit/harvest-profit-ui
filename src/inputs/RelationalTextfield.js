import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Row from '../layout/Row';
import Column from '../layout/Column';
import DropdownItem from '../dropdowns/DropdownItem';
import InputInternal from './InputInternal';

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
export default class RelationalTextfield extends PureComponent {
  static defaultProps = {
    placeholder: '',
    icon: null,
    className: '',
    value: undefined,
    id: '',
  }

  static propTypes = {
    /**
     * Gets called whenever the user selects an option
     *
     * @param {string|number|boolean} value The new value
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
    ]),
    /** Placeholder text */
    placeholder: PropTypes.string,
    /** Optional class names for the component */
    className: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
      focused: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.formatSearchValue = this.formatSearchValue.bind(this);
    this.setOnFocus = this.setOnFocus.bind(this);
  }

  getOptionForValue(value) {
    return _.find(this.props.values, v => _.toString(optionValue(v)) === _.toString(value));
  }

  getOptionForText(text) {
    return _.find(this.props.values, v =>
      _.toString(optionText(v)).trim().toLowerCase() === _.toString(text).trim().toLowerCase());
  }

  setOnFocus() {
    this.setState({
      focused: true,
    });
  }

  handleClick(itemValue) {
    const option = this.getOptionForValue(itemValue);
    if (option) {
      this.handleSearch(optionText(option), true);
    }
  }

  formatSearchValue() {
    const option = this.getOptionForText(this.state.search);
    let newSearch = this.state.search;
    if (option) {
      newSearch = optionText(option);
    }

    this.setState({
      search: newSearch,
      focused: false,
    });
  }

  handleSearch(string, closeMenu = false) {
    const option = this.getOptionForText(string);
    let value = string;
    if (option) {
      value = optionValue(option);
    }
    if (typeof value === 'string' && value.trim().length < 1) {
      value = null;
    }
    this.props.onChange(value);

    let menuOpen = this.state.open;

    if (string === '') {
      menuOpen = false;
    } else if (!this.state.open) {
      menuOpen = true;
    }

    if (closeMenu) {
      menuOpen = false;
    }

    this.setState({
      search: string,
      open: menuOpen,
    });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  optionMatchesSearch(option) {
    return optionText(option).trim().toLowerCase() === this.state.search.trim().toLowerCase();
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

    if (results.length < 1) {
      return null;
    } else if (results.length === 1 && this.optionMatchesSearch(results[0])) {
      return null;
    }

    const options = results.map((result) => {
      let isSelected = false;
      const filterValue = optionValue(result);
      const filterText = optionText(result);
      if (this.props.value !== undefined && this.props.value === filterValue) isSelected = true;

      return this.renderOption(filterText, filterValue, isSelected);
    });

    return (
      <DropdownMenu className="dropdown-menu v2 center" flip={false}>
        {options}
      </DropdownMenu>
    );
  }

  renderOption(text, value, selected) {
    let selectedClass = '';
    if (selected) selectedClass = 'selected';
    return (
      <DropdownItem
        key={value}
        toggle={false}
        onClick={() => this.handleClick(value)}
        className={selectedClass}
      >
        {text}
      </DropdownItem>
    );
  }

  render() {
    let option = this.getOptionForValue(this.props.value);
    let relational = true;
    if (!option) {
      relational = false;
      option = this.state.search;
    } else if (this.optionMatchesSearch(option)) {
      option = this.state.search;
    }


    const inputString = optionText(option);
    let icon = null;
    if (relational && this.props.icon) {
      icon = (<i className={`fa fa-${this.props.icon}`} />);
    }

    let inputClassName = '';
    if (this.state.focused) {
      inputClassName = 'focus';
    }
    return (
      <div style={{ display: 'inline-block', minWidth: '10rem' }} className={`relational-textfield v2 ${this.props.className}`}>
        <Dropdown
          isOpen={this.state.open}
          toggle={() => this.toggleOpen()}
        >
          <Column>
            <Row vAlign="center" className={`relational-textfield-input ${inputClassName}`}>
              {icon}
              <InputInternal type="text" onFocus={this.setOnFocus} onBlur={this.formatSearchValue} autoComplete="off" id={this.props.id} value={inputString} onChange={e => this.handleSearch(e.target.value)} placeholder={this.props.placeholder} />
            </Row>
            <DropdownToggle
              tag="div"
              className="relational-textfield-dropdown-toggle"
              onClick={() => {}}
            >&nbsp;
            </DropdownToggle>
          </Column>
          {this.renderSearchResults()}
        </Dropdown>
      </div>
    );
  }
}
