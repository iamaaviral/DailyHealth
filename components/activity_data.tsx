import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export interface IDataPageProps {
  data: any;
  screenNumber: number;
}

export default class ActivityData extends React.Component<IDataPageProps, any> {
  constructor(props: IDataPageProps) {
    super(props);
  }

  public render() {
    if (this.props.screenNumber === 1) {
      return (
        <View style={styles.Activity}>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.weight} kg</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.height} m</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.steps} steps</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.Distance} m</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.climbed} m</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.calories} cal</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>
              {this.props.data.heartRate} bps
            </Text>
          </View>
        </View>
      );
    } else if (this.props.screenNumber === 2) {
      return (
        <View style={styles.Activity}>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.weight * 1000} g</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.height / 1000} km</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.steps} steps</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.Distance / 1000} km</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.climbed / 1000} km</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>{this.props.data.calories / 1000} kcal</Text>
          </View>
          <View style={styles.Activity_row}>
            <Text style={styles.Activity_text}>
              {this.props.data.heartRate} bps
            </Text>
          </View>
        </View>
      );
    }
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
