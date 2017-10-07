/* eslint-disable no-unused-vars, class-methods-use-this */

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../src/actions/index';
import * as c from '../../src/constants';

import Carousel from '../../src/components/Carousel';

const COURSES = [
    { id: 1, text: 'Hunter', color: '#03A9F4' },
    { id: 2, text: 'Paso', color: '#009688' },
    { id: 3, text: 'Morro', color: '#03A9F4' },
];

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
    },
};

class HomeScreen extends React.Component {
    // https://github.com/fiber-god/pul/blob/master/screens/HomeScreen.js
    static propTypes = {
        // navigator: PropTypes.object,
    };

    navigationOptions = ({ navigation }) => ({
        title: 'Home',
    });

    state = {
        isLoaded: false,
        courses: {
            loaded: false,
            course: null,
            index: [],
        },
    };

    onCarouselEnd = () => {
        this.props.navigation.navigate('Auth');
    };

    async componentDidMount() {
        console.log({ purp: c.purple }); // LOG
    }

    async componentWillMount() {
        // const { data } = await axios.get('courses');
        // console.log('uh... hey: ', { data });
    }

    // componentWillReceiveProps(nextProps) {
    // console.log('fetching courses index');
    // this.props.indexCourses();
    // console.log('fetched courses index');
    // this.setState({ courses: { ...nextProps.courses, loaded: true } });
    // }

    render() {
        // if (!this.props.courses.index) {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center' }}>
        //             <ActivityIndicator size="large" />
        //         </View>
        //     );
        // }

        return (
            <View style={styles.container}>
                <Carousel
                    data={this.props.courses.index}
                    loaded={this.props.courses.loaded}
                    onComplete={this.onCarouselEnd}
                />
                <View style={styles.container}>
                    <Text>Heyooo!! Home Screen! {this.state.courses.loaded ? 'yep!' : 'nope.'}</Text>
                    <Button
                        title='Settings'
                        style={styles.button}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, actions)(HomeScreen);
