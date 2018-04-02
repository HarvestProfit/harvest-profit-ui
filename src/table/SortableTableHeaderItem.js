import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
} from 'harvest-profit-ui';

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
  sortRules: PropTypes.shape({}).isRequired,
  sortBy: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

SortableTableHeaderItem.defaultProps = {
  children: null,
};

export default SortableTableHeaderItem;
