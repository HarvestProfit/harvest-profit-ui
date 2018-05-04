import React from 'react';
import PropTypes from 'prop-types';

const alignClass = align => `${align}-aligned`;
const sizeClass = size => `${size}-size`;

/**
 * Renders a table switcher component
 */
const TabSwitcher = props => (
  <div className={`tab-switcher v2 ${props.className} ${alignClass(props.align)} ${sizeClass(props.size)}`} style={props.style}>
    {props.children}
  </div>
);

TabSwitcher.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for switcher */
  children: PropTypes.node,
  style: PropTypes.shape({}),
  align: PropTypes.oneOf(['right', 'left', 'center']),
  size: PropTypes.oneOf(['large', 'small', 'medium']),
};

TabSwitcher.defaultProps = {
  className: '',
  children: '',
  style: {},
  align: 'left',
  size: 'medium',
};

export default TabSwitcher;
