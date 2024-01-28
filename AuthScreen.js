import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdminDashboard from "./AdminHomeScreen"; // Import AdminDashboard

const backgroundImg = require("./assets/learn.png");
const logoImg = require("./assets/Logo.png");

const users = [
  { email: "mahirahmed691@gmail.com", password: "admin123", role: "admin" },
  { email: "mahirahmed691@gmail.com", password: "user123", role: "user" },
  { email: "mahirahmed691@gmail.com", password: "youth123", role: "youth-worker" },
];

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Find the user based on email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Navigate based on user's role
      if (user.role === "admin") {
        // Navigate to admin dashboard
        navigation.navigate("Admin");
      } else if (user.role === "user") {
        // Navigate to user dashboard
        navigation.navigate("Dashboard");
      } else if (user.role === "youth-worker") {
        // Navigate to user dashboard
        navigation.navigate("YouthWork");
      } else {
        console.error("Unknown role:", user.role);
      }
    } else {
      console.error("Invalid email or password");
    }
  };

  const handleRegister = () => {
    // Implement your register logic here
    console.log("Register with:", email, password);
    // Example navigation to Dashboard
    navigation.navigate("Dashboard");
  };
  const handleYouth = () => {
    // Implement your register logic here
    console.log("Register with:", email, password);
    // Example navigation to Dashboard
    navigation.navigate("YouthWork");
  };
  const handleAdmin = () => {
    // Implement your register logic here
    console.log("Register with:", email, password);
    // Example navigation to Dashboard
    navigation.navigate("Admin");
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleYouth}>
            <Text style={styles.buttonText}>Youth Worker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAdmin}>
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 InSyncLearn. All rights reserved.</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0)", // Adjust opacity as needed
    justifyContent:'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius:40
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff", // Set background color for input
  },
  button: {
    backgroundColor: "crimson",
    width: "80%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 50,
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default AuthScreen;
