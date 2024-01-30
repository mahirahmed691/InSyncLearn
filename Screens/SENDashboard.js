import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SENDashboard = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch notifications and tasks from server
    fetchNotifications();
    fetchTasks();
  }, []);

  const fetchNotifications = () => {
    // Simulating fetching notifications from a server
    // Replace with actual API call
    const fetchedNotifications = [
      {
        id: 1,
        sender: "School Administrator",
        message: "New IEP meeting scheduled for next week",
      },
      {
        id: 2,
        sender: "Therapist",
        message: "Reminder: Therapy session today at 2 PM",
      },
    ];
    setNotifications(fetchedNotifications);
  };

  const fetchTasks = () => {
    // Simulating fetching tasks from a server
    // Replace with actual API call
    const fetchedTasks = [
      {
        id: 1,
        title: "Individual Education Plan Review",
        status: "pending",
      },
      {
        id: 2,
        title: "Sensory Integration Therapy",
        status: "completed",
      },
      {
        id: 3,
        title: "Speech and Language Therapy Session",
        status: "ongoing",
      },
    ];
    setTasks(fetchedTasks);
  };

  const handleLogout = () => {
    navigation.navigate("Auth");
  };

  const handleViewStudents = () => {
    navigation.navigate("Student Profile");
  };

  const handleResources = () => {
    navigation.navigate("Resources");
  };

  const handleAppointments = () => {
    navigation.navigate("Appointments");
  };

  const handleViewProfiles = () => {
    navigation.navigate("Student");
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/SENBackground.jpeg")}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <MaterialIcons name="dashboard" size={34} color="#fff" />
          <Text style={styles.greetingText}>Hello, SEN Coordinator!</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Tasks or Notifications"
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Tasks</Text>
            {filteredTasks.map((task) => (
              <TouchableOpacity key={task.id} style={styles.taskItem}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskStatus}>{task.status}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Notifications</Text>
            {filteredNotifications.map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={styles.notificationItem}
              >
                <Text style={styles.notificationSender}>
                  {notification.sender}
                </Text>
                <Text style={styles.notificationContent}>
                  {notification.message}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.featureButton}
            onPress={handleViewStudents}
          >
            <Text style={styles.buttonText}>View Student Profiles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureButton}
            onPress={handleResources}
          >
            <Text style={styles.buttonText}>Access Resources</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureButton}
            onPress={handleAppointments}
          >
            <Text style={styles.buttonText}>Schedule Appointments</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: "#140332",
    paddingTop: 40,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFF",
    marginTop: 15,
  },
  logoutButton: {},
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  taskItem: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  taskStatus: {
    fontSize: 14,
    color: "#666",
  },
  notificationItem: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  notificationSender: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  notificationContent: {
    fontSize: 14,
    color: "#666",
  },
  featureButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: 20,
    marginTop:20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SENDashboard;
