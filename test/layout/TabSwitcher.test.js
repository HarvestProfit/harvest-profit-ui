import React from 'react';
import { shallow } from 'enzyme';
import { TabSwitcher } from '../../src/index';

describe('<TabSwitcher />', () => {
  it('should render a tab switcher div', () => {
    const comp = shallow(
      <TabSwitcher>
        <h1>Hey</h1>
      </TabSwitcher>);
    expect(comp.find('div.tab-switcher').exists()).toEqual(true);
  });
});
