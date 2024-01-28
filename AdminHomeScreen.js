import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { MaterialIcons } from "@expo/vector-icons"; 

const AdminDashboard = () => {
  const navigation = useNavigation(); 

  const handleLogout = () => {
    navigation.navigate("Auth");
  };

  const userCounts = {
    teachers: 10,
    learners: 40,
    youthWorkers: 60,
  };

  const courses = [
    { id: 1, title: "Introduction to Mathematics", enrolled: 25 },
    { id: 2, title: "English Literature", enrolled: 35 },
    { id: 3, title: "History of Art", enrolled: 15 },
  ];

  const notifications = [
    { id: 1, message: "New course added: Physics 101" },
    { id: 2, message: "Reminder: Upcoming exam on Friday" },
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
  ];

  const quickActions = [
    { id: 1, title: "Create New Course", icon: "add-circle-outline" },
    { id: 2, title: "View Analytics", icon: "analytics" },
  ];

  const handleMessageUser = (userType) => {
    // Navigate to the messaging screen with parameters identifying the selected user
    navigation.navigate("Messaging", { userType });
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("./assets/adminBackground.jpeg")}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.greetingText}>Hello, Admin!</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Member's</Text>
            <View style={styles.userCountContainer}>
              {Object.keys(userCounts).map((key) => (
                <TouchableOpacity 
                  key={key} 
                  style={styles.userCountItem} 
                  onPress={() => handleMessageUser(key)}
                >
                  <Text style={styles.userCountLabel}>{key}</Text>
                  <Text style={styles.userCount}>{userCounts[key]}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Courses</Text>
            {courses.map((course) => (
              <TouchableOpacity key={course.id} style={styles.courseItem}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseEnrolled}>
                  Enrolled: {course.enrolled}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Notifications</Text>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 15,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutButton: {
    padding: 10,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
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
    color: "#666666",
  },
  userCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#609BCB",
  },
  courseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  courseEnrolled: {
    fontSize: 14,
    color: "#666666",
  },
  notificationItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#333333",
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
