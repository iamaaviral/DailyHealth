import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import Activity from "./Activity";

export default class Middle extends Component {


  render() {
    return (
        <View style={styles.slide}>
          <View style={styles.Activity_row}>
            <View style={styles.slide}>
            </View>
          </View>
          <Activity />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1
  },
  Activity_row: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
