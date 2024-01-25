// Dashboard.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsScreen from "./SettingsScreen";
import CoursesScreen from "./CoursesScreen";
import NotificationsScreen from "./NotificationsScreen";
import HomeScreen from "./HomeScreen";
import CourseDetailScreen from "./CourseDetailScreen";
import UploadScreen from "./UploadScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DashboardTabs"
      component={DashboardTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const DashboardTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Courses") {
          iconName = focused ? "book" : "book-outline";
        } else if (route.name === "Notifications") {
          iconName = focused ? "notifications" : "notifications-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }else if (route.name === "Upload") {
          iconName = focused ? "cloud-upload" : "cloud-upload-outline";
        }


        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#76949F",
      inactiveTintColor: "crimson",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Upload" component={UploadScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default function Dashboard() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
