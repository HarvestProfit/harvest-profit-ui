import React from 'react';
import PropTypes from 'prop-types';

/**
 * Used to render a column item in the table body.
 */
const TableItem = (props) => {
  const classList = [props.className, props.align, props.size];
  if (props.important) classList.push('greater');
  if (props.unimportant) classList.push('lesser');
  if (props.ellipsis) classList.push('ellipsis');
  const styles = { ...props.style };
  if (props.width !== '') {
    styles.minWidth = props.width;
    styles.maxWidth = props.width;
  }
  return (
    <div className={classList.join(' ')} style={styles}>
      <span>
        {props.children}
      </span>
    </div>
  );
};

TableItem.propTypes = {
  /** Optional additional class names to apply at the table item level */
  className: PropTypes.string,
  /** Aligns all children under the item */
  align: PropTypes.oneOf(['right', 'left', 'center', 'spaced']),
  /** Sets the size of the column */
  size: PropTypes.oneOf(['', 'exsmall', 'small', 'medium', 'large']),
  /** Sets the column as important (more bold and larger text) */
  important: PropTypes.bool,
  /** Sets the column as unimportant (less bold and smaller text) */
  unimportant: PropTypes.bool,
  /** Sets text to not wrap and instead ellipsis off the screen. */
  ellipsis: PropTypes.bool,
  /** Statically set the width of a column (will not adjust widths) */
  width: PropTypes.string,
  /** Text or aditional HTML */
  children: PropTypes.node,
  /** Optional styles */
  style: PropTypes.shape({}),
};

TableItem.defaultProps = {
  className: '',
  align: 'left',
  size: '',
  important: false,
  unimportant: false,
  ellipsis: false,
  width: '',
  children: null,
  style: {},
};

export default TableItem;
