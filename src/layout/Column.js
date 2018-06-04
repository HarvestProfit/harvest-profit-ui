import React from 'react';
import PropTypes from 'prop-types';


const verticalAlignClass = (align) => {
  if (align && align.length > 0) {
    return `v-${align}`;
  }
  return '';
};

const horizontalAlignClass = (align) => {
  if (align && align.length > 0) {
    return `h-${align}`;
  }
  return '';
};

/**
 * Renders a component to align its children in a column
 */
const Column = (props) => {
  let fillClass = '';
  if (props.fill) fillClass = 'fill';
  let spacedClass = '';
  if (props.spaced) spacedClass = 'spaced';
  return (
    <div className={`column v2 ${verticalAlignClass(props.vAlign)} ${horizontalAlignClass(props.hAlign)} ${fillClass} ${spacedClass} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

Column.propTypes = {
  /** Additional class names to add to the column */
  className: PropTypes.string,
  /** contents for column */
  children: PropTypes.node,
  /** if the children should fill the space */
  fill: PropTypes.bool,
  vAlign: PropTypes.oneOf(['center', 'bottom', 'top', 'gap', 'pad']),
  hAlign: PropTypes.oneOf(['center', 'right', 'left', 'stretch']),
  style: PropTypes.shape({}),
  spaced: PropTypes.bool,
};

Column.defaultProps = {
  className: '',
  children: '',
  fill: false,
  style: {},
  vAlign: 'top',
  hAlign: 'left',
  spaced: false,
};

export default Column;
