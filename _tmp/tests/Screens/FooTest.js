/* eslint-disable */
import { View, Text } from 'react-native';
// jest.mock('react-native-text', () => 'Text');
import ExampleScreen from '../../_tmp/ExampleScreen';

// it('should render three <Foo /> components', () => {
//     const wrapper = shallow(<ExampleScreen />);
//     expect(wrapper.find(ExampleScreen)).debug().toHaveLength(0);
// });
//
describe('<ExampleScreen />', () => {
    it('should render a label', () => {
        const wrapper = shallow(<Text>Hang Tight! We're grabbing our clubs...</Text>);
        expect(wrapper).toMatchSnapshot();
    });


    //        <View className="container">
    //            <Text className="placeholder">Hang Tight! We're grabbing our clubs...</Text>
    //        </View>
    //    )).to.equal(true);

    //     it('should render without throwing an error', () => {
    //         // assert(1 === 1, '1 is 1');
    //         expect(shallow(<Foo/>).contains(<div className="foo">Bar</div>)).toBe(true);
    //     });
    //
    //     it('renders using Snapshots', () => {
    //         expect(renderer.create(
    //             <div className="foo">Bar</div>
    //         )).toMatchSnapshot();
    //     });
    //
    //     mount: good for checking prop values, maybe state?
    //     it('allows us to set props', () => {
    //         const wrapper = mount(<Foo bar="baz"/>);
    //         expect(wrapper.props().bar).to.equal('baz');
    //         wrapper.setProps({ bar: 'foo' });
    //         expect(wrapper.props().bar).to.equal('foo');
    //     });
    //
    //     it('simulates click events', () => {
    //         const onButtonClick = sinon.spy();
    //         const wrapper = mount((
    //             <Foo onButtonClick={onButtonClick}/>
    //         ));
    //         wrapper.find('button').simulate('click');
    //         expect(onButtonClick).to.have.property('callCount', 1);
    //     });
});

