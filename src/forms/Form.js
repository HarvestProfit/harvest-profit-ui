import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a form.
 */
const Form = (props) => {
  const styleClasses = [];
  if (props.padding) { styleClasses.push('padding'); }
  if (props.transparent) { styleClasses.push('transparent'); }

  return (
    <div className={`form v2 ${styleClasses.join(' ')} ${props.className}`} style={props.style}>
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
  /** Removes the background color */
  transparent: PropTypes.bool,
};

Form.defaultProps = {
  className: '',
  children: '',
  style: {},
  padding: false,
  transparent: false,
};

export default Form;
