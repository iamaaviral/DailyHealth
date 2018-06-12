import React from "react";
import { StyleSheet, Text, View } from "react-native";

//  var bmi = Math.round((data.weight / (data.height * data.height))*100)/100;
export default class Bmi extends React.Component<any, any> {
  public render() {
    return (
      <View style={styles.bmi}>
        <Text style={styles.bmi_text}>Your BMI : </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bmi: {
    alignSelf: "stretch",
    backgroundColor: "rgba(0,170,170,0.1)",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  bmi_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
