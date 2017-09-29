import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Card, Header, Button, List, ListItem } from 'react-native-elements'

import Carousel from './../components/Carousel';

const SCREEN_WIDTH = Dimensions.get('window').width;

const COURSES = [
        { id: 1, text: 'Hunter', color: '#03A9F4' },
        { id: 2, text: 'Paso', color: '#009688' },
        { id: 3, text: 'Morro', color: '#03A9F4' },
]

export default class HomeScreen extends React.Component {
    navigationOptions = ({navigation}) => ({
        title: 'Home',
        header: ({ navigate }) => {
            console.log({navigate});
            return {
                right: <Text>Go Right</Text>
            };
        }
    });

    onCarouselEnd = () => {
        console.log('navigating to `auth`');
        this.props.navigation.navigate('Auth')
    }

    render() {
        console.log(this.props.navigation);
        return (
            <View style={styles.container}>
                <Carousel
                    data={COURSES}
                    onComplete={this.onCarouselEnd}
                />
                <View style={styles.container}>
                    <Text>Heyooo!! Home Screen!</Text>
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
