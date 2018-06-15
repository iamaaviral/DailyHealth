import * as React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginForm from "./loginForm";

export default class Login extends React.Component {
  public render() {
    return (
      <KeyboardAvoidingView behavior= "padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.title}>An App made to simplify your daily health Track</Text>
         </View>
        <View style={styles.formContainer}>
        <LoginForm />
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    flex: 1,
  },
  formContainer: {
    alignSelf: "stretch",
    flex: 15,
    flexDirection: "column",
  },
  logoContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    opacity: 0.9,
    textAlign: "center",
    width: 160,
  },
});
