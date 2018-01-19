import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * Renders a simple switch. Basically, a glorified checkbox.
 */
export default class Switch extends PureComponent {
  static defaultProps = {
    className: '',
    id: '',
    style: false,
  }

  static propTypes = {
    /** Optional class if you want to add your own styles */
    className: PropTypes.string,
    /** Optional ID for a label component */
    id: PropTypes.string,
    /** If the button/toggle is clicked */
    onClick: PropTypes.func.isRequired,
    /** The current value (is it checked?) */
    value: PropTypes.bool.isRequired,
    /** Styles to apply to the input. Boolean will not render default. */
    style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }

  render() {
    const {
      className,
      id,
      onClick,
      value,
      style,
    } = this.props;

    /* eslint-disable */
    return (
      <div className={`switch ${className}`} onClick={onClick} style={style ? style : {}}>
        <span className={value ? 'slider on' : 'slider'} />
        <input className="switch-screen-reader" id={id} onClick={onClick} type="checkbox" checked={value} />
      </div>
    );
    /* eslint-enable */
  }
}
