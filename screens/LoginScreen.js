import React, { useState,useEffect } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { account } from '../Appwrite';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../api/auth/AuthProvider';
const LoginScreen = () => {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user,login,error} = useAuth()

    
    useEffect(() => {
        if (user) {
           navigation.navigate('Home')
        }
    })
    const handleLogin =  () => {
       login(email,password)
    };
    return (
        <SafeAreaView>
            <Image
                source={require('../assets/campus.jpg')}
                style={{ width:"auto", height: 250 }}
            />
        <View className=" items-center justify-center m-4 mt-10">
                <View className="mb-4">
                    <Text className="font-semibold mb-2">User Name</Text>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        className="bg-gray-200 p-2 w-64"
                    />
                    <Text className="font-semibold mt-3 mb-2">Password</Text>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        className="bg-gray-200 p-2 w-64"
                    />
                </View>
                <TouchableOpacity
                    onPress={handleLogin}
                    className="p-3 bg-[#4E7AC8] w-64 rounded-lg"
                >
                <Text className="text-center text-lg text-white font-bold">Login</Text>
                </TouchableOpacity>
               {error && <Text className="text-red-500 mt-2">{error}</Text>} 
                <TouchableOpacity className="mt-2">
                    <Text className="text-[#4E7AC8] underline">Forget Your Password?</Text>
                </TouchableOpacity>
                <Text className="text-center mt-4 text-gray-500">
                    Note: If you are a first-semester student, username is e.g 36502-123456789-8@gcuf.com & password is your CNIC Number
                </Text>
            </View>
            <Image
                source={require('../assets/footer-logo.jpg')}
                style={{ width: 'auto', height: 100 }}
                className="mt-24"
            />
        </SafeAreaView>
    )
}

export default LoginScreen

