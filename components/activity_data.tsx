import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default class ActivityData extends React.Component<any, any> {

  public render() {
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
    justifyContent: "space-around",
  },
  Activity_row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Activity_text: {
    fontSize: 17,
    paddingLeft: 10,
  },
});
