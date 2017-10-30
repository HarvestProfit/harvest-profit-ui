import PropTypes from 'prop-types';
import React from 'react';

const Tabs = (props) => {
  const {
    activeTab,
    className,
    tag: Tag,
    ...attributes
  } = props;

  return (
    <Tag activeTab={activeTab} className={`tabs ${className}`} {...attributes} />
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Tabs.defaultProps = {
  className: '',
  tag: 'div',
};

export default Tabs;
