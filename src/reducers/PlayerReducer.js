import { GET_COURSES } from '../types';

const INITIAL_STATE = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Casey' },
    { id: 3, name: 'Scott' },
    { id: 4, name: 'Mark' },
    { id: 5, name: 'Dre' },
];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_COURSES:
        return { course: action.payload };
    default:
        return state;
    }
}
