import React from 'react';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

//import screens
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NotificationsScreen from './NotificationsScreen';
import MessagesScreen from './MessagesScreen';
//import headers
import HomeHeader from './HomeHeader';
import SearchHeader from './SearchHeader';
import NotificationsHeader from './NotificationsHeader';
import MessagesHeader from './MessagesHeader';
import SearchingScreen from './SearchingScreen';

//import sidebar
import Sidebar from '../../components/Sidebar';


const Tab1 = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: props => <HomeHeader {...props} />
      }
    },
  },
  {
    headerMode: 'none',
  }
);

const Tab2 = StackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: props => <SearchHeader {...props} />
      }
    },
  },
  {
    headerMode: 'none',
  }
);

const Tab3 = StackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        header: props => <NotificationsHeader {...props} />
      }
    }
  },
  {
    headerMode: 'none'
  }
);

const Tab4 = StackNavigator(
  {
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        header: props => <MessagesHeader {...props} />
      }
    }
  },
  {
    headerMode: 'none'
  }
);

const TabBarComponent = TabNavigator(
  {
    Home: { screen: Tab1 },
    Search: { screen: Tab2 },
    Notifications: { screen: Tab3 },
    Messages: { screen: Tab4 }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#00a4e4',
      inactiveTintColor: '#afafaf',
      showIcon: true,
      showLabel: false,
      style: { backgroundColor: '#ffffff' },
      indicatorStyle: { backgroundColor: '#00a4e4' }
    }
  }
);

const WholeNavigate = StackNavigator({
  Home: { screen: TabBarComponent },
});

const LeftDrawer = DrawerNavigator(
  {
    Home: { screen: WholeNavigate },
    Search: { screen: SearchScreen },
    Notifications: { screen: NotificationsScreen },
    Message: { screen: MessagesScreen },
    SearchingScreen: { screen: SearchingScreen }
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <Sidebar {...props} />
  }
);

export default LeftDrawer;
