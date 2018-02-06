import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a panel.
 */
const Panel = props => (
  <div className={`panel v2 ${props.className}`} style={props.style}>
    <div>
      {props.children}
    </div>
  </div>
);

Panel.propTypes = {
  /** Additional class names to add to the panel */
  className: PropTypes.string,
  /** Contents for the panel */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

Panel.defaultProps = {
  className: '',
  children: '',
  style: {},
};

export default Panel;
