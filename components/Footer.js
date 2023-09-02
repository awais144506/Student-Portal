import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import { useAuth } from '../api/auth/AuthProvider';
const Footer = () => {
  const { user,logout } = useAuth();


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#4E7AC8', padding: 16, alignItems: 'center' }}>
      {/* Settings button */}
      <TouchableOpacity>
        <Icon name="cog" size={30} color="white" />
      </TouchableOpacity>

      {/* Home button with white circle background */}
      <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 50, padding: 15 }}>
        <Icon name='home' size={24} color="gray" />
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity 
      
      onPress={() => logout()}>
        <Icon2 name='log-out' size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
