import React, { useState, useEffect } from "react";
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
import AuthScreen from "./AuthScreen";
import AdminDashboard from "./AdminHomeScreen"; // Import AdminDashboard
import YouthWorkerDashboard from "./YouthworkDashboard"; // Import YouthWorkerDashboard
import MessagingScreen from "./MessagingScreen";
import RegisterScreen from "./RegisterScreen";

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
        } else if (route.name === "Upload") {
          iconName = focused ? "cloud-upload" : "cloud-upload-outline";
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#20CABE",
      inactiveTintColor: "#000",
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
  const [userRole, setUserRole] = useState(""); // State to hold user role

  // Function to determine user role based on authentication
  const determineUserRole = () => {
    // Logic to determine user role (e.g., from authentication token)
    // For demonstration purposes, let's assume the user role is "user"
    setUserRole("user");
  };

  // Call determineUserRole when component mounts
  useEffect(() => {
    determineUserRole();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false, // Disable gestures for navigating back
        }}
      >
        {userRole === "admin" ? (
          <>
            <Stack.Screen
              name="Admin"
              component={AdminDashboard}
              options={{ headerShown: false }}
            />
          </>
        ) : userRole === "youthWorker" ? (
          <>
            <Stack.Screen
              name="YouthWork"
              component={YouthWorkerDashboard}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Dashboard"
              component={MainStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Admin"
              component={AdminDashboard}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="YouthWork"
              component={YouthWorkerDashboard}
              options={{ headerShown: false }}
            />
          </>
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Messaging"
          component={MessagingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
