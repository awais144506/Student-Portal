import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native';
const ClassProceddings = () => {
    const Subjects = [
        {
            id: 1,
            title: "Mobile & Application Development",
            Code: "CSI-601",
            Credit: "3(2-1)",
            TotalClasses: "32",
            Present: "29",
            Absent: "3",
            faculty:"Aqib Ali"

        },
        {
            title: "Computer Graphics",
            Code: "CSI-603",
            Credit: "3(2-1)",
            TotalClasses: "32",
            Present: "28",
            Absent: "4",
            faculty:"Farwa Ahmad"
        },
        {
            title: "Introduction to Socialogy",
            Code: "SOC-307",
            Credit: "3(3-0)",
            TotalClasses: "32",
            Present: "30",
            Absent: "2",
            faculty:"Mariam Ali"
        },
        {
            title: "Parallel & Distributed Computing",
            Code: "CSI-605",
            Credit: "3(3-0)",
            TotalClasses: "32",
            Present: "31",
            Absent: "1",
            faculty:"Aveen Aqib"
        },
        {
            title: "Compiler Construction",
            Code: "CSI-501",
            Credit: "3(3-0)",
            TotalClasses: "32",
            Present: "28",
            Absent: "4",
            faculty:"Insha Ali"
        },
    ]

    const navigation = useNavigation()
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1">
                <View className="bg-[#4E7AC8] flex-row justify-center p-5 mb-3">
                    <Icon name="chalkboard-teacher" size={24} color="#ffffff" />
                    <Text className="text-xl text-white ml-2">Class Procedings</Text>
                </View>
                <ScrollView className="flex-1">
                        <View className="flex justify-center items-center">
                            {Subjects.map((subject, index) => (
                                <TouchableOpacity onPress={()=>navigation.navigate("SubjectProgress",{ id:subject.id,title: subject.title,faculty:subject.faculty })}>
                                <View key={index} className="bg-white p-6 rounded shadow-md w-[360px] mb-6">
                                    <Text className="text-xl font-semibold mb-4">{subject.title}</Text>
                                    <View className="flex-row justify-between mb-2">
                                        <Text>Course Code: {subject.Code}</Text>
                                        <Text>Credit Hours: {subject.Credit}</Text>
                                    </View>
                                    <View className="flex-row justify-between">
                                        <Text>Total Classes: {subject.TotalClasses}</Text>
                                        <Text>Presents: <Text className="text-green-600">{subject.Present}</Text></Text>
                                        <Text>Absents: <Text className="text-red-600">{subject.Absent}</Text></Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                </ScrollView>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default ClassProceddings
