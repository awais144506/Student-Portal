import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './Footer';

const SubjectsProgress = ({ route }) => {
    const { id, title, faculty } = route.params;

    const getMarksData = (subjectId) => {
        const marksData = {
            1: {
                assignments: [
                    {
                        date: "11-07-23",
                        topic: "What is Application Development",
                        total: 10,
                        obtained: 9.8,
                        percentage: 90
                    },
                    // Add more assignments for subject with ID 1
                ],
                quizes: [
                    {
                        date: "11-07-23",
                        topic: "Quiz 1",
                        total: 10,
                        obtained: 8,
                        percentage: 80
                    },
                    // Add more quizzes for subject with ID 1
                ],
                mids: [
                    {
                        date: "11-07-23",
                        topic: "Mids",
                        total: 18,
                        obtained: 14.0,
                        percentage: 90
                    },
                ]
            },
        };

        return marksData[subjectId] || { assignments: [], quizes: [], mids: [] };
    }

    const { assignments, quizes, mids } = getMarksData(id);

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1">
                <View className="bg-[#4E7AC8] flex justify-center p-5 mb-5">
                    <Text className="text-xl text-white mb-2 text-center">{title}</Text>
                    <Text className="text-xl text-white text-center ">Faculty: {faculty}</Text>
                </View>
                <ScrollView>
                    <View className="flex-col mb-4">
                        <Text className="text-center bg-blue-500 p-3 text-white text-lg">Assignments</Text>
                        <View className="bg-[#ABC8FC] p-2 pl-4 pr-4 flex-row justify-between">
                            <Text className="w-1/6 text-center">Date</Text>
                            <Text className="w-2/6 text-center">Topic</Text>
                            <Text className="w-1/6 text-center">Total</Text>
                            <Text className="w-1/6 text-center">Obtained</Text>
                            <Text className="w-1/6 text-center">%</Text>
                        </View>
                        {assignments.map((assignment, index) => (
                            <View key={index} className="p-2 flex-row justify-between ">
                                <Text className="w-1/6 text-center">{assignment.date}</Text>
                                <Text className="w-2/6 text-center">{assignment.topic}</Text>
                                <Text className="w-1/6 text-center">{assignment.total}</Text>
                                <Text className="w-1/6 text-center">{assignment.obtained}</Text>
                                <Text className="w-1/6 text-center">{assignment.percentage}</Text>
                            </View>
                        ))}
                    </View>
                    <View className="flex-col mb-4">
                        <Text className="text-center bg-blue-500 p-3 text-white text-lg">Quizes</Text>
                        <View className="bg-[#ABC8FC] p-2 pl-4 pr-4 flex-row justify-between">
                            <Text className="w-1/6 text-center">Date</Text>
                            <Text className="w-2/6 text-center">Topic</Text>
                            <Text className="w-1/6 text-center">Total</Text>
                            <Text className="w-1/6 text-center">Obtained</Text>
                            <Text className="w-1/6 text-center">%</Text>
                        </View>
                        {quizes.map((quizes, index) => (
                            <View key={index} className="p-2 flex-row justify-between">
                                <Text className="w-1/6 text-center">{quizes.date}</Text>
                                <Text className="w-2/6 text-center">{quizes.topic}</Text>
                                <Text className="w-1/6 text-center">{quizes.total}</Text>
                                <Text className="w-1/6 text-center">{quizes.obtained}</Text>
                                <Text className="w-1/6 text-center">{quizes.percentage}</Text>
                            </View>
                        ))}
                    </View>
                    <View className="flex-col mb-4">
                        <Text className="text-center bg-blue-500 p-3 text-white text-lg">Mids Result</Text>
                        <View className="bg-[#ABC8FC] p-2 pl-4 pr-4 flex-row justify-between">
                            <Text className="w-1/6 text-center">Date</Text>
                            <Text className="w-2/6 text-center">Topic</Text>
                            <Text className="w-1/6 text-center">Total</Text>
                            <Text className="w-1/6 text-center">Obtained</Text>
                            <Text className="w-1/6 text-center">%</Text>
                        </View>
                        {mids.map((mids, index) => (
                            <View key={index} className="p-2 flex-row justify-between">
                                <Text className="w-1/6 text-center">{mids.date}</Text>
                                <Text className="w-2/6 text-center">{mids.topic}</Text>
                                <Text className="w-1/6 text-center">{mids.total}</Text>
                                <Text className="w-1/6 text-center">{mids.obtained}</Text>
                                <Text className="w-1/6 text-center">{mids.percentage}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default SubjectsProgress;