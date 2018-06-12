import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Activity_list from "./activity_list";

export default class cgs_page extends React.Component<any,any> {

  render() {
      return (
        <View style={styles.Activity}>
            <Activity_list />
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
