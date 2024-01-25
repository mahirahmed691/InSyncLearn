// CourseCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CourseCard({ title, icon, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Change to column
    backgroundColor: "white",
    padding: 0,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
    height: 200, // Adjust the height as needed
    overflow: "hidden",
  },
  content: {
    marginTop:5, // Add margin at the top
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%", // Adjust the height as needed
    borderRadius: 10,
    resizeMode:'cover',
    
  },
  title: {
    fontSize: 16,
    fontWeight:'bold'
  },
});
