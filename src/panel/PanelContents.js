import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the body of the panel.
 */
const PanelContents = (props) => {
  if (props.padding) {
    return (
      <div className={`content ${props.className}`} style={props.style}>
        <div className="panel-contents">
          {props.children}
        </div>
      </div>
    );
  }
  return (
    <div className={`content ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

PanelContents.propTypes = {
  /** Additional class names to add to the panel */
  className: PropTypes.string,
  /** Contents for the panel contents */
  children: PropTypes.node,
  /** Adds padding to the panel */
  padding: PropTypes.bool,
  /** Optional styles */
  style: PropTypes.shape({}),
};

PanelContents.defaultProps = {
  className: '',
  padding: false,
  children: '',
  style: {},
};

export default PanelContents;
