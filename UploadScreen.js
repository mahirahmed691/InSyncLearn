import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allow all file types
      });

      if (result.type === 'success') {
        // Handle the selected file
        console.log(
          result.uri,
          result.type, // mime type
          result.name,
          result.size
        );

        setSelectedFile(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Upload Documents</Text>
        <Text style={styles.descriptionText}>
          Select and upload documents for learning and development purposes.
        </Text>
      </View>

      <TouchableOpacity onPress={pickDocument}>
        <Text style={styles.uploadButton}>Upload Document</Text>
      </TouchableOpacity>

      {selectedFile && (
        <View style={styles.selectedFileContainer}>
          <Text style={styles.selectedFileText}>
            Selected File: {selectedFile.name}
          </Text>
          <Text style={styles.fileInfoText}>
            Type: {selectedFile.type}, Size: {selectedFile.size / 1024} KB
          </Text>
          <Text style={styles.fileInfoText}>
            Location: {selectedFile.uri}
          </Text>
        </View>
      )}

      {/* Add your upload document content here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign:'center'
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  uploadButton: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 20,
  },
  selectedFileContainer: {
    marginTop: 20,
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 8,
  },
  selectedFileText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fileInfoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default UploadScreen;
