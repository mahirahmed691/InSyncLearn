// UserHomeScreen.js
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CourseCard from "./CourseCard";
import styles from "./styles";

const UserHomeScreen = () => {
  // Customize user content here
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello, User!</Text>
        {/* Add user-specific content */}
      </View>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Recommended Courses</Text>
          {/* Add user-specific recommended courses */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Quick Access</Text>
          {/* Add user-specific quick access buttons */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Recent Courses</Text>
          {/* Add user-specific recent courses */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Announcements</Text>
          {/* Add user-specific announcements */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Achievements</Text>
          {/* Add user-specific achievements */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHomeScreen;
