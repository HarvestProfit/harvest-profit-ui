import React from 'react';
import { shallow } from 'enzyme';
import { ModalSection } from '../../src/index';

describe('<ModalSection />', () => {
  it('should render a modal section', () => {
    const modal = shallow(
      <ModalSection />);
    expect(modal.hasClass('modal-section')).toEqual(true);
  });

  it('should render a modal section as a main section', () => {
    const modal = shallow(
      <ModalSection main />);
    expect(modal.hasClass('main-section')).toEqual(true);
  });

  it('should render a modal section as a subsection', () => {
    const modal = shallow(
      <ModalSection subsection />);
    expect(modal.hasClass('sub-section')).toEqual(true);
  });

  it('should render a modal section as a colored subsection', () => {
    const modal = shallow(
      <ModalSection colored subsection />);
    expect(modal.hasClass('colored')).toEqual(true);
  });
});
