import React from "react";
import { StyleSheet, Text, View } from "react-native";

//  var bmi =
export interface IPinPageProps {
  data: any;
}
export interface IPinPageState {
  weight: number;
  height: number;
}
export default class Bmi extends React.Component<IPinPageProps, IPinPageState> {
  constructor(props: IPinPageProps) {
    super(props);
    this.state = {
      height: this.props.data.data.height,
      weight: this.props.data.data.weight,
    };
}
  public render() {
    const bmi = Math.round((this.state.weight / (this.state.height * this.state.height)) * 100) / 100;
    return (
      <View style={styles.bmi}>
        <Text style={styles.bmi_text}>
          Your BMI : {bmi}
        </Text>
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
