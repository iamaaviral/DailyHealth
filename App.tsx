import * as React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Bmi from "./components/bmi";
import { Tabs } from "./components/config/router";
import Header from "./components/Header";
import * as data from "./customData.json";

export interface IFrontPageProps {
  data: number;

}

export interface IPinPageState {
  data: any;
}

// const word: any = (data).name;

const instructions = Platform.select({
  android: "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" +
    "Cmd+D or shake for dev menu",
});

export default class App extends Component<IFrontPageProps, IPinPageState> {
  constructor(props: IFrontPageProps) {
    super(props);
    this.state = {
      data: {data},
    };
}
  public render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
        <Tabs />
        </View>
        <Bmi data={this.state.data}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    // flex: 25,
    // justifyContent: 'space-between',
    alignSelf: "stretch",
    flex: 15,
    flexDirection: "column",
  },
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },
});
