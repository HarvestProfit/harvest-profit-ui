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
     * Gets called whenever the user types a valid number.
     *
     * @param {string|number|boolean} value The new value
     */
    onChange: PropTypes.func.isRequired,
    /** The selected value */
    selected: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    /** An array of values available to the user */
    values: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
    this.props.onChange(newValue);
  }

  renderPlaceholder() {
    if (this.state.showPlaceholder && this.props.placeholder) {
      let { placeholder } = this.props;
      if (typeof placeholder !== 'string') {
        placeholder = '';
      }
      return (
        <option value="defaultplaceholder" default>{placeholder}
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
        className={`dropdown ${this.props.className}`}
        defaultValue={this.props.selected}
        onChange={this.handleChange}
      >
        {this.renderPlaceholder()}
        {options}
      </select>
    );
  }
}
