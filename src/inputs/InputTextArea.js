import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a text area. This is a **controlled** component, so you will need
 * handle input changes and values elsewhere in your application. See the [docs
 * on controlled/uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
 */
export default class InputTextArea extends Component {
  static defaultProps = {
    value: '',
    className: '',
    id: false,
    onChange: () => {},
    placeholder: '',
    style: false,
  }

  static propTypes = {
    /** The value supplied to the field. */
    value: PropTypes.string,
    /** Option class names applied to the input */
    className: PropTypes.string,
    /** An ID to use with a label. Doesn't render if boolean. */
    id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Gets called whenever the user types.
     *
     * @param {string} value The new value
     */
    onChange: PropTypes.func,
    /** Placeholder value before any input exists */
    placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Styles to apply to the input. Boolean will not render default. */
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    return this.props.onChange(newValue);
  }

  render() {
    return (
      <textarea
        className={this.props.className}
        value={this.props.value}
        id={this.props.id ? this.props.id : ''}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        style={this.props.style ? this.props.style : {}}
      />
    );
  }
}
