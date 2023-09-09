import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';

const DateSheet = () => {

  const midsDateSheet = [
    {
      date: "30-10-23",
      day: "Mon",
      startTime: "09:30 AM",
      course: "Mobile Application & Development"
    },
    {
      date: "01-11-23",
      day: "Tue",
      startTime: "09:30 AM",
      course: "Computer Graphics"
    },
    {
      date: "02-11-23",
      day: "Wed",
      startTime: "09:30 AM",
      course: "Introduction to Sociology"
    },
    {
      date: "03-11-23",
      day: "Thur",
      startTime: "09:30 AM",
      course: "Parallel & Distributed Compting"
    },
    {
      date: "04-11-23",
      day: "Fri",
      startTime: "09:30 AM",
      course: "Compiler Construction"
    },
  ]
  const finalsDateSheet = [
    {
      date: "30-10-23",
      day: "Mon",
      startTime: "09:30 AM",
      course: "Mobile Application & Development"
    },
    {
      date: "01-11-23",
      day: "Tue",
      startTime: "09:30 AM",
      course: "Computer Graphics"
    },
    {
      date: "02-11-23",
      day: "Wed",
      startTime: "09:30 AM",
      course: "Introduction to Sociology"
    },
    {
      date: "03-11-23",
      day: "Thur",
      startTime: "09:30 AM",
      course: "Parallel & Distributed Compting"
    },
    {
      date: "04-11-23",
      day: "Fri",
      startTime: "09:30 AM",
      course: "Compiler Construction"
    },
  ]

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="bg-[#80B527] flex-row justify-center p-5 mb-3">
          <Icon2 name="calendar" size={24} color="#fff" />
          <Text className="text-xl text-white ml-2">Date Sheet</Text>
        </View>
        <ScrollView>
          <View className="flex-col mb-4">
            <Text className="text-center bg-[#739b2d] p-3 text-white text-lg">Mids Date Sheet</Text>
            <View className="bg-[#bff168] p-2 pl-4 pr-4 flex-row justify-between">
              <Text className="w-1/6 text-center">Date</Text>
              <Text className="w-1/10 text-center">Day</Text>
              <Text className="w-1/6 text-center"> Time</Text>
              <Text className="w-1/2 text-center">Course Title</Text>

            </View>
            {midsDateSheet.map((mids, index) => (
              <View key={index} className="p-2 flex-row justify-between border-b-2 border-gray-400">
                <Text className="w-1/6 text-center ">{mids.date}</Text>
                <Text className="w-1/10 text-center">{mids.day}</Text>
                <Text className="w-1/6 text-center">{mids.startTime}</Text>
                <Text className="w-1/2 text-center">{mids.course}</Text>

              </View>
            ))}
          </View>
          <View className="flex-col mb-4">
            <Text className="text-center bg-[#739b2d] p-3 text-white text-lg">Finals Date Sheet</Text>
            <View className="bg-[#bff168] p-2 pl-4 pr-4 flex-row justify-between">
              <Text className="w-1/6 text-center">Date</Text>
              <Text className="w-1/10 text-center">Day</Text>
              <Text className="w-1/6 text-center">Time</Text>
              <Text className="w-1/2 text-center">Course Title</Text>

            </View>
            {finalsDateSheet.map((finals, index) => (
              <View key={index} className="p-2 flex-row justify-between border-b-2 border-gray-400">
                <Text className="w-1/6 text-center">{finals.date}</Text>
                <Text className="w-1/10 text-center">{finals.day}</Text>
                <Text className="w-1/6 text-center">{finals.startTime}</Text>
                <Text className="w-1/2 text-center">{finals.course}</Text>

              </View>
            ))}
          </View>
        </ScrollView>


      </View>
      <Footer />
    </SafeAreaView>
  )
}

export default DateSheet;