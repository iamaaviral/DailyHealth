import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
const FBSDK = require("react-native-fbsdk");
const {
  LoginButton,
  AccessToken,
} = FBSDK;

export default class Login extends React.Component {

  public render() {
    return (
      <View>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error: any, result: any) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data: any) => {
                  alert(data.accessToken.toString());
                },
              );
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
    </View>
    );
  }
}
