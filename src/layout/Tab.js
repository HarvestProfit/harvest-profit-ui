import PropTypes from 'prop-types';
import React from 'react';

const Tab = (props, context) => {
  const {
    className,
    tabId,
    tag: Tag,
    ...attributes
  } = props;

  const {
    activeTab,
  } = context;

  let tagClass = 'tab';

  if (activeTab === tabId) {
    tagClass = `${tagClass} active`;
  }

  if (className) {
    tagClass = `${tagClass} ${className}`;
  }

  return (
    <Tag className={tagClass} {...attributes} />
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  tabId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tag: PropTypes.string,
};

Tab.contextTypes = {
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Tab.defaultProps = {
  className: '',
  tag: 'div',
};

export default Tab;
