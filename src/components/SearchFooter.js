import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

export default class SearchFooter extends Component {
  render() {
      return (
        <Footer style={{ backgroundColor: 'white' }}>
            <FooterTab style={{ backgroundColor: 'white' }}>
              <TouchableOpacity transparent style={{ marginLeft: 20, justifyContent: 'center' }}>
                <Text style={styles.allcolor}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity transparent style={{ paddingLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.mentionColor}>Mentions</Text>
              </TouchableOpacity>
              <Right>
                <TouchableOpacity transparent style={{ marginRight: 20 }} >
                  <Icon name="settings" size={25} style={styles.iconColor} />
                </TouchableOpacity>
              </Right>
            </FooterTab>
        </Footer>
      );
  }
}

const styles = {
  iconColor: {
    color: '#00a4e4'
  },
  allcolor: {
    color: '#00a4e4',
    fontWeight: 'bold'
  },
  mentionColor: {
    color: '#5b5b5b',
    fontWeight: 'bold'
  }
};
