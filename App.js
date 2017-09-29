import { Permissions, Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, Button, List, ListItem } from 'react-native-elements'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = 'http://aerosolgolf.com.dev/api/';

export default class App extends React.Component {
    render() {
        const Router = TabNavigator({
            Home: { screen: HomeScreen },
            Welcome: { screen: WelcomeScreen },
            Auth: { screen: AuthScreen },
            Main: {
                screen: TabNavigator({
                    Settings: { screen: SettingsScreen },
                    Search: { screen: SearchScreen },
                }),
            },
        }, {
            navigationOptions: {
                tabBarVisible: false,
            },
            lazy: true,
        });
        return (
            <Provider store={ store }>
                <Router />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
