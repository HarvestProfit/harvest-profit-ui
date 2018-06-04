import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/*
 * Returns the value of the option;
 */
const optionValue = (option) => {
  if (option === null || option === undefined || option.id === undefined) {
    return option;
  }
  return option.id;
};

/**
 * Renders a dropdown, with the specified option and other options available.
 * This is technically a **controlled** component, even though you can select a
 * different value from the dropdown.
 */
export default class Dropdown extends PureComponent {
  static defaultProps = {
    id: false,
    className: '',
    selected: null,
    placeholder: false,
    style: {},
    allowEmpty: false,
    emptyOptionText: 'None',
  }

  static propTypes = {
    /** The ID used by a label */
    id: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    /** The class name to be applied to the component */
    className: PropTypes.string,
    /**
     * Gets called whenever the user selects a value
     *
     * @param {string|number|boolean} value The new value
     * @param {string|number|Object} meta The entire new value
     */
    onChange: PropTypes.func.isRequired,
    /** The selected value */
    selected: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * An array of values available to the user.
     *
     * If passing an array of key-values,
     * use the format `[{ id: 1, text: 'label' }]`.
     *
     * Or just use a simple array ['one', 'two', 'three'].
     */
    values: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
      PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        text: PropTypes.string,
      })),
    ]).isRequired,
    /** Placeholder text */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Optional styles */
    style: PropTypes.shape({}),
    /** Allows selecting "null" */
    allowEmpty: PropTypes.bool,
    emptyOptionText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getOptionForValue(value) {
    return _.find(this.props.values, v => _.toString(optionValue(v)) === _.toString(value));
  }

  hasSelection() {
    return (this.getOptionForValue(this.props.selected) !== undefined);
  }

  handleChange(event) {
    let selectedValue = null;
    const option = this.getOptionForValue(event.target.value);
    if (option) {
      selectedValue = optionValue(option);
    }

    this.props.onChange(selectedValue, option, event);
  }

  renderPlaceholder() {
    if (!this.hasSelection(this.props.selected) && this.props.placeholder) {
      // Show placeholder option
      let { placeholder } = this.props;
      if (typeof placeholder !== 'string') {
        placeholder = '';
      }
      return (
        <option value="null" default>
          {placeholder}
        </option>
      );
    } else if (this.props.allowEmpty) {
      return (
        <option value="null">
          {this.props.emptyOptionText}
        </option>
      );
    }
    return null;
  }

  render() {
    const options = this.props.values.map((option) => {
      const value = option.id || option;
      const text = option.text || value;
      return (
        <option key={value} value={value}>
          {text}
        </option>
      );
    });

    return (
      <select
        id={this.props.id ? this.props.id : undefined}
        className={`dropdown v2 ${this.props.className}`}
        defaultValue={this.props.selected}
        onChange={this.handleChange}
        style={this.props.style}
      >
        {this.renderPlaceholder()}
        {options}
      </select>
    );
  }
}
