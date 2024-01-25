// CourseDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CourseDetailScreen = ({ route }) => {
  const { course, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={course.image} style={styles.courseImage} />
      <View style={styles.courseDetailsContainer}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>
          {content} {/* Use the content parameter here */}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  courseDetailsContainer: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default CourseDetailScreen;
