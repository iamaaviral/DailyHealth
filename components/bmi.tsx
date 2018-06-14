import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//  var bmi =
export interface IPinPageProps {
  data: any;
  handleClick: any;
}
export default class Bmi extends React.Component<IPinPageProps, any> {
  constructor(props: IPinPageProps) {
    super(props);
}

  public render() {
    const bmi = Math.round((this.props.data.weight / (this.props.data.height * this.props.data.height)) * 100) / 100;
    return (
      <View style={styles.bmi}>
        <Text style={styles.bmi_text}>
          Your BMI : {bmi}
        </Text>
        <View style={styles.button}>
            <Button
              title="edit"
              onPress={this.props.handleClick}
              accessibilityLabel="decrement"
              color="blue"
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bmi: {
    alignItems: "center",
    backgroundColor: "rgba(0,170,170,0.1)",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bmi_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    paddingLeft: 125,
    paddingRight: 20,
    paddingVertical: 0,
  },
});
