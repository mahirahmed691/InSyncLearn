import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ScheduleAppointmentScreen = ({navigation}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleScheduleAppointment = () => {
    // Implement logic to schedule appointment
    console.log("Appointment scheduled:", { date, time, location });
    // You can navigate back or perform other actions after scheduling
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/SENBackground.jpeg")}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Schedule Appointment</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={time}
            onChangeText={(text) => setTime(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />

          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={handleScheduleAppointment}
          >
            <Text style={styles.buttonText}>Schedule</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#140332",
    paddingTop: 40,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  scheduleButton: {
    backgroundColor: "#20CABE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ScheduleAppointmentScreen;
