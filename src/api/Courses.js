import axios from 'axios';

export const indexCourses = async () => {
    let response = await axios.get('courses');
    return response;
}

export const getCourses = () => {
    console.log('getting courses boss!');
}
