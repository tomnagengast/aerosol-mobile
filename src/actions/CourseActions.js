/* eslint-disable import/prefer-default-export */

import { INDEX_COURSES } from '../types';

export const indexCourses = () => async (dispatch) => {
    try {
        const { data } = await axios.get('courses');
        dispatch({ type: INDEX_COURSES, payload: data.courses });
    } catch (e) {
        console.error(e);
    }
};
