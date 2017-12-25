import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Header, Title, Left, Right, Body, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchFooter from '../components/SearchFooter';


//define the search screen
const NewSearchScreen = (props) => {
    const { navigation } = props;
    return (
      <Container>
        <View style={viewStyle}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity transparent onPress={() => navigation.goback(null)}>
              <Icon name="keyboard-backspace" style={{ color: '#00a4e4', fontSize: 40}} />
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: 20, flex: 5 }}>
            <Input placeholder="Search Twitter" />
          </View>

          <View style={{ flex: 1 }} >
            {/* person in the right corner*/}
            <TouchableOpacity transparent style={{ alignSelf: 'flex-end' }}>
              <Icon name="ios-person-add-outline" style={{ color: '#00a4e4', fontSize: 40 }} />
            </TouchableOpacity>
          </View>
        </View>

        <SearchFooter />
      </Container>
    );
};

export default NewSearchScreen;
