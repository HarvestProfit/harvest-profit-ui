import isFinite from 'lodash.isfinite';
import toNumber from 'lodash.tonumber';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputInternal from './InputInternal';
import numberWithCommas from './utilities/NumbersHelper';

/**
 * Renders a numeric input. This is a **controlled** component, so you will need
 * handle input changes and values elsewhere in your application. See the [docs
 * on controlled/uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
 */
export default class InputNumeric extends PureComponent {
  static defaultProps = {
    allowNegative: false,
    commaSeparator: false,
    decimalPlaces: 0,
    defaultValue: 0,
    id: false,
    onChange: () => {},
    prefix: '',
    style: { textAlign: 'right' },
  }

  static propTypes = {
    /** Can the user start a number with "-". */
    allowNegative: PropTypes.bool,
    /** Will we separate numbers with a comma, American-style, on blur. */
    commaSeparator: PropTypes.bool,
    /** How many decimal places to render the number with. */
    decimalPlaces: PropTypes.number,
    /** What is the value supplied to the field. */
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** An ID to use with a label. Doesn't render if boolean. */
    id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Gets called whenever the user types a valid number.
     *
     * @param {string} value The new value
     */
    onChange: PropTypes.func,
    /** The prefix to apply to the number on blur. */
    prefix: PropTypes.string,
    /** Styles to apply to the input. Boolean will not render default. */
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.setState({ isFocused: false });
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleChange(event) {
    let newValue = event.target.value;
    if (this.props.allowNegative) {
      newValue = newValue.replace(/[^0-9.-]/g, '');
    } else {
      newValue = newValue.replace(/[^0-9.]/g, '');
    }
    newValue = this.trimDecimalPlaces(newValue);
    if (`${newValue}` === '.') {
      newValue = `0${newValue}`;
    }
    return this.props.onChange(newValue);
  }

  trimDecimalPlaces(number) {
    let newNumber = number;
    if (this.props.decimalPlaces > 0 && /[.]/g.test(`${newNumber}`)) {
      if (`${newNumber}`.match(/\./g).length > 1) {
        const index = `${newNumber}`.lastIndexOf('.');
        newNumber = `${newNumber}`.substring(0, index);
      }
      const numberArray = `${newNumber}`.split('.');
      if (this.props.decimalPlaces < numberArray[1].length) {
        const num = numberArray[0];
        const decimal = numberArray[1].substr(0, this.props.decimalPlaces);
        newNumber = `${num}.${decimal}`;
      }
    }
    return newNumber;
  }

  render() {
    let value = this.props.defaultValue;
    if (!this.state.isFocused) {
      const checkedValue = toNumber(value);
      if (isFinite(checkedValue)) {
        value = checkedValue.toFixed(this.props.decimalPlaces);
      }
      if (this.props.commaSeparator) {
        value = numberWithCommas(value);
      }
      value = `${this.props.prefix}${value}`;
    }

    return (
      <InputInternal
        id={this.props.id}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        style={this.props.style}
        type="text"
        value={value || ''}
      />
    );
  }
}
