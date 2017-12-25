import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Header, Body, Left, Title, Right } from 'native-base';

const TitleHeader = (props) => {
  const { navigation, tabKey } = props;
  const { textStyle, viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{ paddingLeft: 20 }}>
        <TouchableOpacity transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Image
            source={require('../images/user2.jpeg')}
            style={imageStyle}
            />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={textStyle}>
          {tabKey}
        </Text>
      </View>

    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    height: 60,
    paddingTop: 15,
    flexDirection: 'row',
    position: 'relative'
  },
  textStyle: {
    fontSize: 22,
    paddingLeft: 30,
    color: '#000000',
    fontWeight: 'bold'
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
};


export default TitleHeader;
