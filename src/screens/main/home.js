import React, { Component } from 'react';
import { Container, Fab, Content, Header, Right, Button, Left, Image, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import components
import Tweet from '../../components/Tweet';
import SearchFooter from '../../components/SearchFooter';


//define the home tab on main screen
export default class HomeScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor, fontSize: 24 }} />
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
        <Content>
          {/*display tweets*/}
          <Tweet
            name="Dipti Shinde"
            twitterId="@dipti1994"
            lastSeen="10h"
            tweetcontent="Mumbai!!! The city of dreams"
            comments="27"
            retweets="29"
            likes="300"
          />
          <Tweet
            name="Dipti Shinde"
            twitterId="@dipti1994"
            lastSeen="10h"
            tweetcontent="Mumbai. The city of dreams"
            comments="27"
            retweets="29"
            likes="300"
          />
        </Content>
        <Fab
            active={this.state.active}
            style={{ backgroundColor: '#00a4e4', marginBottom: 60 }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="feather" />
        </Fab>
        <SearchFooter />

      </Container>

    );
  }
}
