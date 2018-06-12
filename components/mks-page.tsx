import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ActivityData from "./activity_data";
import ActivityList from "./activity_list";

export default class MksPage extends React.Component<any, any> {

  public render() {
      return (
        <View style={styles.Activity}>
          <View>
            <ActivityList />
          </View>
          <View>
            <ActivityData />
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
