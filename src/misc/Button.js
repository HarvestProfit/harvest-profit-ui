import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: 'primary',
  disabled: false,
  tag: 'button',
  title: '',
  color: false,
  float: false,
  primary: false,
  danger: false,
  mono: false,
  onClick: () => {},
};

const propTypes = {
  /** The class name the component should use. Available options are: primary */
  className: PropTypes.string,
  /** Is the button disabled. */
  disabled: PropTypes.bool,
  /** The onClick Handler. */
  onClick: PropTypes.func,
  /** The tag type to be used for the button. */
  tag: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.bool,
  float: PropTypes.bool,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  mono: PropTypes.bool,
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
      title,
      tag: Tag,
      children,
      color,
      primary,
      float,
      danger,
      mono,
    } = this.props;

    const styleClassNames = [];
    if (color) { styleClassNames.push('color'); }
    if (primary) { styleClassNames.push('primary'); }
    if (float) { styleClassNames.push('float'); }
    if (danger) { styleClassNames.push('danger'); }
    if (mono) { styleClassNames.push('mono'); }
    if (disabled) { styleClassNames.push('disabled'); }

    return (
      <Tag
        className={`button v2 ${styleClassNames.join(' ')} ${className}`}
        disabled={disabled}
        onClick={() => onClick()}
        title={title}
      >
        {children}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
