import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { authorize } from "react-native-app-auth";

const googleDriveIcon = require("./assets/googleDriveIcon.png");
const oneDriveIcon = require("./assets/OneDrive-Logo.wine.png");

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result.type === "success") {
        console.log(result.uri, result.type, result.name, result.size);

        setSelectedFile(result);

        if (result.uri) {
          // Check if result.uri is not null or undefined
          await uploadFileToCloudStorage("Google Drive", result.uri);
        } else {
          console.error("File URI is null or undefined.");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const uploadFileToCloudStorage = async (cloudService, fileUri) => {
    try {
      const googleDriveConfig = {
        clientId: "YOUR_GOOGLE_DRIVE_CLIENT_ID",
        redirectUrl: "YOUR_GOOGLE_DRIVE_REDIRECT_URL",
        scopes: [
          "openid",
          "offline_access",
          "https://www.googleapis.com/auth/drive.file",
        ],
        serviceConfiguration: {
          authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth",
          tokenEndpoint: "https://accounts.google.com/o/oauth2/token",
        },
      };

      const oneDriveConfig = {
        clientId: "YOUR_ONE_DRIVE_CLIENT_ID",
        redirectUrl: "YOUR_ONE_DRIVE_REDIRECT_URL",
        scopes: ["openid", "offline_access", "files.readwrite"],
        serviceConfiguration: {
          authorizationEndpoint:
            "https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/authorize",
          tokenEndpoint:
            "https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/token",
        },
      };

      let authConfig;

      if (cloudService === "Google Drive") {
        authConfig = googleDriveConfig;
      } else if (cloudService === "OneDrive") {
        authConfig = oneDriveConfig;
      } else {
        console.error("Unsupported cloud service:", cloudService);
        return;
      }

      const authResult = await authorize(authConfig);

      console.log(`File uploaded to ${cloudService}.`);
    } catch (error) {
      console.error("Cloud storage integration error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Upload Documents</Text>
      <Text style={styles.descriptionText}>
        Select and upload documents for learning and development purposes.
      </Text>

      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Text style={styles.uploadButtonText}>Upload Document</Text>
      </TouchableOpacity>

      {selectedFile && (
        <View style={styles.selectedFileContainer}>
          <Text style={styles.selectedFileText}>
            Selected File: {selectedFile.name}
          </Text>
          <Text style={styles.fileInfoText}>
            Type: {selectedFile.type}, Size:{" "}
            {(selectedFile.size / 1024).toFixed(2)} KB
          </Text>
          <Text style={styles.fileInfoText}>Location: {selectedFile.uri}</Text>
        </View>
      )}

      <View style={styles.cloudOptionsContainer}>
        <CloudOption
          icon={googleDriveIcon}
          text="Google Drive"
          onPress={() =>
            uploadFileToCloudStorage("Google Drive", selectedFile.uri)
          }
        />
        <CloudOption
          icon={oneDriveIcon}
          text="OneDrive"
          onPress={() => uploadFileToCloudStorage("OneDrive", selectedFile.uri)}
        />
      </View>
    </SafeAreaView>
  );
};

const CloudOption = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.cloudOption} onPress={onPress}>
    <Image source={icon} style={styles.cloudIcon} />
    <Text style={styles.cloudOptionText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "crimson",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedFileContainer: {
    marginTop: 20,
    backgroundColor: "#e6f7ff",
    padding: 10,
    borderRadius: 8,
  },
  selectedFileText: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 5,
  },
  fileInfoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  cloudOptionsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  },
  cloudOption: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  cloudIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cloudOptionText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "800",
  },
});

export default UploadScreen;
