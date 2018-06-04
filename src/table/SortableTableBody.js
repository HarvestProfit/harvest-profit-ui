import PropTypes from 'prop-types';
import React, { Children, PureComponent } from 'react';
import { arrayMove, SortableHandle } from 'react-sortable-hoc';

import SortableTableBodyInternal from './SortableTableBodyInternal';

/**
 * Replaces `TableBody` with a sortable table body, (Also can be defined as  `TableBody.Sortable`).
 * Allows for drag and drop sorting of the table.  It will use its children as the sortable
 * items (`TableRow`) and the order is determined by the order of the children.  You will need to
 * provide a `onSortEnd({ newIndex, oldIndex})` function that you can use to change the order of
 * the children.  You can also use the `SortableTableBody.arrayMove(array, oldIndex, newIndex)`
 * function to reorder the array of data.
 *
 * By default, the entire table row will be draggable.  You can disable this with the
 * `useDragHandle` option and then providing a sort handle (`SortableTableItemHandle` -
 * also `TableItem.SortHandle`).  You can define a custom sort handle by using the
 * `SortableTableBody.createSortHandle`.
 * Example:
 * ```js
 * const Handle = SortableTableBody.createSortHandle(props => (<div>Sort</div>));
 * ```
 */
export default class SortableTableBody extends PureComponent {
  static propTypes = {
    /** Disable the drag sort ability */
    disabled: PropTypes.bool,
    /** The table rows */
    children: PropTypes.node.isRequired,
    /** On drag/sort end. returns old and new index for changing the order with. */
    onSortEnd: PropTypes.func,
    /** On drag/sort start */
    onSortStart: PropTypes.func,
    /** The class added to the body while sorting, useful to disable user-select */
    sortingBodyClassName: PropTypes.string,
    /** The classname of the React Portal created for the floating sort item */
    sortingPortalClassName: PropTypes.string,
    /** Locks which axis the row can move */
    lockAxis: PropTypes.oneOf(['x', 'y', 'xy']),
    /** Locks the floating sort item to the table container */
    lockToContainerEdges: PropTypes.bool,
    /** Use a handle like SortableTableItemHandle instead of dragging the entire row */
    useDragHandle: PropTypes.bool,
    /** Optional additional class names to apply at the table body level */
    className: PropTypes.string,
    /** Optional styles */
    style: PropTypes.shape({}),
  }

  static defaultProps = {
    disabled: false,
    onSortEnd: () => {},
    onSortStart: () => {},
    sortingBodyClassName: 'table-v2-sorting',
    sortingPortalClassName: '',
    lockAxis: 'y',
    lockToContainerEdges: true,
    useDragHandle: false,
    className: null,
    style: null,
  }

  /**
   * Move an item from oldIndex to newIndex
   * arrayMove(array, oldIndex, newIndex)
   */
  static arrayMove = arrayMove;
  static createSortHandle = SortableHandle;

  constructor(props) {
    super(props);

    this.state = {
      items: Children.toArray(this.props.children),
    };
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onSortStart = this.onSortStart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: Children.toArray(nextProps.children),
    });
  }

  onSortEnd(attrs) {
    document.body.classList.remove(this.props.sortingBodyClassName);
    this.props.onSortEnd(attrs);
  }

  onSortStart(attrs) {
    document.body.classList.add(this.props.sortingBodyClassName);
    this.props.onSortStart(attrs);
  }

  render() {
    return (
      <SortableTableBodyInternal
        tableBodyClassName={this.props.className}
        tableBodyStyle={this.props.style}
        helperClass={this.props.sortingPortalClassName}
        useDragHandle={this.props.useDragHandle}
        lockToContainerEdges={this.props.lockToContainerEdges}
        lockAxis={this.props.lockAxis}
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        onSortStart={this.onSortStart}
        disabled={this.props.disabled}
      />
    );
  }
}
