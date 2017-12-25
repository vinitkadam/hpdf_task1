import React from 'react';
import { TouchableOpacity, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';


const SearchHeader = (props) => {

  const { navigation } = props;
  const { viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Image
            source={require('../images/user2.jpeg')}
            style={imageStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={{ paddingLeft: 20, flex: 6 }}>
        {/* grey search button */}
        <Button rounded style={styles.searchButton} onPress={() => navigation.navigate('SearchScreen')}>
          <Text style={styles.placeHolder}>Search Twitter</Text>
        </Button>
      </View>

      <View style={{ flex: 1 }} >
        {/* add person in the right corner*/}
        <TouchableOpacity transparent style={{ alignSelf: 'flex-end' }}>
          <Icon name="ios-person-add-outline" style={{ color: '#00a4e4', fontSize: 40 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  searchButton: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: '#EEF0F1',
    paddingLeft: 10
  },
  placeHolder: {
    color: '#7a7a7a'
  }
};
export default SearchHeader;
