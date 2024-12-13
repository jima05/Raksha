import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-20">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" className="top-15 py-15">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
