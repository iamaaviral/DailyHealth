import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default class Activity_data extends React.Component<any,any> {

  render() {
      return (
        <View style={styles.Activity}>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
          <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>123</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  Activity_row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  Activity_text: {
    paddingLeft: 10,
    fontSize: 17
  }
});
