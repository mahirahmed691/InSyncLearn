// RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../utils/supabase"; // Make sure to import your Supabase client

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const navigation = useNavigation();

  const backgroundImg = require("../assets/learn.gif");

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        name,
        surname,
        role,
      });

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        console.log("User signed up successfully:", user);
        navigation.navigate("Auth"); // Navigate back to the authentication screen
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleGoBack = () => {
    navigation.navigate("Auth");
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Register Now To Start Transforming Lives.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
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
        <DropDownPicker
          items={[
            { label: "User", value: "user" },
            { label: "Admin", value: "admin" },
            { label: "Youth Worker", value: "youth-worker" },
          ]}
          defaultValue={role}
          containerStyle={{
            height: 40,
            width: "80%",
            marginBottom: 10,
            zIndex: 9999,
          }} // Adjust zIndex
          style={{ backgroundColor: "#fff" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fff" }}
          onChangeItem={(item) => setRole(item.value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.GoBackLinkText}>
            Already a member? Login here.
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
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
  GoBackLinkText: {
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default RegisterScreen;
