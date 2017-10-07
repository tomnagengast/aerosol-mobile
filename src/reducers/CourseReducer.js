import { GET_COURSES, INDEX_COURSES } from '../types';

export default function (state = {}, action) {
    switch (action.type) {
    case GET_COURSES:
        return { course: action.payload };
    case INDEX_COURSES:
        return { index: action.payload };
    default:
        return state;
    }
}
