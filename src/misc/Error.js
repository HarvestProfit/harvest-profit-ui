import React from 'react';
import PropTypes from 'prop-types';
import Column from '../layout/Column';

/**
 * Renders a component to align its children in a row
 */
const Error = (props) => {
  let errorMessage = props.children;
  if (!errorMessage) {
    let errorDetails = null;
    if (props.details) {
      errorDetails = (<small className="error-details">{props.details}</small>);
    }
    errorMessage = (
      <Column>
        <p className="error-message">{props.message}</p>
        {errorDetails}
      </Column>
    );
  }

  let errorIcon = (<i className="fa fa-exclamation-triangle" />);
  if (props.hideIcon) {
    errorIcon = null;
  }

  const classList = [];
  if (props.color) { classList.push('color'); }

  return (
    <div className={`error v2 ${classList.join(' ')} ${props.className}`} style={props.style}>
      {errorIcon}
      {errorMessage}
    </div>
  );
};

Error.propTypes = {
  /** Additional class names to add to the row */
  className: PropTypes.string,
  /** contents for row */
  children: PropTypes.node,
  style: PropTypes.shape({}),
  message: PropTypes.string,
  details: PropTypes.string,
  hideIcon: PropTypes.bool,
  color: PropTypes.bool,
};

Error.defaultProps = {
  className: '',
  children: null,
  style: {},
  hideIcon: false,
  message: '',
  details: null,
  color: false,
};

export default Error;
