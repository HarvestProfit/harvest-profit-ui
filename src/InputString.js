import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputInternal from './InputInternal';

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
    defaultValue: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
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
