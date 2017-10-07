/* eslint-disable */

import { Constants } from 'expo';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import * as actions from '../../actions';
import '../../bootstrap';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        width: WINDOW_WIDTH,
    },
    stretch: {
        width: WINDOW_WIDTH * .6,
        height: WINDOW_WIDTH * .6
    }
};

export class Welcome extends React.Component {
    state = {
        navigation: null,
    }
    // navigationOptions = { title: 'WelcomeScreen' };
    navigationOptions = ({ navigation }) => {
        this.setState({navigation: 'cool!'});

        return {title: 'WelcomeScreen'}
    };

    componentDidMount() {
        this.setState({navigation: this.context.navigation});
        // this.props.initializeApp()
        // this.initializeApp()
        console.log('mounted');
        this._navigateTo('AuthScreen')
    }

    componentDidUpdate() {
        console.log({navigation: this.state.navigation});
        // if (this.props.isAppReady) {
        //     if (this.props.isLoggedIn) {
        //         this._navigateTo('HomeScreen')
        //     } else {
                this._navigateTo('AuthScreen')
        //     }
        // }
    }

    initializeApp() {
        // hydrate store
    }

    _navigateTo = (routeName) => {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../../../assets/icons/project-icon.png')}
                />
            </View>
        );
    }


}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(Welcome);
