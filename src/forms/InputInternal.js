import React from 'react';
import PropTypes from 'prop-types';
import PureReactComponent from '../utilities/PureReactComponent';

const InputInternal = PureReactComponent(props => (
  <input
    className={`input ${props.className}`}
    value={props.value}
    id={props.id ? props.id : ''}
    onBlur={props.onBlur}
    onChange={props.onChange}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    style={props.style ? props.style : {}}
    type={props.type}
  />
));

InputInternal.defaultProps = {
  className: '',
  id: false,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  style: false,
};

InputInternal.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  type: PropTypes.string.isRequired,
};

export default InputInternal;
