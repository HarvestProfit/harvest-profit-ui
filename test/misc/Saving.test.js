import React from 'react';
import { shallow } from 'enzyme';
import Saving from '../../src/misc/Saving';

describe('<Saving />', () => {
  it('should render nothing if `isSaving` is not set', () => {
    const saving = shallow(
      <Saving />);
    expect(saving.text().trim()).toEqual('');
  });

  it('should render "Saving" when `isSaving` is true', () => {
    const saving = shallow(
      <Saving
        isSaving
      />);
    expect(saving.text().trim()).toEqual('Saving...');
  });

  it('should render "Saved" after `isSaving` is removed', () => {
    const saving = shallow(
      <Saving
        isSaving
      />);
    saving.setProps({ isSaving: false });
    expect(saving.text().trim()).toEqual('Saved');
  });

  it('should render "Saved" after `isSaving` is removed', () => {
    const saving = shallow(
      <Saving
        isSaving
      />);
    saving.setProps({ isSaving: false });
    setTimeout(() => {
      expect(saving.text().trim()).toEqual('');
    }, 2000);
  });
});
