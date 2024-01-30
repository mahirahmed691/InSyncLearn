import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  // Mock data for student profile
  const student = {
    id: 1,
    name: "Emma Smith",
    age: 12,
    grade: "6th Grade",
    guardian: "John Smith",
    contact: "123-456-7890",
    specialNeeds: "Autism Spectrum Disorder",
    learningStyle: "Visual learner",
    strengths: ["Mathematics", "Art", "Music"],
    challenges: ["Reading comprehension", "Social interactions"],
    progress: "Making steady progress in math; struggling with reading comprehension.",
    image: require("../assets/emily.jpeg"), // Replace with actual image
  };

  // Mock data for attendance
  const attendance = {
    attendancePercentage: 92,
    absences: 5,
    tardiness: 2,
  };

  // Mock data for academic performance
  const academicPerformance = [
    { subject: "Mathematics", grade: "A" },
    { subject: "Science", grade: "B" },
    { subject: "English", grade: "B+" },
    // Add more subjects as needed
  ];

  // Mock data for behavioral tracking
  const behavior = {
    positiveBehaviors: ["Participated actively in class discussions", "Completed homework on time"],
    disciplinaryActions: ["Late submission of assignments", "Disruptive behavior in class"],
    notes: "Showing improvement in behavior during the last week.",
  };

  // Mock data for IEP
  const iep = {
    goals: ["Improve reading comprehension skills", "Develop social interaction skills"],
    accommodations: ["Extended time for tests", "Use of visual aids"],
    services: ["Individual tutoring sessions", "Speech therapy sessions"],
  };

  // Mock data for health information
  const healthInfo = {
    medicalConditions: ["Asthma", "Allergies"],
    emergencyContact: "Jane Smith (123-456-7890)",
  };

  // Mock data for upcoming events
  const upcomingEvents = [
    { title: "Parent-Teacher Conference", date: "2024-03-15", location: "School" },
    { title: "Field Trip to Science Museum", date: "2024-03-20", location: "Science Museum" },
    // Add more events as needed
  ];

  // Mock data for progress reports
  const progressReports = [
    { title: "Mathematics Progress Report", date: "2024-03-10", grade: "B" },
    { title: "English Progress Report", date: "2024-03-12", grade: "B+" },
    // Add more progress reports as needed
  ];

  // Mock data for teacher feedback
  const teacherFeedback = [
    { teacher: "Mr. Johnson", feedback: "Emma is doing great in mathematics!" },
    { teacher: "Ms. Williams", feedback: "Emma needs to work on her reading comprehension skills." },
    // Add more feedback as needed
  ];

  // Function to render a list of items
  const renderList = (data) => {
    return (
      <View>
        {data.map((item, index) => (
          <Text key={index} style={styles.listItem}>- {item}</Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={student.image} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.grade}>{student.grade}</Text>
          <Text style={styles.age}>Age: {student.age}</Text>
          <Text style={styles.guardian}>Guardian: {student.guardian}</Text>
          <Text style={styles.contact}>Contact: {student.contact}</Text>
          <Text style={styles.specialNeeds}>Special Needs: {student.specialNeeds}</Text>
        </View>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.sectionTitle}>Learning Style:</Text>
        <Text style={styles.detailText}>{student.learningStyle}</Text>
        <Text style={styles.sectionTitle}>Strengths:</Text>
        {renderList(student.strengths)}
        <Text style={styles.sectionTitle}>Challenges:</Text>
        {renderList(student.challenges)}
        <Text style={styles.sectionTitle}>Progress:</Text>
        <Text style={styles.detailText}>{student.progress}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attendance Information:</Text>
        <Text style={styles.detailText}>Attendance Percentage: {attendance.attendancePercentage}%</Text>
        <Text style={styles.detailText}>Absences: {attendance.absences}</Text>
        <Text style={styles.detailText}>Tardiness: {attendance.tardiness}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Academic Performance:</Text>
        {academicPerformance.map((subject, index) => (
          <Text key={index} style={styles.detailText}>{subject.subject}: {subject.grade}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Behavioral Tracking:</Text>
        <Text style={styles.detailText}>Positive Behaviors:</Text>
        {renderList(behavior.positiveBehaviors)}
        <Text style={styles.detailText}>Disciplinary Actions:</Text>
        {renderList(behavior.disciplinaryActions)}
        <Text style={styles.detailText}>Notes: {behavior.notes}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Individualized Education Plan (IEP):</Text>
        <Text style={styles.detailText}>Goals:</Text>
        {renderList(iep.goals)}
        <Text style={styles.detailText}>Accommodations:</Text>
        {renderList(iep.accommodations)}
        <Text style={styles.detailText}>Services:</Text>
        {renderList(iep.services)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Information:</Text>
        <Text style={styles.detailText}>Medical Conditions:</Text>
        {renderList(healthInfo.medicalConditions)}
        <Text style={styles.detailText}>Emergency Contact: {healthInfo.emergencyContact}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events:</Text>
        {upcomingEvents.map((event, index) => (
          <Text key={index} style={styles.detailText}>{event.title} - {event.date} ({event.location})</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress Reports:</Text>
        {progressReports.map((report, index) => (
          <Text key={index} style={styles.detailText}>{report.title} - {report.date} (Grade: {report.grade})</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Teacher Feedback:</Text>
        {teacherFeedback.map((feedback, index) => (
          <Text key={index} style={styles.detailText}>{feedback.teacher}: {feedback.feedback}</Text>
        ))}
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 60,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  grade: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  age: {
    fontSize: 16,
    color: "#666",
  },
  guardian: {
    fontSize: 16,
    color: "#666",
  },
  contact: {
    fontSize: 16,
    color: "#666",
  },
  specialNeeds: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
  },
  profileDetails: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  detailText: {
    color: "#666",
    marginBottom: 5,
  },
  listItem: {
    color: "#666",
    marginLeft: 10,
  },
  editButton: {
    alignSelf: "flex-end",
    padding: 10,
    backgroundColor: "#20CABE",
    borderRadius: 5,
    marginBottom: 20,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
