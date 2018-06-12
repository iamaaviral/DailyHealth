import React from "react";
import { StyleSheet, Text, View } from "react-native";

// export interface Props {}
// interface State {}

export default class Header extends React.Component {
  public render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>Daily health</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "stretch",
    backgroundColor: "rgba(0,170,170,0.1)",
    flex: 1,
    flexDirection: "column",
    paddingBottom: 20,
    paddingTop: 20,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
