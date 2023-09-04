import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
const ChangePassword = () => {
    return (
        <SafeAreaView>
            <View>

                <View className="flex mt-20 mb-60 items-center justify-center">
                    <View className="bg-white p-8 rounded shadow-md w-80">
                        <Text className="text-2xl font-bold mb-4 text-center">Change Password</Text>

                        <View className="mb-4">
                            <Text className="block text-gray-700 text-sm font-bold mb-2">
                                Current Password:
                            </Text>
                            <TextInput
                                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="currentPassword"
                                type="password"
                                placeholder="Current Password"
                            />
                            <Text className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                                New Password:
                            </Text>
                            <TextInput
                                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="currentPassword"
                                type="password"
                                placeholder="New Password"
                            />
                            <Text className="block text-gray-700 text-sm font-bold mb-2 mt-3">
                                Re-Type New Password:
                            </Text>
                            <TextInput
                                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="currentPassword"
                                type="password"
                                placeholder="Re-Type New Password"
                            />
                        </View>

                        <TouchableOpacity className="p-3 bg-[#4E7AC8] w-64 rounded-lg" >
                            <Text className="text-center text-lg text-white font-bold">Change Password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <Footer/>
            </View>
        </SafeAreaView>
    )
}

export default ChangePassword