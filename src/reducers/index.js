import { combineReducers } from 'redux';
import auth from './AuthReducer';
import courses from './CourseReducer';

export default combineReducers({
    auth,
    courses,
});
