import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Body, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SearchScreen extends Component {
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
          <Text>Search Screen</Text>
        </Body>
        <Fab
            active={this.state.active}
            style={{ backgroundColor: '#00a4e4' }}
            position='bottomRight'
            onPress={() => this.setState({ active: !this.state.active })}
        >
            <Icon name="feather" />
        </Fab>
      </Container>
    );
  }
}

export default SearchScreen;
