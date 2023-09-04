import { View ,Text} from "react-native";

function LoadingPage() {
    return (
        <View className="flex flex-col items-center justify-center h-screen">
          <Text className="text-lg font-semibold mb-4">Loading...</Text>
          <View className="border-t-4 border-gray-300 border-dashed animate-spin rounded-full w-12 h-12"></View>
        </View>
      );
    };

export default LoadingPage