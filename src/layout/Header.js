import React from 'react';
import PropTypes from 'prop-types';

/**
 * This renders a header. Headers are designed to wrap around other HTML or JSX
 * components, and are very simple in scope.
 */
const Header = props => (
  <div className="header">
    {props.children}
  </div>
);

Header.propTypes = {
  /** Any HTML or JSX component */
  children: PropTypes.element.isRequired,
};

export default Header;
