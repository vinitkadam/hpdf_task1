import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Body, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MessagesScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="email-outline" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  constructor() {
    super();
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      <Container>
        <Body style={{ justifyContent: 'center' }}>
          <Text>Messages will appear here.</Text>
        </Body>
        <Fab
            active={this.state.active}
            style={{ backgroundColor: '#00a4e4' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="email-outline" />
        </Fab>
      </Container>
    );
  }
}

export default MessagesScreen;
