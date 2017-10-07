// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
// https://facebook.github.io/jest/docs/en/tutorial-react-native.html#content

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native';

// require('react-native-mock/mock');

global.shallow = Enzyme.shallow;
global.mount = Enzyme.mount;
global.toJson = require('enzyme-to-json');
global.React = require('react');
global.axios = require('axios');
global.moxios = require('moxios');
global.sinon = require('sinon');
// global.expect = require('chai').expect;
// global.assert = require('chai').assert;

Enzyme.configure({ adapter: new Adapter() });

console.error = (message) => {
    throw new Error(message);
};
