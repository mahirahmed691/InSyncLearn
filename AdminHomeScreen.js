import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons for icons

const AdminDashboard = () => {
  const navigation = useNavigation(); // Get navigation object

  // Function to handle logout
  const handleLogout = () => {
    // Navigate back to the login screen
    navigation.navigate("Auth");
  };

  // Sample data for user counts
  const userCounts = {
    teachers: 10,
    learners: 40,
    youthWorkers: 60,
    // Add more user types and counts as needed
  };

  // Sample data for courses
  const courses = [
    { id: 1, title: "Introduction to Mathematics", enrolled: 25 },
    { id: 2, title: "English Literature", enrolled: 35 },
    { id: 3, title: "History of Art", enrolled: 15 },
    // Add more courses as needed
  ];

  // Sample data for notifications
  const notifications = [
    { id: 1, message: "New course added: Physics 101" },
    { id: 2, message: "Reminder: Upcoming exam on Friday" },
    // Add more notifications as needed
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Added new course: Physics 101",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      action: "Updated user profile: John Doe",
      timestamp: "3 hours ago",
    },
    // Add more recent activity items as needed
  ];

  // Quick actions data
  const quickActions = [
    { id: 1, title: "Create New Course", icon: "add-circle-outline" },
    { id: 2, title: "View Analytics", icon: "analytics-outline" },
    // Add more quick actions as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello, Admin!</Text>
        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* User Counts Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Member's</Text>
          {/* Display user counts */}
          <View style={styles.userCountContainer}>
            <View style={styles.userCountItem}>
              <Text style={styles.userCountLabel}>Teachers</Text>
              <Text style={styles.userCount}>{userCounts.teachers}</Text>
            </View>
            <View style={styles.userCountItem}>
              <Text style={styles.userCountLabel}>Learners</Text>
              <Text style={styles.userCount}>{userCounts.learners}</Text>
            </View>
            <View style={styles.userCountItem}>
              <Text style={styles.userCountLabel}>Youth Workers</Text>
              <Text style={styles.userCount}>{userCounts.youthWorkers}</Text>
            </View>
            {/* Add more user types as needed */}
          </View>
        </View>

        {/* Course Management Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Courses</Text>
          {/* Display list of courses */}
          {courses.map((course) => (
            <TouchableOpacity key={course.id} style={styles.courseItem}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseEnrolled}>
                Enrolled: {course.enrolled}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Notifications</Text>
          {/* Display list of notifications */}
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={styles.notificationItem}
            >
              <Text style={styles.notificationMessage}>
                {notification.message}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Recent Activity</Text>
          {recentActivity.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityItem}>
              <Text style={styles.activityAction}>{activity.action}</Text>
              <Text style={styles.activityTimestamp}>{activity.timestamp}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Quick Actions</Text>
          <View style={styles.quickActionsContainer}>
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.quickActionItem}>
                <MaterialIcons name={action.icon} size={24} color="#609BCB" />
                <Text style={styles.quickActionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // White background
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#609BCB", // Blue header background
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // White text
  },
  logoutButton: {
    padding: 10, // Increased padding for touchability
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionContainer: {
    backgroundColor: "#f2f2f2", // Light gray background for sections
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333", // Dark gray section headers
  },
  userCountContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userCountItem: {
    width: "45%",
    marginVertical: 5,
  },
  userCountLabel: {
    fontSize: 16,
    color: "#666666", // Gray user count labels
  },
  userCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#609BCB", // Blue user count numbers
  },
  courseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15, // Increased padding for touchability
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd", // Light gray border
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333", // Dark gray course titles
  },
  courseEnrolled: {
    fontSize: 14,
    color: "#666666", // Gray enrolled numbers
  },
  notificationItem: {
    paddingVertical: 15, // Increased padding for touchability
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd", // Light gray border
  },
  notificationMessage: {
    fontSize: 14,
    color: "#333333", // Dark gray notification messages
  },
  activityItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  activityAction: {
    fontSize: 14,
    color: "#333333",
  },
  activityTimestamp: {
    fontSize: 12,
    color: "#666666",
    marginTop: 5,
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  quickActionItem: {
    alignItems: "center",
  },
  quickActionTitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#609BCB",
  },
});

export default AdminDashboard;
