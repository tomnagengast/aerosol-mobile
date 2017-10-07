/* eslint-disable */
import Connected, { TemplateComponent } from './';

describe('Component', () => {
    let wrapper = shallow(<TemplateComponent/>);

    it('renders something', () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });
});
