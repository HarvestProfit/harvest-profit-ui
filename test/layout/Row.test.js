import React from 'react';
import { shallow } from 'enzyme';
import { Row } from '../../src/index';

describe('<Row />', () => {
  it('should render a row div', () => {
    const comp = shallow(
      <Row>
        <h1>Hey</h1>
      </Row>);
    expect(comp.find('div.row').exists()).toEqual(true);
  });
});
