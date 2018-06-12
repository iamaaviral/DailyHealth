import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Tabs } from "./config/router";

export default class Middle extends React.Component<any,any> {


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.body}>
         <Tabs />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  body: {
    flex: 15,
    flexDirection: "column",
    alignSelf: "stretch"
  }
});
