import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'

const LoginParts = () => {
    return (
        <SafeAreaView className="bg-white">
            <View className="items-center mt-5">
                <View className='mb-5' >
                    <Text className="font-semibold mb-2">User Name</Text>
                    <TextInput placeholder='Enter Your CNIC No...' className="bg-gray-200 p-3 w-80"></TextInput>
                    <Text className="font-semibold mt-3 mb-2">Password</Text>
                    <TextInput placeholder='Enter Your Password' className="bg-gray-200 p-3 w-80"></TextInput>
                </View>
                <TouchableOpacity className="p-4 bg-[#4E7AC8] w-80 rounded-lg">
                    <Text className="text-center text-lg text-white font-bold">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-3">
                    <Text className="text-[#4E7AC8] underline">Forget Your Password?</Text>
                </TouchableOpacity>
                <Text className='text-center w-80 mt-3 text-gray-500'>Note: If you are first semester student, username & password is your CNIC No.</Text>
            </View>
            <Image
                source={require('../assets/footer-logo.jpg')}
                style={{ width: "auto", height: 100 }}
                className="mt-20"
            />
        </SafeAreaView>
    )
}

export default LoginParts

