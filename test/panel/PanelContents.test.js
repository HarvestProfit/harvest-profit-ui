import React from 'react';
import { shallow } from 'enzyme';
import PanelContents from '../../src/panel/PanelContents';

describe('<PanelContents />', () => {
  it('should render a the panel contents component', () => {
    const panel = shallow(
      <PanelContents>
        <h1>Hey</h1>
      </PanelContents>,
    );
    expect(panel.find('div.content').exists()).toEqual(true);
  });
});
