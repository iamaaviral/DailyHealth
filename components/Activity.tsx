import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Tabs } from "./config/router";

export default class Activity extends React.Component {

  render() {
    // if (this.props.editing) {
    //   return (
    //     <View style={styles.Activity}>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/weight.png")}
    //           />
    //           <Text style={styles.Activity_text}>Weight</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.weight} {this.state.unit[this.props.index][3]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/height.png")}
    //           />
    //           <Text style={styles.Activity_text}>Height</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.height} {this.state.unit[this.props.index][4]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/steps.png")}
    //           />
    //           <Text style={styles.Activity_text}>Steps</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>{this.props.data.steps} steps</Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/distance.png")}
    //           />
    //           <Text style={styles.Activity_text}>Distance</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.Distance} {this.state.unit[this.props.index][0]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/climb.png")}
    //           />
    //           <Text style={styles.Activity_text}>Climbed</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.climbed} {this.state.unit[this.props.index][1]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/calories.png")}
    //           />
    //           <Text style={styles.Activity_text}>Calories</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.calories} {this.state.unit[this.props.index][2]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/heart.png")}
    //           />
    //           <Text style={styles.Activity_text}>Heart rate</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>{this.props.data.heartRate} bpm</Text>
    //         </View>
    //       </View>
    //     </View>
    //   );
    // } else {
    //   return (
    //     <View style={styles.Activity}>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/weight.png")}
    //           />
    //           <Text style={styles.Activity_text}>Weight</Text>
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <TextInput
    //             value={this.state.inputText}
    //             onChangeText={text => this.handleChange(text)}
    //             onSubmitEditing={this.props.handler}
    //           />
    //           <Text style={styles.Activity_text}>
    //             {this.state.unit[this.props.index][3]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/height.png")}
    //           />
    //           <Text style={styles.Activity_text}>Height</Text>
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <TextInput
    //             value={this.state.inputText}
    //             onChangeText={text => this.handleChange(text)}
    //             onSubmitEditing={this.props.handler}
    //           />
    //           <Text style={styles.Activity_text}>
    //             {this.state.unit[this.props.index][4]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/steps.png")}
    //           />
    //           <Text style={styles.Activity_text}>Steps</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>{this.props.data.steps} steps</Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/distance.png")}
    //           />
    //           <Text style={styles.Activity_text}>Distance</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.Distance} {this.state.unit[this.props.index][0]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/climb.png")}
    //           />
    //           <Text style={styles.Activity_text}>Climbed</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.climbed} {this.state.unit[this.props.index][1]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/calories.png")}
    //           />
    //           <Text style={styles.Activity_text}>Calories</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>
    //             {this.props.data.calories} {this.state.unit[this.props.index][2]}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.Activity_row}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             alignItems: "center"
    //           }}
    //         >
    //           <Image
    //             style={{ width: 15, height: 15 }}
    //             source={require("../assets/heart.png")}
    //           />
    //           <Text style={styles.Activity_text}>Heart rate</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.Activity_text}>{this.props.data.heartRate} bpm</Text>
    //         </View>
    //       </View>
    //     </View>
    //   );
   // }
   return (
     <View style={styles.container}>
       <View style={styles.body}>
          <Tabs />
       </View>
     </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  body: {
    // flex: 25,
    // justifyContent: 'space-between',
    flex: 15,
    flexDirection: "column",
    alignSelf: "stretch"
  }
});
