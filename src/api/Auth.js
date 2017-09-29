import axios from 'axios';

export const test = () => {
    console.log('testing api');
    return 'ack';
};

export const login = () => async dispatch => {
    await axios.get('http://aerosolgolf.com.dev/api/courses');
};

export const register = () => async dispatch => {
    console.log('registering user');
};
