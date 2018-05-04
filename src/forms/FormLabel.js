import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const paddingStyle = (pad) => {
  if (typeof pad === 'string') {
    return pad;
  }
  return '10px';
};


/**
 * Renders a form label
 */
export default class FormLabel extends PureComponent {
   static defaultProps = {
     className: '',
     children: '',
     style: {},
     for: '',
     padRight: false,
     padLeft: false,
     padBottom: false,
     padTop: false,
     align: 'left',
     autoWidth: false,
   };

   static propTypes = {
     /** Additional class names to add to the row */
     className: PropTypes.string,
     /** contents for row */
     children: PropTypes.node,
     /** Optional styles */
     style: PropTypes.shape({}),
     /** Input id to target */
     for: PropTypes.string,
     /** Add padding to the right of the label.  Bool applies a default, otherwise specify amount */
     padRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
     /** Add padding to the left of the label.  Bool applies a default, otherwise specify amount */
     padLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
     /** Add padding to the bottom of the label. Bool applies a default, otherwise specify amount */
     padBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
     /** Add padding to the top of the label.  Bool applies a default, otherwise specify amount */
     padTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
     /** Aligns the label text */
     align: PropTypes.oneOf(['right', 'left', 'center']),
     /** By default the label will be the same width as an input, this disables that */
     autoWidth: PropTypes.bool,
   };

   labelStyles() {
     const styles = {};
     if (this.props.padTop) styles.marginTop = paddingStyle(this.props.padTop);
     if (this.props.padBottom) styles.marginBottom = paddingStyle(this.props.padBottom);
     if (this.props.padRight) styles.marginRight = paddingStyle(this.props.padRight);
     if (this.props.padLeft) styles.marginLeft = paddingStyle(this.props.padLeft);
     if (this.props.align) styles.textAlign = this.props.align;
     return {
       ...this.props.style,
       ...styles,
     };
   }

   render() {
     let autoWidthClass = '';
     if (this.props.autoWidth) autoWidthClass = 'auto-width';
     return (
       <label
         htmlFor={this.props.for}
         className={`form-label ${autoWidthClass} ${this.props.className}`}
         style={this.labelStyles()}
       >
         {this.props.children}
       </label>
     );
   }
}
