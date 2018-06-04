import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a page divider with an optional name.
 */
const PanelSpacer = props => (
  <div className={`panel-spacer v2 ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

PanelSpacer.propTypes = {
  /** Additional class names to add to the section */
  className: PropTypes.string,
  /** Optional name for the section */
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

PanelSpacer.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default PanelSpacer;
