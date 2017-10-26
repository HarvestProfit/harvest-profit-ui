import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * Renders a simple switch. Basically, a glorified checkbox.
 */
export default class Switch extends PureComponent {
  static propTypes = {
    /** Optional class if you want to add your own styles */
    className: PropTypes.string,
    /** Optional ID for a label component */
    id: PropTypes.string,
    /** If the button/toggle is clicked */
    onClick: PropTypes.func.isRequired,
    /** The current value (is it checked?) */
    value: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    className: '',
    id: '',
  }

  render() {
    const {
      className,
      id,
      onClick,
      value,
    } = this.props;

    /* eslint-disable */
    return (
      <div className={`switch ${className}`} onClick={onClick}>
        <span className={value ? 'slider on' : 'slider'} />
        <input className="switch-screen-reader" id={id} onClick={onClick} type="checkbox" checked={value} />
      </div>
    );
    /* eslint-enable */
  }
}
