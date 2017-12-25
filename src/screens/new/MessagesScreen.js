import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class MessagesScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="envelope-o" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  render() {
    return (
      <Container>
        <Body style={{ justifyContent: 'center' }}>
          <Text>Messages will appear here.</Text>
        </Body>
      </Container>
    );
  }
}

export default MessagesScreen;
