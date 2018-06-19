import * as React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Main from "./components/Main";
import LoginForm from "./components/register/LoginForm";

import { StackNavigator } from "react-navigation";

// const word: any = (data).name;

const instructions = Platform.select({
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
});

// export default class App extends Component<any, any> {
//   public render() {
//     return (<LoginForm /> );
//   }
// }

const App = StackNavigator({
  ScreenOne: { screen: LoginForm},
  ScreenTwo: { screen: Main},
});

export default App;
