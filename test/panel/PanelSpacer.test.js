import React from 'react';
import { shallow } from 'enzyme';
import { PanelSpacer } from '../../src/index';

describe('<PanelSpacer />', () => {
  it('should render a panel spacer', () => {
    const panel = shallow(
      <PanelSpacer />);
    expect(panel.hasClass('panel-spacer')).toEqual(true);
  });
});
