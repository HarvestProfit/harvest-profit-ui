import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchableDropdownBase from './SearchableDropdownBase';
import Button from '../misc/Button';

/**
 * Creates a searchable dropdown allowing for quick searching in large dropdown lists
 * and selecting a value like with a normal select box
 */
export default class SearchableDropdown extends PureComponent {
  static defaultProps = {
    className: '',
    value: undefined,
    component: false,
    endComponent: false,
    defaultEmptyText: 'No options found',
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

    defaultEmptyText: PropTypes.string,
  }

  render() {
    const dropdownButton = props => (
      <Button onClick={props.onClick}>
        {props.selectedValue}
      </Button>
    );

    return (
      <SearchableDropdownBase
        {...this.props}
        className="toggle-select-arrows"
        dropdownToggleComponent={dropdownButton}
        closeOnSelect
      />
    );
  }
}
