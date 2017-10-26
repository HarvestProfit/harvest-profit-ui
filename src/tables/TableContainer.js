import React from 'react';
import PropTypes from 'prop-types';
import PureReactComponent from '../utilities/PureReactComponent';

const TableContainer = PureReactComponent(props => (
  <div className="table-container">
    {...props.children}
  </div>
));

TableContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableContainer;
