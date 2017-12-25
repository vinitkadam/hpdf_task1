import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Input, Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchFooter from '../../components/SearchFooter';


//define the the component
const SearchingScreen = (props) => {
    const { navigation } = props;
    return (
      <Container>
      <Content>
        <View style={styles.viewStyle}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity transparent onPress={() => navigation.navigate('Home')}>
              <Icon name="keyboard-backspace" style={{ color: '#00a4e4', fontSize: 35 }} />
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: 20, flex: 6}}>
            <Input placeholder="Search Twitter" />
          </View>
        </View>
        </Content>
        <SearchFooter />
      </Container>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    position: 'relative',
    borderBottomWidth: 0.7,
    borderBottomColor: '#dddddd'
  }
};

export default SearchingScreen;
