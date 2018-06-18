import React from "react";
import { Icon } from "react-native-elements";
import { StackNavigator, TabNavigator } from "react-navigation";

import App from "~/App";
import LoginForm from "../register/LoginForm";

export const PageStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

// export const Tabs = TabNavigator({
//   Mks: {
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }: { tintColor: any}) => <Icon name="list" size={35} color={tintColor} />,
//       tabBarLabel: "in MKS",
//     },
//     screen: MksPage,
//   },
//   Cgs: {
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }: { tintColor: any}) => <Icon name="account-circle" size={35} color={tintColor} />,
//       tabBarLabel: "in CGS",
//     },
//     screen: CgsPage,
//   },
// });

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: SettingsStack,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });
