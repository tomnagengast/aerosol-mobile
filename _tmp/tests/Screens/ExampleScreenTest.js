/* eslint-disable */
import '../../../tests/bootstrap';
import ExampleScreen from '../../_tmp/ExampleScreen';

sinon.spy(ExampleScreen.prototype, 'componentWillMount');

// const data = {}

describe('<ExampleScreen />', () => {
    it('renders the initial courses', () => {
        const wrapper = mount(<ExampleScreen/>);
        expect(ExampleScreen.prototype.componentDidMount.calledOnce).toEqual(true);
    });
});
