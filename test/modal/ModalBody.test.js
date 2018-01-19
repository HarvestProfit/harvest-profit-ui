import React from 'react';
import { shallow } from 'enzyme';
import { ModalBody } from '../../src/index';

describe('<ModalBody />', () => {
  it('should render a modal body div', () => {
    const modal = shallow(
      <ModalBody>
        <h1>Hey</h1>
      </ModalBody>);
    expect(modal.find('div.body').exists()).toEqual(true);
  });
});
