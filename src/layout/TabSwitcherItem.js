import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a table switcher item component
 */
const TabSwitcherItem = (props) => {
  let activeClass = '';
  if (props.tab === props.value) activeClass = 'active';

  return (
    <div
      className={`tab-switcher-item ${activeClass} ${props.className}`}
      style={props.style}
      onClick={() => props.onClick(props.tab)}
    >
      {props.children}
    </div>
  );
};

TabSwitcherItem.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for switcher */
  children: PropTypes.node,
  style: PropTypes.shape({}),
  onClick: PropTypes.func.isRequired,
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

TabSwitcherItem.defaultProps = {
  className: '',
  children: '',
  style: {},
};

export default TabSwitcherItem;
