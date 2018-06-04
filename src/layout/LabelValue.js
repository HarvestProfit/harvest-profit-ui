import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Column from './Column';

function styleClasses(props) {
  const classList = [];
  if (props.important) {
    classList.push('important');
  }
  if (props.unimportant) {
    classList.push('unimportant');
  }

  if (props.stacked) {
    classList.push('vertical');
  } else {
    classList.push('horizontal');
  }

  if (props.swapped) {
    classList.push('swapped');
  }

  if (props.negative) {
    classList.push('negative');
  }
  return classList.join(' ');
}

/**
 * Renders a page divider with an optional name.
 */
const LabelValue = (props) => {
  const label = (<h4 className="label">{props.label}</h4>);
  const value = (<h4 className="value">{props.value}</h4>);
  let layout = (
    <React.Fragment>
      {label}
      {value}
    </React.Fragment>
  );
  if (props.swapped) {
    layout = (
      <React.Fragment>
        {value}
        {label}
      </React.Fragment>
    );
  }
  let data = (
    <Row vAlign="center">
      {layout}
    </Row>
  );
  if (props.stacked) {
    layout = (
      <React.Fragment>
        {value}
        {label}
      </React.Fragment>
    );
    if (props.swapped) {
      layout = (
        <React.Fragment>
          {label}
          {value}
        </React.Fragment>
      );
    }
    data = (
      <Column>
        {layout}
      </Column>
    );
  }
  return (
    <div className={`label-value v2 ${styleClasses(props)} ${props.className}`} style={props.style}>
      {data}
    </div>
  );
};

LabelValue.propTypes = {
  /** Additional class names to add to the section */
  className: PropTypes.string,
  /** Optional styles for the label value container */
  style: PropTypes.shape({}),
  /** The label */
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]).isRequired,
  /** The value */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]).isRequired,
  /** If the orientation of the label/value should be vertical */
  stacked: PropTypes.bool,
  /** To display the label/value in a larger, more important view  */
  important: PropTypes.bool,
  /** To display the label/value in a smaller, less important view  */
  unimportant: PropTypes.bool,
  /** Reverse the orientation of the label and value */
  swapped: PropTypes.bool,
};

LabelValue.defaultProps = {
  className: '',
  style: {},
  important: false,
  unimportant: false,
  stacked: false,
  swapped: false,
};

export default LabelValue;
