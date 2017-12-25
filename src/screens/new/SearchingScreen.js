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
          <View style={{ flex: 1 }}>
            <TouchableOpacity transparent onPress={() => navigation.navigate('Home')}>
              <Icon name="keyboard-backspace" style={{ color: '#00a4e4', fontSize: 40 }} />
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: 20, flex: 5 }}>
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
    justifyContent: 'flex-start',
    height: 60,
    paddingTop: 15,
    flexDirection: 'row',
    position: 'relative'
  }
};

export default SearchingScreen;
