import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a panel title
 */
const PanelTitle = props => (
  <div className={`title ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

PanelTitle.propTypes = {
  /** Additional class names to add to the panel title */
  className: PropTypes.string,
  /** Contents for the panel title */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

PanelTitle.defaultProps = {
  className: '',
  children: '',
  style: {},
};

export default PanelTitle;
