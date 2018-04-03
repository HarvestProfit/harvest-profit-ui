import React from 'react';
import PropTypes from 'prop-types';
import Button from '../misc/Button';

const EditableDropdownOption = (props) => {
  let action = null;
  let selectedClass = '';
  if (props.selected) {
    selectedClass = 'selected';
  }
  if (props.value !== null) {
    action = (
      <Button
        className="editable-dropdown-option-action"
        title={props.actionTitle}
        onClick={props.onEditClick}
      >
        <i className="fa fa-pencil" />
      </Button>
    );
  }

  return (
    <div className={`editable-dropdown-option v2 ${selectedClass}`}>
      <Button onClick={props.onClick}>{props.text}</Button>
      {action}
    </div>
  );
};

EditableDropdownOption.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  actionTitle: PropTypes.string,
};

EditableDropdownOption.defaultProps = {
  value: null,
  selected: false,
  actionTitle: null,
};

export default EditableDropdownOption;
