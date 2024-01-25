import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Badge, Button } from 'react-native-elements';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New Course Available!',
      content: 'Explore our latest course on inclusive education.',
    },
    {
      id: '2',
      title: 'Upcoming Webinar',
      content: 'Join our webinar on effective teaching strategies.',
    },
    {
      id: '3',
      title: 'Assignment Reminder',
      content: 'Don’t forget to submit your assignment by the end of the week.Don’t.',
    },
    
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDelete = (id) => {
    setSelectedNotification(id);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    const updatedNotifications = notifications.filter((item) => item.id !== selectedNotification);
    setNotifications(updatedNotifications);
    setDeleteModalVisible(false);
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Badge value="SEN" status="primary" containerStyle={styles.badgeContainer} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationContent}>{item.content}</Text>
      </View>
    </View>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => handleDelete(item.id)}
      >
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <SwipeListView
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalText}>Are you sure you want to delete this notification?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setDeleteModalVisible(false)} type="outline" />
              <Button title="Confirm" onPress={confirmDelete} buttonStyle={styles.deleteButton} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    marginRight: 10,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 5,
  },
  notificationContent: {
    fontSize: 16,
    width:"50%",
    color: '#555',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    marginTop: 10,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: '40%',
    backgroundColor: '#FF5757',
    borderRadius: 5,
  },
  backTextWhite: {
    color: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: '#FF5757',
  },
});

export default NotificationsScreen;
