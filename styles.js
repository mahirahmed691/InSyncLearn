import { StyleSheet } from "react-native";

// Global Colors
const primaryColor = "#000";
const secondaryColor = "#FFF"; // Secondary text color
const backgroundColor = "#FFFFFF"; // White background color
const cardColor = "#1D8A99"; // Green card color
const accentColor = "#FFFF"; // Yellow accent color

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  sectionContainer: {
    backgroundColor: accentColor,
    padding: 10,
    marginVertical: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor,
    marginBottom: 10,
  },
  quickAccessButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  cardContainer: {
    backgroundColor: cardColor,
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 10,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  courseImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  announcementContainer: {
    backgroundColor: "#000", // Yellow background color
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: secondaryColor,
  },
  announcementContent: {
    fontSize: 16,
    color: secondaryColor,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: backgroundColor,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: primaryColor,
  },
  modalInput: {
    height: 40,
    borderColor: "#777", // Darker gray
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: "100%",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#E07A5F", // Blue background color
    borderRadius: 30,
    padding: 15,
    width: 60, // Set width to accommodate the button content
    height: 60, // Set height to accommodate the button content
    justifyContent: "center",
    alignItems: "center",
  },
  searchBarContainer: {
    backgroundColor: "white",
  },
  searchBarInputContainer: {
    backgroundColor: "white",
  },
  searchBarInput: {
    backgroundColor: "white",
  },
  courseImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  courseDetailsContainer: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  courseRequirements: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  courseInstructors: {
    fontSize: 14,
    color: "#333",
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#76949F",
    borderBottomWidth: 5,
    borderColor: "#f0f0f0",
  },
  greetingText: {
    fontWeight: "800",
    marginTop: 15,
    marginLeft: 10,
    color: "white",
    elevation: 5, // Add elevation for Android shadow
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 2, // iOS shadow radius
  },
  achievementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  achievementTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  achievementContent: {
    fontSize: 16,
    color: '#555',
  },
});

export default globalStyles;
