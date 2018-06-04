import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchableDropdownBase from './SearchableDropdownBase';
import Button from '../misc/Button';


/**
 * Creates a searchable list allowing for quick searching in large dropdown lists
 */
export default class SearchableDropdownList extends PureComponent {
  static defaultProps = {
    placeholder: 'Select',
    defaultEmptyText: 'No options found',
    buttonColor: false,
    buttonPrimary: false,
    buttonDanger: false,
    buttonFloat: false,
    value: null,
    component: false,
    endComponent: false,
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
    /** If the button should be colored (see Button) */
    buttonColor: PropTypes.bool,
    /** If the button is a primary button (see Button) */
    buttonPrimary: PropTypes.bool,
    /** If the button is a danger button (see Button) */
    buttonDanger: PropTypes.bool,
    /** If the button should be floated (see Button) */
    buttonFloat: PropTypes.bool,
  }

  render() {
    const dropdownButton = () => (
      <Button
        color={this.props.buttonColor}
        primary={this.props.buttonPrimary}
        danger={this.props.buttonDanger}
        float={this.props.buttonFloat}
      >
        {this.props.placeholder}
      </Button>
    );

    return (
      <SearchableDropdownBase
        {...this.props}
        placeholder={this.props.placeholder}
        dropdownToggleComponent={dropdownButton}
        closeOnSelect
      />
    );
  }
}
