import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../types';

export default function (state = {}, action) {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return { token: action.payload.token };
    case LOGIN_FAIL:
        return { token: null };
    default:
        return state;
    }
}
