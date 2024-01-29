import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native";
import { IconButton } from "react-native-paper"; // Import IconButton
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const YouthworkDashboard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Auth");
  };

  const activities = [
    {
      id: 1,
      title: "Youth Leadership Workshop",
      attendees: 20,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Community Service Day",
      attendees: 50,
      status: "completed",
    },
    { id: 3, title: "Mentorship Program", attendees: 15, status: "ongoing" },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Reminder: Workshop tomorrow at 10 AM",
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "New volunteer signup: Sarah Johnson",
    },
  ];

  const progress = [
    { id: 1, task: "Prepare for Workshop", status: "pending" },
    { id: 2, task: "Review Mentee Progress Reports", status: "completed" },
  ];

  const rota = [
    {
      id: 1,
      date: "2024-02-01",
      shift: "Morning",
      learners: ["Learner 1", "Learner 2"],
    },
    {
      id: 2,
      date: "2024-02-02",
      shift: "Afternoon",
      learners: ["Learner 3", "Learner 4"],
    },
  ];

  const handleRequestTimeOff = () => {
    // Add navigation logic to navigate to the "Time Off Request" screen
  };

  const handleSickTimeOff = () => {
    // Add navigation logic to navigate to the "Time Off Request" screen
  };

  

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/youthBackground.png")}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
        <MaterialIcons name="dashboard" size={34} color="#fff" />
          <Text style={styles.greetingText}>Hello, Youth Worker!</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginHorizontal: 20,
            }}
          >
            <IconButton
              icon="bandage"
              iconColor="#FFF"
              color="#fff"
              size={20}
              style={styles.timeOffButton}
              onPress={handleSickTimeOff}
            />
            <IconButton
              icon="airplane-clock"
              iconColor="#fff"
              color="#fff"
              size={20}
              style={styles.timeOffButton}
              onPress={handleRequestTimeOff}
            />
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.RotaHeader}>Your Schedule:</Text>
          {rota.map((item) => (
            <TouchableOpacity key={item.id} style={styles.rotaItem}>
              <Text style={styles.rotaDate}>{item.date}</Text>
              <Text style={styles.rotaShift}>{item.shift}</Text>
              <View style={styles.learnersContainer}>
                {item.learners.map((learner, index) => (
                  <Text key={index} style={styles.learner}>
                    {learner}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.content}>
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

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Messages</Text>
            {messages.map((message) => (
              <TouchableOpacity key={message.id} style={styles.messageItem}>
                <Text style={styles.messageSender}>{message.sender}</Text>
                <Text style={styles.messageContent}>{message.message}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Progress</Text>
            {progress.map((task) => (
              <TouchableOpacity key={task.id} style={styles.taskItem}>
                <Text style={styles.taskTitle}>{task.task}</Text>
                <Text style={styles.taskStatus}>{task.status}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    backgroundColor: "#20CABE",
    paddingTop:40
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFF",
    marginTop:15
  },
  logoutButton: {
  },
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
  RotaHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginLeft: 10,
    letterSpacing: 2,
  },
  activityItem: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20CABE",
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  messageSender: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#20CABE",
    marginBottom: 5,
  },
  messageContent: {
    fontSize: 14,
    color: "#666",
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#20CABE",
    marginBottom: 5,
  },
  taskStatus: {
    fontSize: 14,
    color: "#666",
  },
  rotaItem: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    width: "95%",
    alignSelf: "center",
  },
  rotaDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20CABE",
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
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  timeOffButton: {
    backgroundColor: "rgba(135,38,87, 0.1)",
  },
  SickButton: {
    backgroundColor: "rgba(135,38,87, 0.1)",
  },
  timeOffText: {
    color: "#fff",
    fontWeight: "900",
    alignSelf: "center",
  },
});

export default YouthworkDashboard;
