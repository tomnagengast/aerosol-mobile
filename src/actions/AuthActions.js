import { AsyncStorage } from 'react-native';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const login = () => async dispatch => {
    // let token = await AsyncStorage.getItem('fb_token');
    //
    // if (token) {
    //   // Dispatch an action saying FB login is done
    //   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    // } else {
    //   // Start up FB Login process
    //   doFacebookLogin(dispatch);
    // }
};
