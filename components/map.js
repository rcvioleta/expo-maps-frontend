import { Button, Text, View } from "react-native";

export default function Map({ navigation, route }) {
  return (
    <View>
      <Text>Map Component</Text>
      <Text>Route params: {JSON.stringify(route.params)}</Text>

      <Button title="Back to Home" onPress={() => navigation.push("Main")} />
    </View>
  );
}
