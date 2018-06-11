/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import * as React from 'react'
import { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from "./components/Header";
import Bmi from "./components/bmi";
import Middle from "./components/middle"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
        <Middle />
        </View>
        <Bmi />
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
    // flex: 25,
    // justifyContent: 'space-between',
    flex: 15,
    flexDirection: "column",
    alignSelf: "stretch",
    padding: 10,
    backgroundColor: "rgba(0,170,170,0.5)",
    borderBottomWidth: 2,
    borderColor: "grey"
  }
});
