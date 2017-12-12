import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterDropdown from './forms/FilterDropdown';
import YearHelper from '../../utilities/YearHelper';

export default class HeaderNavigation extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        values: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.object),
          PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
      }),
    ),
    exportMethods: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }),
    ),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
      }),
    ),
  }

  static defaultProps = {
    filters: [],
    exportMethods: [],
    links: [],
  }

  /**
    Renders the body of the header nav.  Exports and filters should always be on the left.
    If both exist, then render a second line.
  */
  renderBody() {
    if (this.props.filters.length > 0 && this.props.exportMethods.length > 0) {
      return (
        <div className="body">
          <div>
            {this.renderFilters()}
          </div>
          <div>
            {this.renderExportMethods()}
            {this.renderLinks()}
          </div>
        </div>
      );
    }
    return (
      <div className="body">
        <div>
          {this.renderFilters()}
          {this.renderExportMethods()}
          {this.renderLinks()}
        </div>
      </div>
    );
  }

  /**
    Renders the list of links/buttons to add to the header nav for sub navigation
  */
  renderLinks() {
    if (this.props.links.length > 0) {
      const links = this.props.links.map((link) => {
        let icon;
        if (link.icon) {
          icon = (<i className={`fa fa-${link.icon}`} />);
        }
        return (
          <a
            key={link.name}
            className="button"
            href={link.url}
          >
            {icon} {link.name}
          </a>);
      });

      return (
        <div className="actions">
          {links}
        </div>
      );
    }

    return null;
  }

  /**
    Adds "export to" links for things like exporting to PDF
  */
  renderExportMethods() {
    if (this.props.exportMethods.length > 0) {
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
      const exportMethods = this.props.exportMethods.map(exp => (
        <li
          key={exp.name}
          onClick={exp.onClick}
        >
          <i
            className={`fa fa-${exp.icon || 'file-o'}`}
          /> {exp.name}
        </li>));
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
      return (
        <div className="exports">
          <span>Export Page as:</span>
          <ul>{exportMethods}</ul>
        </div>
      );
    }

    return null;
  }

  /**
    Renders filter dropdowns for adding multiselect filters.
  */
  renderFilters() {
    if (this.props.filters.length > 0) {
      const filters = this.props.filters.map(filter => (
        <FilterDropdown
          key={filter.name}
          onChange={filter.onChange}
          values={filter.values}
          name={filter.name}
        />
      ));

      return (
        <div className="filters-v2">
          <div>
            {filters}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    const year = YearHelper.currentYear();
    return (
      <div className="v-comp-page-header panel">
        <div className="title">
          <ul>
            <li>Year</li>
            <li><a href="_#">Archive</a></li>
            <li><a href={YearHelper.getLinkForYear(-1, year)}>{year - 1}</a></li>
            <li className="selected-year"><a href={YearHelper.getLinkForYear(0, year)}>{year}</a></li>
            <li><a href={YearHelper.getLinkForYear(1, year)}>{year + 1}</a></li>
            <li><a href={YearHelper.getLinkForYear(2, year)}>{year + 2}</a></li>
          </ul>
        </div>
        {this.renderBody()}
      </div>
    );
  }
}
