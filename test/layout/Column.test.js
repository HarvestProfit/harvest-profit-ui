import React from 'react';
import { shallow } from 'enzyme';
import { Column } from '../../src/index';

describe('<Column />', () => {
  it('should render a column div', () => {
    const comp = shallow(
      <Column>
        <h1>Hey</h1>
      </Column>);
    expect(comp.find('div.column').exists()).toEqual(true);
  });
});
