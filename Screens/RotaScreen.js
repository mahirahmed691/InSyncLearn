import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const RotaScreen = () => {
  // Mock data for rota schedules
  const schedules = [
    {
      id: 1,
      title: "Maths Tutoring",
      date: "2024-02-28",
      time: "10:00 AM - 11:00 AM",
      location: "Online",
    },
    {
      id: 2,
      title: "Alot more features to work on",
      date: "2024-02-28",
      time: "All day",
      location: "Manchester",
    },
    {
      id: 3,
      title: "English Literature Class",
      date: "2024-03-01",
      time: "2:00 PM - 3:00 PM",
      location: "School Library",
    },
    {
      id: 4,
      title: "English Literature Class",
      date: "2024-03-02",
      time: "2:00 PM - 3:00 PM",
      location: "School Library",
    },
    {
      id: 5,
      title: "English Literature Class",
      date: "2024-03-02",
      time: "2:00 PM - 3:00 PM",
      location: "School Library",
    },
    {
      id: 6,
      title: "English Literature Class",
      date: "2024-03-02",
      time: "2:00 PM - 3:00 PM",
      location: "School Library",
    },
  ];

  const [selectedDay, setSelectedDay] = useState(new Date().getDay()); // Initialize selected day with current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

  // Function to filter schedules for the selected day
  const filteredSchedules = schedules.filter((schedule) => {
    const scheduleDate = new Date(schedule.date);
    return scheduleDate.getDay() === selectedDay;
  });

  // Function to handle navigation to previous day
  const goToPreviousDay = () => {
    setSelectedDay((prevDay) => (prevDay === 0 ? 6 : prevDay - 1));
  };

  // Function to handle navigation to next day
  const goToNextDay = () => {
    setSelectedDay((prevDay) => (prevDay === 6 ? 0 : prevDay + 1));
  };

  return (
    <View contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rota Schedule</Text>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={goToPreviousDay}
        >
          <Text style={styles.navigationButtonText}>Previous Day</Text>
        </TouchableOpacity>
        <Text style={styles.selectedDayText}>{getDayName(selectedDay)}</Text>
        <TouchableOpacity style={styles.navigationButton} onPress={goToNextDay}>
          <Text style={styles.navigationButtonText}>Next Day</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.calendar}>
        {filteredSchedules.map((schedule) => (
          <View key={schedule.id} style={styles.scheduleItem}>
            <Text style={styles.scheduleTitle}>{schedule.title}</Text>
            <Text style={styles.scheduleDetails}>Date: {schedule.date}</Text>
            <Text style={styles.scheduleDetails}>Time: {schedule.time}</Text>
            <Text style={styles.scheduleDetails}>
              Location: {schedule.location}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Helper function to get the name of the day based on its index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const getDayName = (dayIndex) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayIndex];
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft:10,
    marginTop:10
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin:10
  },
  navigationButton: {
    padding: 10,
    backgroundColor: "#20CABE",
    borderRadius: 5,
  },
  navigationButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  selectedDayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  calendar: {
    width: "95%",
    alignSelf: "center",
  },
  scheduleItem: {
    padding: 20,
    backgroundColor: "#E6E6E6",
    margin: 1,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  scheduleDetails: {
    fontSize: 14,
  },
});

export default RotaScreen;
