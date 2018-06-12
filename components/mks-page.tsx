import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Activity_list from "./activity_list";
import Activity_data from "./activity_data";

export default class mks_page extends React.Component<any,any> {

  render() {
      return (
        <View style={styles.Activity}>
          <View>
            <Activity_list />
          </View>
          <View>
            <Activity_data />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  }
});
