import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon2 from 'react-native-vector-icons/Entypo';
import React from 'react'
import Footer from '../components/Footer';


const Results = () => {
  const marks =[
    {
      title:"Mobile & Application Development",
      sessional:"9",
      lab:"19",
      mids:"14",
      final:"25",
      marks:"44",
      total:"60",
      grade:"B+"
    },
    {
      title:"Computer Graphics",
      sessional:"9",
      lab:"19",
      mids:"14",
      final:"25",
      marks:"44",
      total:"60",
      grade:"B+"
    },
    {
      title:"Introduction to Sociology",
      sessional:"9",
      lab:"19",
      mids:"14",
      final:"25",
      marks:"44",
      total:"60",
      grade:"B+"
    },
    {
      title:"Parallel & Distributed Compting",
      sessional:"9",
      lab:"19",
      mids:"14",
      final:"25",
      marks:"44",
      total:"60",
      grade:"B+"
    },
    {
      title:"Compiler Construction",
      sessional:"9",
      lab:"19",
      mids:"14",
      final:"25",
      marks:"44",
      total:"60",
      grade:"B+"
    },
  ]
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="bg-[#F6508E] flex-row justify-center p-5 mb-3">
          <Icon2 name="bar-graph" size={24} color="#fff" />
          <Text className="text-xl text-white ml-2">Results</Text>
        </View>
        
        {/* Dropdown for Semesters */}
        <View className="flex-row justify-center p-3">
         <Text className="text-center text-lg font-semibold">Semester 7</Text>
        </View>
        
        {/* Line */}
        <View className="bg-[#969696] h-1 w-full"></View>

        {/* GPA and CGPA */}
        <View className="flex-row justify-between p-5">
          <Text className='font-bold text-xl '>GPA: <Text className="text-green-600">3.58</Text></Text>
          <Text className='font-bold text-xl'>CGPA:<Text className="text-red-600">3.48</Text></Text>
        </View>
        <View className="flex-row justify-between pl-5 pr-5 mb-5">
          <Text className='font-bold text-sm'>Obtained Marks: 235.5</Text>
          <Text className='font-bold text-sm'>Total Marks: 320</Text>
        </View>

        <ScrollView>
        {marks?.map((marks,index)=>(
          <View className="p-3" key={index}>
            <TouchableOpacity>

            <View  className="bg-white p-3 mb-3 rounded shadow-md">
              <Text className="text-xl font-semibold mb-2">{marks.title}</Text>
              <View className="flex-row justify-between mb-2">
                <Text>Sessional Marks: {marks.sessional}/12</Text>
                <Text>Final Lab Marks: {marks.lab}/20</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text>Mids Marks: {marks.mids}/18</Text>
                <Text>Final Marks: {marks.final}/30</Text>
              </View>
              <View className="flex-row justify-between">
                <Text>Marks: <Text className="text-green-600">{marks.marks}</Text></Text>
                <Text>Total Marks: <Text className="text-red-600">{marks.total}</Text></Text>
                <Text>Grade:<Text className="text-green-600">{marks.grade}</Text></Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        ))}
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  )
}

export default Results;
