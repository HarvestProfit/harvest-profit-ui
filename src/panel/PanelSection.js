import React from 'react';
import PropTypes from 'prop-types';

function styleClasses(props) {
  const classList = [];
  if (props.important) {
    classList.push('important');
  }
  if (props.unimportant) {
    classList.push('unimportant');
  }

  if (props.colored) {
    classList.push('colored');
  }
  return classList.join(' ');
}

/**
 * Renders a page divider with an optional name.
 */
const PanelSection = props => (
  <div className={`panel-section v2 ${styleClasses(props)} ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

PanelSection.propTypes = {
  /** Additional class names to add to the section */
  className: PropTypes.string,
  /** Optional name for the section */
  style: PropTypes.shape({}),
  children: PropTypes.node,
  important: PropTypes.bool,
  unimportant: PropTypes.bool,
  colored: PropTypes.bool,
};

PanelSection.defaultProps = {
  className: '',
  style: {},
  children: null,
  important: false,
  unimportant: false,
  colored: false,
};

export default PanelSection;
