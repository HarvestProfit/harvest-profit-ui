import React from 'react';
import { shallow } from 'enzyme';
import { Divider } from '../../src/index';

describe('<Divider />', () => {
  it('should render a divider fieldset', () => {
    const comp = shallow(<Divider />);
    expect(comp.find('fieldset.divider').exists()).toEqual(true);
  });

  it('should render a divider fieldset with a name', () => {
    const comp = shallow(<Divider name="test" />);
    expect(comp.find('fieldset.divider').text()).toEqual('test');
  });
});
