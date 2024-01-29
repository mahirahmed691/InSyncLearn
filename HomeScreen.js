// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons
import { SearchBar, Button, Icon } from "react-native-elements";
import CourseCard from "./CourseCard";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const allCourses = [
  {
    title: "Understanding Autism",
    image: require("./assets/understanding-autism.jpeg"),
    content:
      "This comprehensive course provides an in-depth understanding of autism spectrum disorders. Topics covered include diagnostic criteria, behavioral characteristics, and effective intervention strategies.",
  },
  {
    title: "Understanding Autism",
    image: require("./assets/understanding-autism.jpeg"),
    content:
      "This comprehensive course provides an in-depth understanding of autism spectrum disorders. Topics covered include diagnostic criteria, behavioral characteristics, and effective intervention strategies.",
  },
];

const recentCourses = [
  {
    title: "Understanding Autism",
    image: require("./assets/understanding-autism.jpeg"),
    content:
      "This comprehensive course provides an in-depth understanding of autism spectrum disorders. Topics covered include diagnostic criteria, behavioral characteristics, and effective intervention strategies.",
  },
];

const announcements = [
  {
    title: "Understanding Autism",
    content:
      "This comprehensive course provides an in-depth understanding of autism spectrum disorders. Topics covered include diagnostic criteria, behavioral characteristics, and effective intervention strategies.",
  },
  {
    title: "New Course Available!",
    content: "Explore our latest course on inclusive education.",
  },
  {
    title: "Upcoming Webinar",
    content: "Join our webinar on effective teaching strategies.",
  },
  // Add more announcements here as needed
];


export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [newCourseModalVisible, setNewCourseModalVisible] = useState(false);
  const [newCourseTitle, setNewCourseTitle] = useState("");

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = allCourses.filter((course) =>
      course.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const clearSearch = () => {
    setSearchText("");
    setFilteredCourses(allCourses);
  };

  const calculateProgress = () => {
    const mockProgress = 60; // Assuming 60% progress
    return `Your Progress: ${mockProgress}%`;
  };

  const addNewCourse = () => {
    const newCourse = {
      title: newCourseTitle,
      icon: <MaterialIcons name="school" size={24} color="black" />,
    };
    setFilteredCourses([...filteredCourses, newCourse]);
    setNewCourseModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello, User!</Text>
        <Image
          source={require("./assets/icon.png")} // Replace with your logo source
          style={styles.logo}
        />
      </View>
      <SearchBar
        placeholder="Search for courses..."
        onChangeText={handleSearch}
        value={searchText}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        platform="ios"
        cancelButtonTitle="Cancel"
        searchIcon={<Icon name="search" color="#86939e" />}
        clearIcon={<Icon name="clear" color="#86939e" />}
      />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Recommended Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {allCourses.map((course, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("CourseDetail", {
                    course: course,
                    content: course.content, // Pass down content as a parameter
                  })
                }
              >
                <CourseCard
                  title={course.title}
                  icon={course.icon}
                  image={course.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Quick Access</Text>
          <View style={styles.quickAccessButtons}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="book" size={24} color="black" />
              <Text>My Courses</Text>
            </View>
          </View>
        </View>

        <ScrollView style={styles.sectionContainer} horizontal showsHorizontalScrollIndicator={false}>
          {recentCourses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("CourseDetail", {
                  course: course,
                  content: course.content,
                })
              }
            >
              <CourseCard
                title={course.title}
                icon={course.icon}
                image={course.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Announcements</Text>
          {announcements.map((announcement, index) => (
            <View key={index} style={styles.announcementContainer}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementContent}>
                {announcement.content}
              </Text>
            </View>
          ))}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={newCourseModalVisible}
          onRequestClose={() => setNewCourseModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Course</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Course Title"
                onChangeText={(text) => setNewCourseTitle(text)}
              />
              <Button title="Add Course" onPress={addNewCourse} />
              <Button
                title="Cancel"
                type="outline"
                onPress={() => setNewCourseModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Achievements</Text>
          <View style={styles.achievementContainer}>
            <MaterialIcons name="verified-user" size={24} color="#4CAF50" />
            <View style={styles.achievementTextContainer}>
              <Text style={styles.achievementTitle}>
                Certificate of Completion
              </Text>
              <Text style={styles.achievementContent}>
                Congratulations! You've successfully completed the Inclusive
                Education Course.
              </Text>
            </View>
          </View>
          <View style={styles.achievementContainer}>
            <MaterialIcons name="star" size={24} color="#FFD700" />
            <View style={styles.achievementTextContainer}>
              <Text style={styles.achievementTitle}>Student of the Month</Text>
              <Text style={styles.achievementContent}>
                Recognized for outstanding academic and community contributions.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => setNewCourseModalVisible(true)}
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
