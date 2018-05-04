import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Row from '../layout/Row';

import SearchableDropdownBase from './SearchableDropdownBase';
import DropdownItem from './DropdownItem';
import Button from '../misc/Button';

/**
 * A multi select filter dropdown with search ability
 */
export default class FilterDropdown extends PureComponent {
  static defaultProps = {
    className: '',
    defaultEmptyText: 'No filter options found',
  }

  static propTypes = {
    /** Name of item selected from Drop down */
    name: PropTypes.string.isRequired,
    /** Optional class names for the component */
    className: PropTypes.string,
    defaultEmptyText: PropTypes.string,
  }


  render() {
    const endComponent = ({ hasSelection, triggerChange }) => {
      if (hasSelection) {
        return (
          <div className="filterdropdown-end-action v2">
            <Button onClick={() => triggerChange([])}>
              <i className="fa fa-times" /> Clear Selected
            </Button>
          </div>
        );
      }
      return null;
    };

    const filterName = this.props.name;

    const dropdownButton = (props) => {
      let classList = 'negative';
      if (props.hasSelection > 0) {
        classList += ' has-filters';
      }

      return (
        <Button float className={classList}>
          <i className="fa fa-filter" /> {filterName}
        </Button>
      );
    };

    const optionComponent = ({ text, selected, onClick }) => (
      <DropdownItem onClick={onClick}>
        <Row vAlign="center">
          <input
            type="checkbox"
            checked={selected}
            readOnly
          />
          <div>{text}</div>
        </Row>
      </DropdownItem>
    );

    return (
      <SearchableDropdownBase
        {...this.props}
        className={`filter-dropdown v2 ${this.props.className}`}
        dropdownToggleComponent={dropdownButton}
        closeOnSelect={false}
        component={optionComponent}
        endComponent={endComponent}
        multiSelect
      />
    );
  }
}
