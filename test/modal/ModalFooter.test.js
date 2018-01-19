import React from 'react';
import { shallow } from 'enzyme';
import { ModalFooter } from '../../src/index';

describe('<ModalFooter />', () => {
  it('should render a modal footer div', () => {
    const modal = shallow(
      <ModalFooter>
        <h1>Hey</h1>
      </ModalFooter>);
    expect(modal.find('div.footer').exists()).toEqual(true);
  });
});
