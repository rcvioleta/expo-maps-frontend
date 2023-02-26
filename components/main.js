import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data) => 10;

export default function Main({ navigation, route }) {
  const [pickUpLocation, setPickUpLocation] = React.useState("");
  const [dropOffLocation, setDropOffLocation] = React.useState("");
  const [localRoadUpdates, setLocalRoadUpdates] = React.useState(
    "<Text style={{fontSize: 20}}>Loading news...</Text>"
  );

  React.useEffect(() => {
    fetch("https://decisive-fuschia-resistance.glitch.me/api/news-entries")
      .then((res) => res.text())
      .then((htmlString) => {
        setLocalRoadUpdates(htmlString);
      })
      .catch((err) => {
        console.log("Failed fetch news: ", err);
      });
  }, [localRoadUpdates]);

  return (
    <View style={styles.main}>
      <View
        style={
          ({
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
          },
          styles.box)
        }
      >
        <Text style={{ fontSize: 20 }}>Local Road Updates</Text>
        <WebView
          style={{ marginTop: 20 }}
          source={{
            html: localRoadUpdates,
          }}
        />
      </View>

      <View style={(styles.formGroup, styles.box)}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Search PUJ Routes
        </Text>

        <TextInput
          style={styles.formGroupInput}
          onChangeText={setPickUpLocation}
          placeholder="Enter pick-up location"
          value={pickUpLocation}
        />
        <TextInput
          style={styles.formGroupInput}
          onChangeText={setDropOffLocation}
          placeholder="Enter drop-off location"
          value={dropOffLocation}
        />
        <TouchableOpacity
          onPress={() => console.log("button pressed!")}
          style={styles.formGroupButton}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text
            onPress={() =>
              navigation.navigate("Map", {
                pickUp: pickUpLocation,
                dropOff: dropOffLocation,
              })
            }
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.box}>
        <WebView
          source={{
            uri: `https://www.google.com/maps/dir/Wireless+Elementary+School,+Father+Selga+Street,+Barangay+6-A,+Davao+City,+Davao+del+Sur,+Philippines/D'Morvie+Suites,+224+San+Pedro+St,+Poblacion+District,+Davao+City,+8000+Davao+del+Sur/@7.06942,125.6008068,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x32f96d7183edc08f:0x380a5c30fc7371e!2m2!1d125.6010835!2d7.0724668!1m5!1m1!1s0x32f96d70abb9275f:0xfc949dae5914a661!2m2!1d125.6039887!2d7.0686126!3e0`,
          }}
        />
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "85%",
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "100%",
    height: "50%",
    padding: 20,
  },
  formGroup: {
    padding: 20,
    borderWidth: 1,
    width: "100%",
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  formGroupInput: {
    color: "#000",
    padding: 5,
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
  },
  formGroupButton: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "orange",
    color: "#fff",
    alignSelf: "flex-start",
  },
});
