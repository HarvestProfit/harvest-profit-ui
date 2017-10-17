import './temporaryPolyfill';
/* eslint-disable import/no-extraneous-dependencies, import/first */
import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-enable import/no-extraneous-dependencies, import/first */

Enzyme.configure({ adapter: new Adapter() });

global.createSpyObj = (baseName, methodNames) => {
  const obj = {};

  for (let i = 0; i < methodNames.length; i += 1) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};
