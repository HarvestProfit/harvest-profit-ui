import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a panel.
 */
const Panel = props => (
  <div className={`panel v2 ${props.className}`}>
    {props.children}
  </div>
);

Panel.propTypes = {
  /** Additional class names to add to the panel */
  className: PropTypes.string,
  /** Contents for the panel */
  children: PropTypes.node,
};

Panel.defaultProps = {
  className: '',
  children: '',
};

export default Panel;
