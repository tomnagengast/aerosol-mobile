import { AsyncStorage } from 'react-native';

import * as api from '../api';
import {
    INDEX_COURSES
} from './types';

export const indexCourses = () => async dispatch => {
    // AsyncStorage.getItem('')
    try {
        let { data } = await axios.get('courses');

        dispatch({ type: INDEX_COURSES, payload: data.courses });
    } catch(e) {
        console.error(e);
    }
};
