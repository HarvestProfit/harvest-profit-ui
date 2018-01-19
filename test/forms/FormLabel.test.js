import React from 'react';
import { shallow } from 'enzyme';
import { FormLabel } from '../../src/index';

describe('<FormLabel />', () => {
  it('should render a label', () => {
    const comp = shallow(
      <FormLabel>
        hey
      </FormLabel>);
    expect(comp.find('label').exists()).toEqual(true);
  });
});
