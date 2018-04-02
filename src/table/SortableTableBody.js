import PropTypes from 'prop-types';
import React, { Children, PureComponent } from 'react';

import SortableTableBodyInternal from './SortableTableBodyInternal';

export default class SortableTableBody extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onSortEnd: PropTypes.func,
    onSortStart: PropTypes.func,
    sortingBodyClassName: PropTypes.string,
    sortingPortalClassName: PropTypes.string,
    lockAxis: PropTypes.string,
    lockToContainerEdges: PropTypes.bool,
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
