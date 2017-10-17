import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: 'primary',
  disabled: false,
  tag: 'button',
};

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tag: PropTypes.string,
};

class Button extends PureComponent {
  render() {
    const {
      className,
      disabled,
      onClick,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={`button ${className}`}
        disabled={disabled}
        onClick={() => onClick()}
        {...attributes}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
