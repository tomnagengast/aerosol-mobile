/* eslint-disable */
import Connected, { Auth } from './';

describe('Component', () => {
    let wrapper = shallow(<Auth/>);

    it('renders something', () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });
});
