import React from 'react';
import { shallow } from 'enzyme';
import { TabSwitcherItem } from '../../src/index';

describe('<TabSwitcher />', () => {
  it('should render a tab switcher div', () => {
    const comp = shallow(
      <TabSwitcherItem tab={1} value={1} onClick={() => {}}>
        Hey
      </TabSwitcherItem>);
    expect(comp.find('div.tab-switcher-item').exists()).toEqual(true);
  });

  it('should render a tab switcher div that is active', () => {
    const comp = shallow(
      <TabSwitcherItem tab={1} value={1} onClick={() => {}}>
        Hey
      </TabSwitcherItem>);
    expect(comp.find('div.active').exists()).toEqual(true);
  });

  it('should render a tab switcher div that is inactive', () => {
    const comp = shallow(
      <TabSwitcherItem tab={1} value={2} onClick={() => {}}>
        Hey
      </TabSwitcherItem>);
    expect(comp.find('div.active').exists()).toEqual(false);
  });
});
