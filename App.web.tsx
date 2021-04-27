import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { default_Regular } from "constants/fonts";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {"\n"}React Native Web!</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
          Vibration.vibrate();
        }}
        style={styles.button}
      >
        <Text>Click me!</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="backspace" size={55} color={"darkgray"} />
      <Text>You clicked {count} times!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3E8BD",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ADBDFF",
    padding: 5,
    marginVertical: 20,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 40,
    fontFamily: default_Regular,
    fontWeight: "800",
    fontStyle: "italic",
  },
});

export default App;
