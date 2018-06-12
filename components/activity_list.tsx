import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default class ActivityList extends React.Component<any, any> {
  public render() {
    return (
      <View style={styles.Activity}>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/weight.png")}
            />
            <Text style={styles.Activity_text}>Weight</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/height.png")}
            />
            <Text style={styles.Activity_text}>Height</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/steps.png")}
            />
            <Text style={styles.Activity_text}>Steps</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/distance.png")}
            />
            <Text style={styles.Activity_text}>Distance</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/climb.png")}
            />
            <Text style={styles.Activity_text}>Climbed</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/calories.png")}
            />
            <Text style={styles.Activity_text}>Calories</Text>
          </View>
        </View>
        <View style={styles.Activity_row}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/heart.png")}
            />
            <Text style={styles.Activity_text}>Heart rate</Text>
          </View>
        </View>
      </View>
    );
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
