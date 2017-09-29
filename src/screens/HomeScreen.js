import React from 'react';
import { Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { Card, Header, Button, List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import axios from 'axios';

import Carousel from './../components/Carousel';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

const COURSES = [
        { id: 1, text: 'Hunter', color: '#03A9F4' },
        { id: 2, text: 'Paso', color: '#009688' },
        { id: 3, text: 'Morro', color: '#03A9F4' },
]

class HomeScreen extends React.Component {
    navigationOptions = ({navigation}) => ({
        title: 'Home',
    });

    state = {
        courses: {
            loaded: false,
            course: null,
            index: [

            ],
        }
    }

    componentDidMount() {
        this.props.indexCourses();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ courses: { ...nextProps.courses, loaded: true },  });
    }

    onCarouselEnd = () => {
        this.props.navigation.navigate('Auth')
    }

    render() {

        if (!this.props.courses.index) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

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

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
    }
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, actions)(HomeScreen);
