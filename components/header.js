import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});
