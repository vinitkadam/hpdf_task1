import React from 'react';
import { Image } from 'react-native';
import { Header, Left, Button, Body, Icon, Item, Right, Input } from 'native-base';

export default class SearchHeader extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Header style={{ backgroundColor: 'white', elevation: 0 }} searchBar rounded>
          <Left style={{ flex: 1 }}>
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
          <Body style={{ flex: 6 }}>
            <Item rounded style={{ height: 40, marginLeft: 0, backgroundColor: '#ededed' }}>
              <Input placeholder="  Search Twitter" style={{ marginLeft: 20 }} onFocus={() => this.props.navigation.navigate("SearchingScreen")} />
            </Item>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name='ios-person-add-outline' style={{ color: '#00a4e4', fontSize: 40 }} />
            </Button>
          </Right>
        </Header>
    );
  }
}
