import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import mks_page from '../mks-page';
import cgs_page from '../cgs-page';

// export const FeedStack = StackNavigator({
//   Feed: {
//     screen: Feed,
//     navigationOptions: {
//       title: 'Feed',
//     },
//   },
//   Details: {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
//     }),
//   },
// });

export const Tabs = TabNavigator({
  Mks: {
    screen: mks_page,
    navigationOptions: {
      tabBarLabel: 'in MKS',
      tabBarIcon: ({ tintColor } : { tintColor: any}) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Cgs: {
    screen: cgs_page,
    navigationOptions: {
      tabBarLabel: 'in CGS',
      tabBarIcon: ({ tintColor } : { tintColor: any}) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

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