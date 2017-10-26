import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/layout/Header';

describe('<Header />', () => {
  it('should render a header div', () => {
    const header = shallow(
      <Header>
        <h1>Hello</h1>
      </Header>);
    expect(header.find('div').exists()).toEqual(true);
  });
});
