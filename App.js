import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsScreen from "./Screens/SettingsScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import NotificationsScreen from "./Screens/NotificationsScreen";
import HomeScreen from "./Screens/HomeScreen";
import CourseDetailScreen from "./Screens/CourseDetailScreen";
import UploadScreen from "./Screens/UploadScreen";
import AuthScreen from "./Screens/AuthScreen";
import AdminDashboard from "./Screens/AdminHomeScreen"; // Import AdminDashboard
import YouthWorkerDashboard from "./Screens/YouthworkDashboard"; // Import YouthWorkerDashboard
import MessagingScreen from "./Screens/MessagingScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import SENDashboard from "./Screens/SENDashboard";
import StudentProfile from "./Screens/StudentProfileScreen";
import RotaScreen from "./Screens/RotaScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ScheduleAppointmentScreen from "./Screens/ScheduleAppointmentScreen";

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
        } else if (route.name === "Rota") {
          iconName = focused ? "calendar" : "calendar-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "calendar" : "calendar-outline";
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#20CABE",
      inactiveTintColor: "#000",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />

    <Tab.Screen
      name="Courses"
      component={CoursesScreen}
      options={{ headerShown: false }}
    />

    <Tab.Screen name="Rota" component={RotaScreen} />
    <Tab.Screen
      name="Upload"
      component={UploadScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
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
        ) : userRole === "SEN" ? (
          <>
            <Stack.Screen
              name="SEN"
              component={{ SENDashboard }}
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
            <Stack.Screen
              name="SEN"
              component={SENDashboard}
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
          name="Appointments"
          component={ScheduleAppointmentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Student Profile" component={StudentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
