import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputInternal from './InputInternal';

/**
 * Renders a string input. This is a **controlled** component, so you will need
 * handle input changes and values elsewhere in your application. See the [docs
 * on controlled/uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
 */
export default class InputString extends PureComponent {
  static defaultProps = {
    defaultValue: '',
    id: false,
    onChange: () => {},
    placeholder: '',
    prefix: '',
    style: false,
    suffix: '',
  }

  static propTypes = {
    /** What is the value supplied to the field. */
    defaultValue: PropTypes.string,
    /** An ID to use with a label. Doesn't render if boolean. */
    id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Gets called whenever the user types a valid number.
     *
     * @param {string} value The new value
     */
    onChange: PropTypes.func,
    /** Placeholder value before any input exists */
    placeholder: PropTypes.string,
    /** The prefix to apply to the value on blur. */
    prefix: PropTypes.string,
    /** Styles to apply to the input. Boolean will not render default. */
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    /** The suffix to apply to the value on blur. */
    suffix: PropTypes.string,
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
    const newValue = event.target.value;
    return this.props.onChange(newValue);
  }


  render() {
    let value = this.props.defaultValue;
    if (!this.state.isFocused) {
      value = `${this.props.prefix}${value}${this.props.suffix}`;
    }

    return (
      <InputInternal
        id={this.props.id}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        placeholder={this.props.placeholder}
        style={this.props.style}
        type="text"
        value={value}
      />
    );
  }
}
