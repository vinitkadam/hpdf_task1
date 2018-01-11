import React, { Component } from 'react';
import { Container, Fab, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import components
import NewTweet from '../../components/NewTweet';
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
          <NewTweet
<<<<<<< HEAD
            dp="https://pbs.twimg.com/profile_images/593800308792385538/Xy7-rPky.jpg"
=======
            //dp="https://pbs.twimg.com/profile_images/593800308792385538/Xy7-rPky.jpg"
>>>>>>> 32af0cdae581ee8c23a1792a2057df6a27478cd1
            tweetImage="http://static2.tripoto.com/media/travel-story/mumbai1.jpg"
            name="Dipti Shinde"
            twitterId="@dipti_"
            lastSeen="10h"
            tweetcontent="Mumbai!!! The city of dreams"
            comments="27"
            retweets="29"
            likes="300"
            verified="true"
          />
          <NewTweet
<<<<<<< HEAD
            dp="https://pbs.twimg.com/profile_images/453438113071644673/3c4ZTNb4.jpeg"
=======
            //dp="https://pbs.twimg.com/profile_images/453438113071644673/3c4ZTNb4.jpeg"
>>>>>>> 32af0cdae581ee8c23a1792a2057df6a27478cd1
            tweetImage="http://st.automobilemag.com/uploads/sites/5/2017/11/2020-Tesla-Roadster-10.jpg"
            name="Vinit Kadam"
            twitterId="@vinitkadam1997"
            lastSeen="12h"
            tweetcontent="My Dream car. Tesla Roadster 2!!!!"
            comments="278"
            retweets="256"
            likes="3.5K"
            verified="false"
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
