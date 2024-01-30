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
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdminDashboard from "./AdminHomeScreen"; // Import AdminDashboard
import { IconButton } from "react-native-paper";

const backgroundImg = require("../assets/learn.gif");
const logoImg = require("../assets/Logo.png");

const users = [
  { email: "mahirahmed691@gmail.com", password: "admin123", role: "admin" },
  { email: "mahirahmed691@gmail.com", password: "user123", role: "user" },
  {
    email: "mahirahmed691@gmail.com",
    password: "youth123",
    role: "youth-worker",
  },
  {
    email: "mahirahmed691@gmail.com",
    password: "sen123",
    role: "SEN",
  },
];

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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
      } else if (user.role === "SEN") {
        // Navigate to user dashboard
        navigation.navigate("SEN");
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
    navigation.navigate("Register");
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.infoButtonContainer}>
          <IconButton
            icon="information"
            iconColor="white"
            size={30}
            onPress={toggleModal}
          />
        </View>

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
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonsContainer}>
          {/* Google */}
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
          >
            <FontAwesome name="google" size={24} color="white" />
          </TouchableOpacity>
          {/* Facebook */}
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
          >
            <FontAwesome name="facebook" size={24} color="white" />
          </TouchableOpacity>
          {/* Twitter */}
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#1DA1F2" }]}
          >
            <FontAwesome name="linkedin" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 InSyncLearn. All rights reserved.
          </Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>InSyncLearn</Text>
              <Text
                style={{
                  fontWeight: "900",
                  textAlign: "left",
                  marginBottom: 20,
                }}
              >
                Version: 1.0.0
              </Text>
              <ScrollView style={{ height: 200 }}>
                <Text
                  style={{ fontWeight: "500", margin: 5, letterSpacing: 0.8 }}
                >
                  InSyncLearn is a comprehensive learning platform designed to
                  provide users with access to a wide range of educational
                  resources and tools. Whether you're a student, educator, or
                  lifelong learner, InSyncLearn has something for everyone.
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Developer: Mahir Ahmed
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Contact: mahirahmed691@gmail.com
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Website: mahirahmed691.tech
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Privacy Policy:{" "}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.insynclearn.com/privacy-policy"
                      )
                    }
                  >
                    View Privacy Policy
                  </Text>
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Terms of Service:{" "}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.insynclearn.com/terms-of-service"
                      )
                    }
                  >
                    View Terms of Service
                  </Text>
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Attributions: Icons made by{" "}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.flaticon.com/authors/freepik"
                      )
                    }
                  >
                    Freepik
                  </Text>{" "}
                  from Flaticon
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Credits: Special thanks to our development team and
                  contributors for their hard work and dedication.
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  Release Notes:
                </Text>
                <Text style={{ fontWeight: "500", margin: 5 }}>
                  - Version 1.0.0: Initial release of InSyncLearn
                </Text>
              </ScrollView>
              <Pressable style={styles.closeButton} onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 50,
    borderRadius: 40,
  },
  infoButtonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
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
    backgroundColor: "#20CABE",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#20CABE",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    width: "50%",
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "white",
  },
});

export default AuthScreen;
