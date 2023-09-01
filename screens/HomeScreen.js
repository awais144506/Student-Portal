import React, { useEffect, useState } from 'react';
import { Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../api/auth/AuthProvider';

const HomeScreen = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user) {
      const userUsername = user.name;
      setUsername(userUsername);
    }
  }, [user]);

  return (
    <SafeAreaView>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Welcome {username}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
