import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Designed & Built by Rogene Cris Violeta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});
