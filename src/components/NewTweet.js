import React, { Component } from 'react';
<<<<<<< HEAD
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Left, Right, Container, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

const NewTweet = (props) => {
    const { dp, tweetImage, name, twitterId, lastSeen, tweetcontent, comments, retweets, likes, verified } = props;
    const { mainContainer, iconStyle, imageStyle, buttonsContainer, textStyle } = styles;

    function isVerified() {
      if (verified === 'true') {
        return (<Icon name="check" style={{ fontSize: 20, color: '#197DC8', alignSelf: 'center' }} />);
      }
    }
    return (
      <View style={mainContainer}>
        <View style={{ padding: 5 }}>
          <Image style={{ height: 50, width: 50, borderRadius: 25, marginTop: 7 }} source={{ uri: dp }} />
        </View>
        <View style={{ padding: 5, flexGrow: 1 }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <View style={{ flexDirection: 'row' }} >
              <Text style={styles.nameText}> {name} </Text>
              {isVerified()}
              <Text note> {twitterId} </Text>
              <Text note> {lastSeen} </Text>
            </View>
            <Right><Icon name='chevron-down' style={styles.iconStyle} /></Right>
          </View>
          <View style={{ margin: 5 }}>
            <Text> {tweetcontent} </Text>
          </View>
          <View style={{ margin: 5, flex: 1 }}>
            <Image source={{ uri: tweetImage }} style={imageStyle} />
=======
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Left, Right, Container, Body } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

const NewTweet = (props) => {
    const { tweetImage, name, twitterId, lastSeen, tweetcontent, comments, retweets, likes } = props;
    const { mainContainer, iconStyle, imageStyle, buttonsContainer, textStyle } = styles;
    return (
      <View style={mainContainer}>
        <View style={{padding: 5}}>
          <Image style={{ height: 40, width: 40, borderRadius: 20 }} source={require('../images/user2.jpeg')} />
        </View>
        <View style={{padding: 5 }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Text>{name}</Text>
            <Text>{twitterId}</Text>
            <Text>{lastSeen}</Text>
          </View>
          <View style={{margin: 5}}>
            <Text> {tweetcontent} </Text>
          </View>
          <View style={{margin: 5, flex: 1}}>
            <Image source={require('../images/roadster.jpg')} style={imageStyle} />
>>>>>>> 32af0cdae581ee8c23a1792a2057df6a27478cd1
          </View>
          <View style={buttonsContainer}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity><Icon name="comment" style={iconStyle} /></TouchableOpacity>
              <Text style={textStyle} >{comments}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity><Icon name="retweet" style={iconStyle} /></TouchableOpacity>
              <Text style={textStyle} > {retweets}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity><Icon name="heart" style={iconStyle} /></TouchableOpacity>
              <Text style={textStyle} > {likes} </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity><Icon name="envelope" style={iconStyle} /></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
};

const styles = {
    mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 5
  },
  iconStyle: {
      color: '#747777',
      fontSize: 25,
      fontWeight: 'bold'
  },
  imageStyle: {
<<<<<<< HEAD
    width: '100%',
    height: 200
  },

  buttonsContainer: {
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
=======
    flex: 1
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
>>>>>>> 32af0cdae581ee8c23a1792a2057df6a27478cd1
    flex: 1,
    margin: 5
  },
  textStyle: {
    color: '#747777',
    fontSize: 11,
    alignSelf: 'center'
  }
};
export default NewTweet;
