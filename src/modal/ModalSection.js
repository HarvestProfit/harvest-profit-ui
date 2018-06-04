import React from 'react';
import PropTypes from 'prop-types';

function styleClasses(props) {
  const classList = [];
  if (props.main) {
    classList.push('main-section');
  }
  if (props.subsection) {
    classList.push('sub-section');
  }

  if (props.colored) {
    classList.push('colored');
  }
  return classList.join(' ');
}

/**
 * Renders a page divider with an optional name.
 */
const ModalSection = props => (
  <div className={`modal-section v2 ${styleClasses(props)} ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

ModalSection.propTypes = {
  /** Additional class names to add to the section */
  className: PropTypes.string,
  /** Optional name for the section */
  style: PropTypes.shape({}),
  /** The contents of the modal */
  children: PropTypes.node,
  /** Show a main section */
  main: PropTypes.bool,
  /** Show a subsection */
  subsection: PropTypes.bool,
  /** Color the subsection */
  colored: PropTypes.bool,
};

ModalSection.defaultProps = {
  className: '',
  style: {},
  children: null,
  main: false,
  subsection: false,
  colored: false,
};

export default ModalSection;
