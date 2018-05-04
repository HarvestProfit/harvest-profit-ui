import React from 'react';
import PropTypes from 'prop-types';
import Button from '../misc/Button';

const DropdownEndAction = props => (
  <div className="dropdown-end-action v2">
    <Button onClick={props.onClick} title={props.actionTitle}>
      {props.text}
    </Button>
  </div>
);


DropdownEndAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  actionTitle: PropTypes.string,
};

DropdownEndAction.defaultProps = {
  actionTitle: null,
};

export default DropdownEndAction;
