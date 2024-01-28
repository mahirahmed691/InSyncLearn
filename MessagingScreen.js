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
import { AntDesign } from '@expo/vector-icons';

const MessagingScreen = ({ navigation }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (subject.trim() !== '' && message.trim() !== '') {
      // Add logic to send message (e.g., API call)
      const newMessage = {
        id: messages.length + 1,
        subject: subject,
        text: message,
        sender: 'Admin',
      };
      setMessages([...messages, newMessage]);
      setSubject('');
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Messaging</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={(text) => setSubject(text)}
          placeholder="Subject"
          placeholderTextColor="#999"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Compose your message..."
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={styles.message}>
            <Text style={styles.sender}>{msg.sender}</Text>
            <Text style={styles.subject}>{msg.subject}</Text>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

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
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MessagingScreen;
