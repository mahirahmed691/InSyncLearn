import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const YouthworkDashboard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Auth");
  };

  const activities = [
    { id: 1, title: "Youth Leadership Workshop", attendees: 20, status: "upcoming" },
    { id: 2, title: "Community Service Day", attendees: 50, status: "completed" },
    { id: 3, title: "Mentorship Program", attendees: 15, status: "ongoing" },
    // Add more activities as needed
  ];

  const messages = [
    { id: 1, sender: "John Doe", message: "Reminder: Workshop tomorrow at 10 AM" },
    { id: 2, sender: "Jane Smith", message: "New volunteer signup: Sarah Johnson" },
    // Add more messages as needed
  ];

  const progress = [
    { id: 1, task: "Prepare for Workshop", status: "pending" },
    { id: 2, task: "Review Mentee Progress Reports", status: "completed" },
    // Add more progress tasks as needed
  ];

  // Sample rota (schedule) data
  const rota = [
    { id: 1, date: "2024-02-01", shift: "Morning", learners: ["Learner 1", "Learner 2"] },
    { id: 2, date: "2024-02-02", shift: "Afternoon", learners: ["Learner 3", "Learner 4"] },
    // Add more rota items as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello, Youth Worker!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Activities Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Activities</Text>
          {activities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityItem}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityAttendees}>
                Attendees: {activity.attendees}
              </Text>
              <Text style={styles.activityStatus}>
                Status: {activity.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Messages Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Messages</Text>
          {messages.map((message) => (
            <TouchableOpacity key={message.id} style={styles.messageItem}>
              <Text style={styles.messageSender}>{message.sender}</Text>
              <Text style={styles.messageContent}>{message.message}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Progress</Text>
          {progress.map((task) => (
            <TouchableOpacity key={task.id} style={styles.taskItem}>
              <Text style={styles.taskTitle}>{task.task}</Text>
              <Text style={styles.taskStatus}>{task.status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rota Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Rota</Text>
          {rota.map((item) => (
            <TouchableOpacity key={item.id} style={styles.rotaItem}>
              <Text style={styles.rotaDate}>{item.date}</Text>
              <Text style={styles.rotaShift}>{item.shift}</Text>
              <View style={styles.learnersContainer}>
                {item.learners.map((learner, index) => (
                  <Text key={index} style={styles.learner}>{learner}</Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#609BCB",
    paddingHorizontal: 20,
    paddingVertical: 15,
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
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  activityItem: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  activityAttendees: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  activityStatus: {
    fontSize: 14,
    color: "#666",
  },
  messageItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  messageSender: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  messageContent: {
    fontSize: 14,
    color: "#666",
  },
  taskItem: {
    backgroundColor: "#eaf2f8",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  taskStatus: {
    fontSize: 14,
    color: "#666",
  },

  // Rota styles
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  rotaItem: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  rotaDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  rotaShift: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  learnersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  learner: {
    backgroundColor: "#609BCB",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default YouthworkDashboard;
