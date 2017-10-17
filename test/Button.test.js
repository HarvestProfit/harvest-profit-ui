import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../src/Button';

describe('<Button />', () => {
  // Test to see if it renders
  it('should render a button', () => {
    const onClick = jest.fn();
    const button = shallow(
      <Button
        className="primary"
        onClick={onClick}
      >
        Hello
      </Button>,
    );
    expect(button.find('button').exists()).toEqual(true);
  });

  // Test to try a different tag
  it('should render an anchor if that is the tag', () => {
    const onClick = jest.fn();
    const button = shallow(
      <Button
        className="primary"
        onClick={onClick}
        tag="a"
      >
        Hello
      </Button>,
    );
    expect(button.find('a').exists()).toEqual(true);
  });

  // Test the internals of the button
  describe('text', () => {
    // Test to see if it renders the correct text
    it('should render a button with the text "Hello"', () => {
      const onClick = jest.fn();
      const button = shallow(
        <Button
          className="primary"
          onClick={onClick}
        >
          Hello
        </Button>,
      );
      expect(button.text()).toEqual('Hello');
    });

    // Test to see if it renders the correct text
    it('should render a button with an icon and "Hello"', () => {
      const onClick = jest.fn();
      const button = shallow(
        <Button
          className="primary"
          onClick={onClick}
        >
          <i className="fa fa-edit" />Hello
        </Button>,
      );
      expect(button.text()).toEqual('Hello');
    });
  });

  // Test the onClick functions
  describe('onClick', () => {
    // Test the onClick handler fires
    it('should trigger the "onClick" event properly if enabled', () => {
      const onClick = jest.fn();
      const button = mount(
        <Button
          className="primary"
          onClick={onClick}
          tag="button"
        >
          Hello
        </Button>,
      );
      button.find('button').first().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    // Test the onClick handler doesn't fire if disabled
    it('should not trigger the "onClick" event if disabled', () => {
      const onClick = jest.fn();
      const button = mount(
        <Button
          className="primary"
          disabled
          onClick={onClick}
          tag="button"
        >
          Hello
        </Button>,
      );
      button.find('button').first().simulate('click');
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
