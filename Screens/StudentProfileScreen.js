import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

const StudentProfile = () => {
  // Dummy data for student profiles
  const studentProfiles = [
    {
      id: 1,
      name: "Emily Smith",
      age: 11,
      grade: "Year 6",
      guardian: "Sarah Smith",
      contact: "+44 1234 567890",
      specialNeeds: "Dyslexia",
      image: require("../assets/emily.jpeg"),
    },
    {
      id: 2,
      name: "Mohammed Khan",
      age: 10,
      grade: "Year 5",
      guardian: "Aisha Khan",
      contact: "+44 1234 567891",
      specialNeeds: "Autism Spectrum Disorder",
      image: require("../assets/mohammed.jpeg"),
    },
    {
      id: 3,
      name: "Olivia Patel",
      age: 9,
      grade: "Year 4",
      guardian: "Amit Patel",
      contact: "+44 1234 567892",
      specialNeeds: "ADHD",
      image: require("../assets/jack.jpeg"),
    },
    {
      id: 4,
      name: "Jack Williams",
      age: 10,
      grade: "Year 5",
      guardian: "Emma Williams",
      contact: "+44 1234 567893",
      specialNeeds: "Dyspraxia",
    },
    {
      id: 5,
      name: "Isabella Jones",
      age: 8,
      grade: "Year 3",
      guardian: "James Jones",
      contact: "+44 1234 567894",
      specialNeeds: "Dyscalculia",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/youthBackground.jpeg")} // Change to your background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {studentProfiles.map((profile) => (
          <View key={profile.id} style={styles.profileContainer}>
            <Image source={profile.image} style={styles.profileImage} />
            <Text style={styles.title}>{profile.name}</Text>
            <Text style={styles.info}>Age: {profile.age}</Text>
            <Text style={styles.info}>Grade: {profile.grade}</Text>
            <Text style={styles.info}>Guardian: {profile.guardian}</Text>
            <Text style={styles.info}>Contact: {profile.contact}</Text>
            <Text style={styles.info}>
              Special Needs: {profile.specialNeeds}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  profileContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#F0F0F0", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
  },
  profileImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
});

export default StudentProfile;
