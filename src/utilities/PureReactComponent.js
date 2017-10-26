import { PureComponent } from 'react';

/**
 * Wraps a React function as a PureComponent
 *
 * @see {@link InputInternal} for an example of how to use
 * @param {Function} func The React function to Wraps
 * @return {Function} The wrapped component
 */
export default function PureReactComponent(func) {
  class PureComponentWrap extends PureComponent {
    render() {
      return func(this.props, this.context);
    }
  }
  return PureComponentWrap;
}
