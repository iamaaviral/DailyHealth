import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Activity_data from "./activity_data";
import Activity_list from "./activity_list";

export interface IPinPageProps {
  screenProps: any;
  tabBarLabel: string;
}
export interface IPinPageState {
  screenNumber: number;
}
export default class MksPage extends React.Component<
  IPinPageProps,
  IPinPageState
> {
  constructor(props: IPinPageProps) {
    super(props);
    this.state = {
      screenNumber: 2,
    };
  }
  public render() {
    if (this.props.tabBarLabel === "in MKS") {
      this.setState({
        screenNumber: 1,
      });
    } else if (this.props.tabBarLabel === "in CGS") {
      this.setState({
        screenNumber: 2,
      });
    }

    return (
      <View style={styles.Activity}>
        <View>
          <Activity_list />
        </View>
        <View>
          <Activity_data
            data={this.props.screenProps.data}
            screenNumber={this.state.screenNumber}
            editing={this.props.screenProps.editing}
          />
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
    padding: 15,
  },
});
