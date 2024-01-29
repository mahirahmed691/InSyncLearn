// SettingsScreen.js

import React, { useState } from "react";
import { SafeAreaView, Text, View, Switch, StyleSheet,} from "react-native";
import { Button } from "react-native-elements";
import { Divider, ListItem, Icon } from "react-native-elements";

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [highContrastModeEnabled, setHighContrastModeEnabled] = useState(false);
  const [largerTextEnabled, setLargerTextEnabled] = useState(false);
  const [autoPlayVideosEnabled, setAutoPlayVideosEnabled] = useState(true);
  const [language, setLanguage] = useState("English");

  const thumbColor = "#89608E";

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const toggleHighContrastMode = () => {
    setHighContrastModeEnabled((prev) => !prev);
  };

  const toggleLargerText = () => {
    setLargerTextEnabled((prev) => !prev);
  };

  const toggleAutoPlayVideos = () => {
    setAutoPlayVideosEnabled((prev) => !prev);
  };

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // Example: Navigate to the login screen
    navigation.navigate("Auth");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Accessibility Settings</Text>
        <Divider style={styles.divider} />

        <ListItem bottomDivider>
          <Icon name="bell" type="font-awesome" />
          <ListItem.Content>
            <ListItem.Title>Enable Notifications</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: "#76949F" }}
            thumbColor={notificationsEnabled ? "#fff" : "#f4f3f4"}
          />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="moon" type="font-awesome-5" />
          <ListItem.Content>
            <ListItem.Title>Dark Mode</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={darkModeEnabled}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: "#76949F" }}
            thumbColor={darkModeEnabled ? "#ffff" : "#f4f3f4"}
          />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="eye" type="font-awesome" />
          <ListItem.Content>
            <ListItem.Title>High Contrast Mode</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={highContrastModeEnabled}
            onValueChange={toggleHighContrastMode}
            trackColor={{ false: "#767577", true: "#76949F" }}
            thumbColor={highContrastModeEnabled ? "#fff" : "#f4f3f4"}
          />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="expand" type="font-awesome-5" />
          <ListItem.Content>
            <ListItem.Title>Larger Text</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={largerTextEnabled}
            onValueChange={toggleLargerText}
            trackColor={{ false: "#767577", true: "#76949F" }}
            thumbColor={largerTextEnabled ? "#fff" : "#f4f3f4"}
          />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="film" type="font-awesome" />
          <ListItem.Content>
            <ListItem.Title>Auto-play Videos</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={autoPlayVideosEnabled}
            onValueChange={toggleAutoPlayVideos}
            trackColor={{ false: "#767577", true: "#76949F" }}
            thumbColor={autoPlayVideosEnabled ? "#fff" : "#f4f3f4"}
          />
        </ListItem>

        {/* Add more accessibility settings here */}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Language Settings</Text>
        <Divider style={styles.divider} />

        <ListItem bottomDivider>
          <Icon name="language" type="font-awesome" />
          <ListItem.Content>
            <ListItem.Title>Language</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={changeLanguage} />
        </ListItem>
      </View>

      <View style={styles.logoutContainer}>
        <Button
          buttonStyle={styles.logoutButton}
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  divider: {
    marginVertical: 10,
  },
  logoutContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  logoutButton: {
    width: "150%",
    backgroundColor: "#20CABE",
    alignSelf:'center',
  },
});

export default SettingsScreen;
