import React from 'react';
import PropTypes from 'prop-types';

const renderLabel = (name) => {
  if (name.length > 0) {
    return (<legend>{name}</legend>);
  }
  return null;
};

/**
 * Renders a page divider with an optional name.
 */
const Divider = props => (
  <fieldset className={`divider v2 ${props.className}`} style={props.style}>
    {renderLabel(props.name)}
  </fieldset>
);

Divider.propTypes = {
  /** Additional class names to add to the section */
  className: PropTypes.string,
  /** Optional name for the section */
  name: PropTypes.string,
  style: PropTypes.shape({}),
};

Divider.defaultProps = {
  className: '',
  name: '',
  style: {},
};

export default Divider;
