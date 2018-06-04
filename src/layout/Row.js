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
 * Renders a component to align its children in a row
 */
const Row = (props) => {
  let fillClass = '';
  if (props.fill) fillClass = 'fill';
  let wrapClass = '';
  if (props.wrap) wrapClass = 'wrap';
  let spacedClass = '';
  if (props.spaced) spacedClass = 'spaced';
  return (
    <div className={`row v2 ${verticalAlignClass(props.vAlign)} ${horizontalAlignClass(props.hAlign)} ${fillClass} ${wrapClass} ${spacedClass} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

Row.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for row */
  children: PropTypes.node,
  /** if the children should fill the space */
  fill: PropTypes.bool,
  wrap: PropTypes.bool,
  vAlign: PropTypes.oneOf(['center', 'bottom', 'top', 'stretch']),
  hAlign: PropTypes.oneOf(['center', 'right', 'left', 'gap', 'pad']),
  style: PropTypes.shape({}),
  spaced: PropTypes.bool,
};

Row.defaultProps = {
  className: '',
  children: '',
  fill: false,
  wrap: false,
  vAlign: 'top',
  hAlign: 'left',
  spaced: false,
  style: {},
};

export default Row;
