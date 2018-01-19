import React from 'react';
import { shallow } from 'enzyme';
import { Error } from '../../src/index';

describe('<Error />', () => {
  it('should render an error div', () => {
    const comp = shallow(
      <Error>
        Im an error
      </Error>);
    expect(comp.find('div.error').exists()).toEqual(true);
  });
});
