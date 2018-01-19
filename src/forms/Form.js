import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a form.
 */
const Form = (props) => {
  let paddingClass = '';
  if (props.padding) paddingClass = 'padding';
  return (
    <div className={`form v2 ${paddingClass} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

Form.propTypes = {
  /** Additional class names to add to the form */
  className: PropTypes.string,
  /** contents for row */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
  /** pads the form */
  padding: PropTypes.bool,
};

Form.defaultProps = {
  className: '',
  children: '',
  style: {},
  padding: false,
};

export default Form;
