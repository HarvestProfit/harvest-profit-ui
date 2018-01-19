import React from 'react';
import { shallow } from 'enzyme';
import { PanelTitle } from '../../src/index';

describe('<PanelTitle />', () => {
  it('should render a the panel title component', () => {
    const panel = shallow(
      <PanelTitle>
        Hey
      </PanelTitle>,
    );
    expect(panel.find('div.title').exists()).toEqual(true);
  });
});
