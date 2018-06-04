import React from 'react';
import { mount } from 'enzyme';
import { Modal } from '../../src/index';

describe('<Modal />', () => {
  it('should render a the modal component', () => {
    const toggle = jest.fn();
    const modal = mount(
      <Modal
        isOpen
        toggle={toggle}
      >
        <h1>Hey</h1>
      </Modal>,
    );
    expect(modal.containsMatchingElement(<h1>Hey</h1>)).toEqual(true);
  });

  it('should open when the component receives isOpen', () => {
    const toggle = jest.fn();
    const modal = mount(
      <Modal
        toggle={toggle}
      >
        <h1>Hey</h1>
      </Modal>,
    );
    modal.setProps({ isOpen: true });
    expect(modal.state('addedToDOM')).toEqual(true);
  });

  it('should remove when the component receives isOpen=false', () => {
    const toggle = jest.fn();
    const modal = mount(
      <Modal
        isOpen
        toggle={toggle}
      >
        <h1>Hey</h1>
      </Modal>,
    );
    modal.setProps({ isOpen: false });
    setTimeout(() => expect(modal.state('addedToDOM')).toEqual(false), 200);
  });

  // I'm not a fan of this
  it('should remove a body class when unmounted', () => {
    const toggle = jest.fn();
    const modal = mount(
      <Modal
        isOpen
        toggle={toggle}
      >
        <h1>Hey</h1>
      </Modal>,
    );
    expect(document.body.classList.contains('modal-v2-noscroll')).toEqual(true);
    modal.unmount();
    expect(document.body.classList.contains('modal-v2-noscroll')).toEqual(false);
  });

  describe('modal size settings', () => {
    it('should have a small size when set', () => {
      const toggle = jest.fn();
      const modal = mount(
        <Modal
          isOpen
          small
          toggle={toggle}
        >
          <h1>Hey</h1>
        </Modal>,
      );
      expect(modal.find('div.modal').first().hasClass('small')).toEqual(true);
    });

    it('should have a large size when set', () => {
      const toggle = jest.fn();
      const modal = mount(
        <Modal
          isOpen
          large
          toggle={toggle}
        >
          <h1>Hey</h1>
        </Modal>,
      );
      expect(modal.find('div.modal').first().hasClass('large')).toEqual(true);
    });
  });

  describe('modal class settings', () => {
    it('should have a custom class when set', () => {
      const toggle = jest.fn();
      const modal = mount(
        <Modal
          className="super-awesome"
          isOpen
          large
          toggle={toggle}
        >
          <h1>Hey</h1>
        </Modal>,
      );
      expect(modal.find('div.modal').first().hasClass('super-awesome')).toEqual(true);
    });
  });
});
