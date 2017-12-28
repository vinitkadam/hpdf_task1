import React, { Component } from 'react';
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
    flex: 1
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
