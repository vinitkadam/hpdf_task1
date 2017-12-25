import React from 'react';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import Sidebar from './src/components/Sidebar';
import Header from './src/components/Header';

import HomeScreen from './src/screens/main/home';
import Messages from './src/screens/main/Messages';
import Search from './src/screens/main/Search';
import Notifications from './src/screens/main/Notifications';

const MainScreen = TabNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: Search },
  Notifications: { screen: Notifications },
  Message: { screen: Messages }
},
{
  tabBarComponent: props => (<Header {...props} />),
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#00a4e4',
    inactiveTintColor: '#7a7a7a'
  },
});

const leftDrawer = DrawerNavigator({
  Main: { screen: MainScreen }
},
{
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <Sidebar {...props} />
});

export default leftDrawer;
