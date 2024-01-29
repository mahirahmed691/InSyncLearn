// Import necessary components and icons
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

// MessagingScreen component
const MessagingScreen = ({ navigation }) => {
  // State variables
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [recipients, setRecipients] = useState([]);

  // Function to handle sending a message
  const handleSend = () => {
    if (subject.trim() !== '' && message.trim() !== '') {
      // Add logic to send message (e.g., API call)
      const newMessage = {
        id: messages.length + 1,
        subject: subject,
        text: message,
        sender: 'Admin',
        recipients: recipients.join(', '),
      };
      setMessages([...messages, newMessage]);
      setSubject('');
      setMessage('');
      setRecipients([]);
    }
  };

  // Function to handle adding a recipient
  const handleAddRecipient = () => {
    // Add logic to select recipients
    setRecipients([...recipients, 'New Recipient']);
  };

  // JSX
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Messaging</Text>
        <TouchableOpacity onPress={handleAddRecipient}>
          <FontAwesome name="plus" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      {/* Message input section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={(text) => setSubject(text)}
          placeholder="Subject"
          placeholderTextColor="#999"
        />
        <View style={styles.recipientsContainer}>
          {recipients.map((recipient, index) => (
            <Text key={index} style={styles.recipient}>
              {recipient}
            </Text>
          ))}
        </View>
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Compose your message..."
          placeholderTextColor="#999"
          multiline
        />
        {/* Send button */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      {/* Display messages */}
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={styles.message}>
            <Text style={styles.sender}>{msg.sender}</Text>
            <Text style={styles.subject}>{msg.subject}</Text>
            <Text style={styles.recipients}>{msg.recipients}</Text>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  recipientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  recipient: {
    backgroundColor: '#609BCB',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  sendButton: {
    backgroundColor: '#609BCB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  messagesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  message: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  subject: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  recipients: {
    color: '#666',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});

// Export the component
export default MessagingScreen;
