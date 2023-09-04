import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import { useAuth } from '../api/auth/AuthProvider';
import Modal from 'react-native-modal';

const Footer = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();

  // State to control the visibility of the confirmation modal
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Function to handle logout when confirmed
  const handleLogout = () => {
    logout();
    toggleModal(); // Close the modal after logout
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#4E7AC8', padding: 16, alignItems: 'center' }}>
      {/* Settings button */}
      <TouchableOpacity onPress={() => navigation.navigate("ChangePass")}>
        <Icon name="cog" size={30} color="white" />
      </TouchableOpacity>

      {/* Home button with white circle background */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: 'white', borderRadius: 50, padding: 15 }}>
        <Icon name='home' size={24} color="gray" />
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity onPress={toggleModal}>
        <Icon2 name='log-out' size={30} color="white" />
      </TouchableOpacity>

      {/* Logout Confirmation Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 40 }}>
          <Text className="text-center text-lg font-semibold">Do you want to logout?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity onPress={handleLogout} className="p-3 bg-[#4E7AC8] w-36 rounded-lg">
              <Text className="text-white text-center">Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} className="p-3 bg-[#ffffff] w-30 rounded-lg border-2 border-gray-300">
              <Text className="text-[#e95151] text-center">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Footer;
