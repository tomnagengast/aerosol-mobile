import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, Button, List, ListItem } from 'react-native-elements'
import axios from 'axios';
import Deck from './src/components/Deck';
import MapView from './src/components/MapView';
import AuthScreen from './src/screens/AuthScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const API = 'http://aerosolgolf.com.dev/api';

const DATA = [
  { id: 1, name: 'Morro Bay Golf Course',
    uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/morro-bay-golf-course.png' },
  { id: 2, name: 'Hunter Ranch Golf Course and Restaurant',
    uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
  { id: 3, name: 'Links Golf Course of Paso Robles',
    uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/links-golf-course-of-paso-robles.png' },
  { id: 4, name: 'River Oaks Golf Course',
    uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/river-oaks-golf-course.png' },
  { id: 5, name: 'Paso Robles Golf Club',
    uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/paso-robles-golf-club.png' },
];

export default class App extends React.Component {

    async componentDidMount() {
        console.info('App component mounted.');
    }

    renderCard(item) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{ uri: item.uri }}
            >
                <Text>{item.text}</Text>
                <Button
                    raised
                    icon={{name: 'home', size: 32}}
                    title={`View Card`}
                />
            </Card>
        );
    }
    _handlePress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        // return (
        //     // <Deck data={DATA} renderCard={this.renderCard} />
        //     <MapView />
        // );
        return (
            <View style={styles.container}>
                <Text>View Courses</Text>
            </View>
        );
        // return (
        //     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        //         <Text onPress={this._handlePress}>HomeScreen!</Text>
        //     </View>
        // )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
});
