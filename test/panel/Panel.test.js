import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from '../../src/index';

describe('<Panel />', () => {
  it('should render a the panel component', () => {
    const panel = shallow(
      <Panel>
        <h1>Hey</h1>
      </Panel>,
    );
    expect(panel.find('div.panel').exists()).toEqual(true);
  });
});
