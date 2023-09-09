import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';

const FeeDetails = () => {
  const route = useRoute();
  const feeStatus = route.params?.feeStatus || 'Not found';

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="bg-[#EB7724] flex-row justify-center p-5 mb-3">
          <Icon name="sticky-note" size={24} color="#ffff" />
          <Text className="text-xl text-white ml-2">Fee Status</Text>
        </View>
        <View className="flex mt-20 mb-[130px] items-center justify-center">
          <View className="bg-white p-8 w-80 rounded-lg shadow-md">
            <Text className="text-2xl font-bold mb-4 text-center">Fee Status</Text>
            {feeStatus === 'Paid' ? (
              <Text className="text-2xl font-bold mb-4 text-center text-[#65A000]">Paid</Text>
            ) : (
              <Text className="text-2xl font-bold mb-4 text-center text-[#D40B0B]">Pending</Text>
            )}
            <TouchableOpacity className="p-3 bg-[#EB7724] w-70 rounded-lg">
              <Text className="text-white text-center font-semibold">Download Fee Voucher</Text>
            </TouchableOpacity>
          </View>
          <View className="p-5">
            <Text>Instructions:</Text>
            <Text>
              1- Dear student please pay your fee before Due Date.{'\n'}
              2- Thesis Fee @ Rs. 3000/- will be charged in the final semester in addition to above.{'\n'}
              3- Project Fee @ Rs. 1500/- will be charged at the time of Project submission.{'\n'}
              4- Degree Verification on Fee @ Rs. 1500/- will be charged in the 3rd semester in addition to above.{'\n'}
              5- Degree Fee @ Rs. 2500/- will be charged in the final semester in addition to above.{'\n'}
              6- Bank Address: <Text className="text-[#D40B0B]">Taufeel Shaheed Road Branch, Near Bus Terminal Sahiwal</Text>
            </Text>
          </View>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default FeeDetails;
