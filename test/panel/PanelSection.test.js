import React from 'react';
import { shallow } from 'enzyme';
import { PanelSection } from '../../src/index';

describe('<PanelSection />', () => {
  it('should render a panel section', () => {
    const panel = shallow(
      <PanelSection />);
    expect(panel.hasClass('panel-section')).toEqual(true);
  });

  it('should render a panel section as a main section', () => {
    const panel = shallow(
      <PanelSection important />);
    expect(panel.hasClass('important')).toEqual(true);
  });

  it('should render a panel section as a subsection', () => {
    const panel = shallow(
      <PanelSection unimportant />);
    expect(panel.hasClass('unimportant')).toEqual(true);
  });

  it('should render a panel section as a colored subsection', () => {
    const panel = shallow(
      <PanelSection colored unimportant />);
    expect(panel.hasClass('colored')).toEqual(true);
  });
});
