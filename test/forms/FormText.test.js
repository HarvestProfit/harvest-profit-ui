import React from 'react';
import { shallow } from 'enzyme';
import { FormText } from '../../src/index';

describe('<FormText />', () => {
  it('should render form text', () => {
    const comp = shallow(
      <FormText>
        <h1>Hey</h1>
      </FormText>);
    expect(comp.find('div.form-text').exists()).toEqual(true);
  });
});
