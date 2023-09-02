import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../api/auth/AuthProvider';
import { db } from '../Appwrite';
import { Query } from 'appwrite';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import Footer from '../components/Footer';


const HomeScreen = () => {
  const { user } = useAuth();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
  
      // Replace 'fieldName' with the actual field name in your documents
      // that represents the user identifier
      const fieldName = user.userId;
  
      const query = new Query();
      query
        
          // Replace 'fieldName' with the actual field name in your documents
          // that represents the user identifier
          new Query.equal('name', fieldName),
       
      // Limit the result to 1 document (assuming you want only one user's document)
  
      db.listDocuments('64e7be0277a594862d45', '64f0f520befd69e9ef44', [], 0, 1, query)
        .then(function (response) {
          console.log('Fetched document:', response);
          if (response.documents.length > 0) {
            setStudent(response.documents[0]);
          }
  
          setLoading(false);
        })
        .catch(function (error) {
          console.log('Error fetching user document:', error);
          setLoading(false);
        });
    }
  }, [user]);
  



  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top-right notification bell */}
      <TouchableOpacity className="flex items-end mr-7 mt-5">
        <Icon name="bell" size={24} color="gray" />
      </TouchableOpacity>

      {/* Centered profile image */}
      <View className='flex-1 items-center mt-8'>
        {student && (
          <Image
            source={{ uri: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user-thumbnail.png" }} // Replace with the actual image source
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        )}
        {student && (
          <View className="bg-white shadow-lg shadow-gray-400 p-8 flex mt-5 pl-5 rounded-lg ">
            <Text className="font-bold mb-1">ROLL NO: <Text className="font-normal">{student.rollNo}</Text></Text>
            <Text className="font-bold mb-1">NAME: <Text className="font-normal">{student.name}</Text></Text>
            <Text className="font-bold mb-1">FATHER NAME: <Text className="font-normal"> {student.fatherName}</Text></Text>
            <Text className="font-bold mb-1">GENDER: <Text className="font-normal"> {student.gender}</Text></Text>
            <Text className="font-bold mb-1">DEPARTMENT: BS <Text className="font-normal">({student.department})</Text></Text>
            <Text className="font-bold mb-1">SESSION: <Text className="font-normal">{student.classSession} - {student.fall}</Text></Text>
            <Text className="font-bold mb-1">TOTAL REGD COURSES: <Text className="font-normal">{student.courses}</Text></Text>
            <Text className="font-bold mb-1">CGPA: <Text className="font-normal">{student.cgpa}</Text></Text>
          </View>
        )}
      </View>

      {/* Card with student details */}

      {/* Four small cards with text */}
      <View className="p-8">

        <View className="flex-row justify-between  mb-2 ">
          {/* Card 1 */}
          <TouchableOpacity className="w-1/2 bg-white p-4 rounded shadow-xl shadow-gray-300 mr-2 ">
          <Icon name="chalkboard-teacher" size={24} color="#4E7AC8" />
            <Text className="text-[#4E7AC8]">Class {'\n'}Proceedings</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-1/2 bg-white p-4 rounded shadow-lg shadow-gray-300 ">
          <Icon2 name="bar-graph" size={24} color="#F6508E" />
            <Text className="text-[#F6508E]">Results</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between ">
          {/* Card 1 */}
          <TouchableOpacity className="w-1/2 bg-white p-4 rounded shadow-xl shadow-gray-300 mr-2 ">
          <Icon2 name="calendar" size={24} color="#80B527" />
            <Text className="text-[#80B527]">Date Sheet/{'\n'}Time Table</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="w-1/2 bg-white p-4 rounded shadow-lg shadow-gray-300 ">
          <Icon name="sticky-note" size={24} color="#EB7724" />
            <Text className="text-[#EB7724]">Fee Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Card 3 */}
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;