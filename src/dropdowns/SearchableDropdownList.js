import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchableDropdownBase from './SearchableDropdownBase';
import Button from '../misc/Button';


/**
 * Creates a searchable list allowing for quick searching in large dropdown lists
 */
export default class SearchableDropdownList extends PureComponent {
  static defaultProps = {
    placeholder: false,
    defaultEmptyText: 'No options found',
    buttonColor: false,
    buttonPrimary: false,
    buttonDanger: false,
    buttonFloat: false,
  }

  static propTypes = {
    /** Placeholder text */
    placeholder: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    defaultEmptyText: PropTypes.string,
    buttonColor: PropTypes.bool,
    buttonPrimary: PropTypes.bool,
    buttonDanger: PropTypes.bool,
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
        {this.props.placeholder || 'Select'}
      </Button>
    );

    return (
      <SearchableDropdownBase
        {...this.props}
        placeholder={this.props.placeholder || 'Select'}
        dropdownToggleComponent={dropdownButton}
        closeOnSelect
      />
    );
  }
}
