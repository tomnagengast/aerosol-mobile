import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import './bootstrap';
import store from './store/index';
import Auth from './screens/Auth';
import Home from './screens/Home';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = API_ENDPOINT;

export default class App extends React.Component {
    render() {
        const Router = TabNavigator({
            // WelcomeScreen: { screen: Welcome },
            AuthScreen: { screen: Auth },
            HomeScreen: { screen: Home },
        }, {
            navigationOptions: {
                tabBarVisible: false,
            },
            lazy: true,
        });

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

Expo.registerRootComponent(App);
