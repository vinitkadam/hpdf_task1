import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Body, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="magnify" style={{ color: tintColor, fontSize: 24 }} />
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
          <Text>Notifications will appear here.</Text>
        </Body>
        <Fab
            active={this.state.active}
            style={{ backgroundColor: '#00a4e4' }}
            position='bottomRight'
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="feather" />
        </Fab>
      </Container>
    );
  }
}

export default Search;
