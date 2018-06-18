import * as React from "react";
import {KeyboardAvoidingView,
         StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         TouchableOpacity,
          View } from "react-native";
import Login from "./Login";

export interface INavigatePageProps {
  navigation: any;
}
export default class LoginForm extends React.Component<INavigatePageProps, any> {

  static navigationOptions = {
    header: null,
  };

  public render() {

    return (
      <KeyboardAvoidingView behavior= "padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.title}>An App made to simplify your daily health Track</Text>
         </View>
        <View style={styles.formContainer}>
        <Login navigate=  { this.props.navigation } />
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
