import { AsyncStorage } from 'react-native';
import axios from 'axios';

import * as api from '../api';
import { SRV } from '../bootstrap';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../types';

// How to use AsyncStorage:
// AsyncStorage.setItem('token', token);
// AsyncStorage.getItem('token');

export const login = () => async (dispatch) => {
    // let token = await AsyncStorage.getItem('token');
    let courses, token;

    try {
        token = 'HEY!';
        console.log({ token });

        courses = await axios.get('http://aerosolgolf.com.dev/api/courses');
        console.log({ courses });

        return dispatch({ type: LOGIN_SUCCESS, payload: { token, courses } });
    } catch(e) {
        console.log('SHIT!');
        console.error(e);
    }

    return dispatch({ type: LOGIN_SUCCESS, payload: { token, courses } });
    // if (token) {
    //     return dispatch({ type: LOGIN_SUCCESS, payload: { token, courses } });
    // }
    //
    // console.log('uhoh...');
    // // reauthenticate(dispatch);
    // dispatch({ type: LOGIN_FAIL });
};


const reauthenticate = async dispatch => {
    // let response = await api.login();
    // let response = await axios.get(`${SRV}/courses`);

    let foobar = await axios.get('http://aerosolgolf.com.dev/api/courses')
    return dispatch({ type: LOGIN_SUCCESS, payload: foobar });

    // await AsyncStorage.setItem('fb_token', token);
    // dispatch({ type: LOGIN_SUCCESS, payload: reponse.data });
};
