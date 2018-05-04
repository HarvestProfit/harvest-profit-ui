import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders some text that fits in on a form.  It will have the correct size and spacing.
 */
const FormText = (props) => {
  let autoWidthClass = '';
  if (props.autoWidth) autoWidthClass = 'auto-width';
  return (
    <div className={`form-text ${props.className} ${autoWidthClass} ${props.align}`} style={props.style}>
      {props.children}
    </div>
  );
};

FormText.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for row */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
  /** Aligns the text */
  align: PropTypes.oneOf(['', 'center', 'right', 'left']),
  /** By default the text will be the same width as an input, this disables that */
  autoWidth: PropTypes.bool,
};

FormText.defaultProps = {
  className: '',
  children: '',
  style: {},
  align: '',
  autoWidth: false,
};

export default FormText;
