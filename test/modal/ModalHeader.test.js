import React from 'react';
import { shallow } from 'enzyme';
import { ModalHeader } from '../../src/index';

describe('<ModalHeader />', () => {
  it('should render a modal header with title div', () => {
    const modal = shallow(
      <ModalHeader title="title" toggle={() => {}} />);
    expect(modal.find('h1').exists()).toEqual(true);
  });

  it('should render a modal header with subtitle div', () => {
    const modal = shallow(
      <ModalHeader subtitle="title" toggle={() => {}} />);
    expect(modal.find('h3').exists()).toEqual(true);
  });

  it('should render a modal header with children div', () => {
    const modal = shallow(
      <ModalHeader subtitle="title" toggle={() => {}}>
        <p>test</p>
      </ModalHeader>);
    expect(modal.find('p').exists()).toEqual(true);
  });

  it('should render a modal header without cancel div', () => {
    const modal = shallow(
      <ModalHeader subtitle="title">
        <p>test</p>
      </ModalHeader>);
    expect(modal.find('button').exists()).toEqual(false);
  });
});
