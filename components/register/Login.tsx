import * as React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;

export default class Login extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
            autoCorrect = {false}
            keyboardType = "email-address"
            // onSubmitEditing = {() => this.passwordInput.focus()}
            placeholder="Enter your username"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            returnKeyType = "next"
            underlineColorAndroid= "transparent" />
        <TextInput style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            returnKeyType = "go"
            secureTextEntry
            // ref={(input) => this.passwordInput = input}
            underlineColorAndroid= "transparent" />

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

         <View style={{flexDirection: "row"}}>
            <View style={{backgroundColor: "black", height: 2, flex: 1, alignSelf: "center"}} />
            <Text style={{
                alignSelf: "center",
                borderColor: "black",
                borderRadius: 100,
                borderWidth: 1,
                fontSize: 18,
                paddingHorizontal: 5,
                }}>OR</Text>
            <View style={{backgroundColor: "black", height: 2, flex: 1, alignSelf: "center"}} />
        </View>
          <LoginButton style={styles.buttonContainer}
            publishPermissions={["publish_actions"]}
            onLoginFinished={(error: any, result: any) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data: any) => {
                  alert(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => alert("logout.")}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2980b9",
    marginBottom: 10,
    marginTop: 10,
    paddingVertical: 15,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    textAlign: "center",
  },
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#FFF",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
