import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Fade } from 'reactstrap';

/**
 * Renders a modal container.  This will fade in (if supported) a modal attached to
 * the body element as well as add a class to the body node to disable scrolling.
 */
export default class Modal extends PureComponent {
  static propTypes = {
    /** Most likely the modal header, body, or footer components, though anything is supported */
    children: PropTypes.node.isRequired,
    /** If the modal is open or not */
    isOpen: PropTypes.bool,
    /** The CB to change the modal open state */
    toggle: PropTypes.func.isRequired,
    /** Sets the min height to be larger */
    large: PropTypes.bool,
    /** Sets the min height to be smaller */
    small: PropTypes.bool,
    /** Optional styles */
    style: PropTypes.shape({}),
  }

  static defaultProps = {
    isOpen: false,
    large: false,
    small: false,
    style: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      addedToDOM: props.isOpen,
    };
    this.removeFromDOM = this.removeFromDOM.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.setState({
        addedToDOM: true,
      });
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-v2-noscroll');
  }

  removeFromDOM() {
    this.setState({
      addedToDOM: false,
    });
  }

  renderModal() {
    document.body.classList.toggle('modal-v2-noscroll', this.props.isOpen);
    let modalClasses = 'modal v2';
    if (this.props.large) {
      modalClasses = `${modalClasses} large`;
    } else if (this.props.small) {
      modalClasses = `${modalClasses} small`;
    }
    return (
      <Fade
        in={this.props.isOpen}
        onExited={this.removeFromDOM}
      >
        <div className={modalClasses} style={this.props.style}>
          <div className="contents">
            {this.props.children}
          </div>
          <div className="overlay" onClick={this.props.toggle} />
        </div>
      </Fade>
    );
  }

  render() {
    if (this.state.addedToDOM) {
      return ReactDOM.createPortal(
        this.renderModal(),
        document.body,
      );
    }
    return null;
  }
}
