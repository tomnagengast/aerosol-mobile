/* eslint-disable */
// import { renderComponent , expect } from '../test_helper';
import Connected, { Raw } from './';

// const testState = {
//     showBox: {}
// };
//
// const store = createMockStore(testState);
//
// const shallowWithStore = (component, store) => {
//     const context = { store };
//     return shallow(component, { context });
// };

describe('Home', () => {
    let wrapper = shallow(<Raw/>);

    it('renders something', () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the container', () => {
        // expect(wrapper.find('.container').prop('value')).toEqual(output)
    });
});
