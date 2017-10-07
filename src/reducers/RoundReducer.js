import { GET_COURSES } from '../types';

const INITIAL_STATE = {
    course: {
        someVar: 'testing from round reducer',
        name: 'Hunter Ranch Golf Course',
        location: {},
        holes: [
            { id: 1, name: '1', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 2, name: '2', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 3, name: '3', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 4, name: '4', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 5, name: '5', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 6, name: '6', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 7, name: '7', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 8, name: '8', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 9, name: '9', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 10, name: '10', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 11, name: '11', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 12, name: '12', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 13, name: '13', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 14, name: '14', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 15, name: '15', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 16, name: '16', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 17, name: '17', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
            // { id: 18, name: '18', uri: 'https://s3-us-west-2.amazonaws.com/aerosolgolf.com/assets/images/hunter-ranch-golf-course-and-restaurant.png' },
        ],
    },
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_COURSES:
        return { course: action.payload };
    default:
        return state;
    }
}
