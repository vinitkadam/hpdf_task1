import React from 'react';
import { Image } from 'react-native';
import { Header, Title, Left, Button, Body } from 'native-base';

export default class NotificationsHeader extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Header style={{ backgroundColor: 'white', borderBottomWidth: 0, elevation: 0 }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Image
                source={require('../../images/user2.jpeg')}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'black', marginLeft: -50 }}>Notifications</Title>
          </Body>
        </Header>
    );
  }
}
