import { combineReducers } from 'redux';
import auth from './AuthReducer';
import courses from './CourseReducer';
import round from './RoundReducer';
import players from './PlayerReducer';

import home from '../screens/Home/reducer';

export default combineReducers({
    auth,
    courses,
    round,
    players,
    home,
});
