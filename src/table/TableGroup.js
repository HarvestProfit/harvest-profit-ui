import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a table group used in condensing tables down to smaller screens.
 */
const TableGroup = (props) => {
  const classList = ['group', `group-${props.group}`, props.className, props.align, props.size, `grp-${props.condensedSize}`];
  return (
    <div className={classList.join(' ')} style={props.style}>
      {props.children}
    </div>
  );
};

TableGroup.propTypes = {
  /** Optional additional class names to apply at the table group level */
  className: PropTypes.string,
  /** One of 3 break point groups */
  group: PropTypes.oneOf(['1', '2', '3']),
  /** Aligns all items under the group */
  align: PropTypes.oneOf(['right', 'left', 'center']),
  /** Sets the size of the group */
  size: PropTypes.oneOf(['', 'exsmall', 'small', 'medium', 'large']),
  /** Optionally set a different size when the column is condensed */
  condensedSize: PropTypes.oneOf(['', 'exsmall', 'small', 'medium', 'large']),
  /** Either TableHeaderItems or TableItems */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableGroup.defaultProps = {
  className: '',
  group: '1',
  align: 'left',
  size: '',
  condensedSize: '',
  children: null,
  style: {},
};

export default TableGroup;
