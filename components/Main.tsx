import * as React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Bmi from "./bmi";
import { Tabs } from "./config/router";
import Header from "./Header";
import LoginForm from "./register/LoginForm";

export default class Main extends Component<any, any> {
    // static navigationOptions = ({ navigation }: { navigation: any}) => {
    //     return {
    //       title: `Daily Health`,
    //     };
    //   }
    static navigationOptions = ({ navigation }: { navigation: any }) => {
      return {
        headerRight: (
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "rgba(250, 250, 250, 0.7)",
              borderRadius: 50,
              height: 45,
              justifyContent: "center",
              margin: 5,
              shadowColor: "black",
              shadowOffset: {
                height: 2,
                width: 2,
              },
              shadowOpacity: 0.5,
              width: 45,
            }}
            >
              <Text style= {{ fontSize: 15, color: "black"}}>
                {/* ✌︎  */}
                {navigation.getParam("otherParam", "bc")}
              </Text>
            </TouchableOpacity>),
            headerStyle: {
            backgroundColor: "rgba(0,170,170,0.1)",
            elevation: 0,
            height: 70,
          },
          title: "Daily Health",
            };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        calories: 37,
        climbed: 0,
        distance: 1050,
        heartRate: 72,
        height: 1.7,
        steps: 1505,
        weight: 64,
       },
       editing: false,
       value: 45,
    };
  }

  onSubmit = (data: any, dataHeight: any) => {
    if (this.state.editing) {
    this.setState((prevState: any) => ({
    data: {
      ...prevState.data,
      height: dataHeight,
      weight: data,
  },
  editing : !this.state.editing,
}));
} else {
      this.setState({
        editing : !this.state.editing,
      });
    }
  }
  public render() {

    const { navigation } = this.props;
    const otherParam = navigation.getParam("otherParam", "some default value");
    return (
       <View style={styles.container}>
              {/* <Header /> */}
              <View style={styles.body}>
                <Tabs
                  screenProps={{
                    data: this.state.data,
                    editing: this.state.editing,
                    // handleClick() {this.onSubmit.bind(this); },
                    handlerFromParent: this.onSubmit.bind(this),
                  }}
                />
              </View>
              <Bmi
                data={this.state.data}
                handleClick={this.onSubmit.bind(this)}
              />
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
    flex: 1,
  },
});
