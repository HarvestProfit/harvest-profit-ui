import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../src/index';

describe('<Form />', () => {
  it('should render a form div', () => {
    const comp = shallow(
      <Form>
        <h1>Hey</h1>
      </Form>);
    expect(comp.find('div.form').exists()).toEqual(true);
  });
});
