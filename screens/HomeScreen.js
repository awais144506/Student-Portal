import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../api/auth/AuthProvider';
import { account } from '../Appwrite'; // Import the correct module for fetching user data

const HomeScreen = () => {
  const { user } = useAuth();
  const [studentName, setStudentName] = useState('');
  const [rollNO, setRollNo] = useState('');

  useEffect(() => {
    if (user) {
      account
        .get(user.$id) 
        .then(function (userData) {
          const userName = userData.name;
          const userRollNo = userData.rollNO;
          setStudentName(userName);
          setRollNo(userRollNo);
        })
        .catch(function (error) {
          console.log('Error fetching user data:', error);
        });
    }
  }, [user]);

  return (
    <SafeAreaView>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Welcome {studentName}</Text>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Roll No: {rollNO}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
