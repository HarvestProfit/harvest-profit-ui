import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: 'primary',
  disabled: false,
  tag: 'button',
};

const propTypes = {
  /** The class name the component should use. Available options are: primary */
  className: PropTypes.string,
  /** Is the button disabled. */
  disabled: PropTypes.bool,
  /** The onClick Handler. */
  onClick: PropTypes.func.isRequired,
  /** The tag type to be used for the button. */
  tag: PropTypes.string,
};

/**
 * Renders a button component, which can be used exactly like `<button />`.
 */
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
