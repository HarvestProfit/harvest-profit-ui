import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a dropdown, with the specified option and other options available.
 * This is technically a **controlled** component, even though you can select a
 * different value from the dropdown.
 */
export default class Dropdown extends PureComponent {
  static defaultProps = {
    id: false,
    className: '',
    selected: false,
    placeholder: false,
    style: {},
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
  }

  constructor(props) {
    super(props);
    this.state = {
      showPlaceholder: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    if (newValue !== 'defaultplaceholder') {
      this.setState({
        showPlaceholder: false,
      });
    }
    const value = this.props.values.find(v => v === newValue || v.id === newValue);
    this.props.onChange(newValue, value);
  }

  renderPlaceholder() {
    if (this.state.showPlaceholder && this.props.placeholder) {
      let { placeholder } = this.props;
      if (typeof placeholder !== 'string') {
        placeholder = '';
      }
      return (
        <option value="defaultplaceholder" default>
          {placeholder}
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
