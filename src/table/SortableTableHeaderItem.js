import React from 'react';
import PropTypes from 'prop-types';
import Row from '../layout/Row';

/**
 * A component that can be placed inside a `TableHeaderItem` that adds a sort up/down
 * icon that will automatically highligh the correct order based on the sort direction
 * and the given sort attribute.  It also adds an `onClick(sortBy)` event that allows
 * you to change the sort.
 */
const SortableTableHeaderItem = (props) => {
  const sortRule = props.sortRules[props.sortBy];
  const classNameList = [];
  if (sortRule) {
    classNameList.push('active');

    if (sortRule === 'desc') {
      classNameList.push('decrease');
    } else {
      classNameList.push('increase');
    }
  }

  return (
    <span onClick={() => props.onClick(props.sortBy)}>
      <Row className={`${classNameList.join(' ')} table-header-sortable-item v2`}>
        <Row>
          {props.children}
        </Row>
        <i className="fa" />
      </Row>
    </span>
  );
};

SortableTableHeaderItem.propTypes = {
  /** An object where the keys are the attributes and the values are either 'asc' or 'desc' */
  sortRules: PropTypes.shape({}).isRequired,
  /** The attribute that will be sorted with */
  sortBy: PropTypes.string.isRequired,
  /** Table header contents */
  children: PropTypes.node,
  /** Change the sort */
  onClick: PropTypes.func.isRequired,
};

SortableTableHeaderItem.defaultProps = {
  children: null,
};

export default SortableTableHeaderItem;
