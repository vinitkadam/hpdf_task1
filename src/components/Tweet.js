import React from 'react';
import { View, Left, Body, Text, Thumbnail, Card, CardItem, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Tweet = (props) => {

    const { name, twitterId, lastSeen, tweetcontent, comments, retweets, likes } = props;
    return (
      <Card style={{ marginTop: 0, marginBottom: 0 }}>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/user1.jpg')} />
            <Body style={{ flexDirection: 'row' }}>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.nameText}> {name} </Text>
                  <Icon name="check" style={{ fontSize: 20, color: '#197DC8', alignSelf: 'center' }}/>
                  <Text note> {twitterId} </Text>
                  <Text note> {lastSeen} </Text>
                </View>
                <Text style={styles.contentText}> {tweetcontent} </Text>
              </View>
              <Right><Icon name='chevron-down' style={styles.iconStyle} /></Right>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
            <Body>
              <Image source={require('../images/image1.jpg')} style={{ height: 200, width: 300, alignSelf: 'flex-end' }} />
            </Body>
        </CardItem>

        <CardItem>
          <Left />
          <Body>
          <TouchableOpacity transparent>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="comment" style={styles.iconStyle} />
            <Text style={styles.textStyle}> {comments} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{ flexDirection: 'row' }}>
              <Icon name="retweet" style={styles.iconStyle} />
              <Text style={styles.textStyle} > {retweets} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="heart" style={styles.iconStyle} />
            <Text style={styles.textStyle}> {likes} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="envelope" style={styles.iconStyle} />
            </View>
          </TouchableOpacity>
          </Body>


        </CardItem>
      </Card>
    );
};


const styles = {
    textStyle: {
      color: '#747777',
      fontSize: 11,
      alignSelf: 'center'
    },
    iconStyle: {
        color: '#747777',
        fontSize: 25,
        fontWeight: 'bold',
    },
    nameText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    contentText: {
      color: '#2B2D2E'
    }
};

export default Tweet;
