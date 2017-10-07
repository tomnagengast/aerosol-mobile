/* eslint-disable no-unused-vars, class-methods-use-this, indent, import/extensions */

import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        fontSize: 36,
    },
    courseList: {},
    courseName: {
        fontWeight: '800',
        fontSize: 24,
    },
};

export default class ExampleScreen extends React.Component {
    state = {
        loaded: false,
        courses: {},
    };

    async componentWillMount() {
        try {
            const response = await axios.get('courses');
            this.setState({ courses: response.data.courses, loaded: true });
        } catch (error) {
            console.log({ error });
        }
    }

    render() {
        return !this.state.loaded
            ? (
                <View style={styles.container}>
                    <Text style={styles.placeholder}>Hang Tight! We're grabbing our clubs</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text>Welcome Screen</Text>
                    <Text>Environment: {process.env.NODE_ENV}</Text>
                    <View style={styles.courseList}>
                        {this.state.courses.map(course => (
                            <Text key={course.id} style={styles.courseName}>{course.name}</Text>
                        ))}
                    </View>
                </View>
            );
    }
}
