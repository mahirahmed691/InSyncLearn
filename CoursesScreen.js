// CoursesScreen.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './styles';

const coursesData = [
  {
    title: 'Understanding Autism',
    description: 'This course provides in-depth insights into autism spectrum disorders.',
    requirements: 'Course Requirements: None',
    instructors: 'Instructors: Dr. John Doe, Prof. Jane Smith',
  },
  {
    title: 'Teaching Strategies for Autism',
    description: 'Learn effective teaching strategies for students with autism.',
    requirements: 'Course Requirements: Basic knowledge of education principles',
    instructors: 'Instructors: Prof. Sarah Johnson, Dr. Michael Brown',
  },
  // Add more courses as needed
];

const CoursesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {coursesData.map((course, index) => (
        <View key={index}>
          <Image
            source={require('./assets/autism-banner.png')} // Replace with your actual image source
            style={styles.courseImage}
          />
          <View style={styles.courseDetailsContainer}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseDescription}>{course.description}</Text>
            <Text style={styles.courseRequirements}>{course.requirements}</Text>
            <Text style={styles.courseInstructors}>{course.instructors}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CoursesScreen;
