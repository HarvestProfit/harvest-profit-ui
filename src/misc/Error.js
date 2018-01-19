import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a component to align its children in a row
 */
const Error = props => (
  <div className={`error v2 ${props.className}`} style={props.style}>
    <i className="fa fa-exclamation-triangle" />
    {props.children}
  </div>
);

Error.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for row */
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

Error.defaultProps = {
  className: '',
  children: '',
  style: {},
};

export default Error;
