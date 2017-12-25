import React from "react";
import { AppRegistry, Image, StatusBar, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Dimensions } from "react-native";
import { Container, Content, Text, List, ListItem, Footer, Left, Right, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
var { mWidth, mHeight } = Dimensions.get('window');

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container
        style={{
          height: mHeight,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8
        }}
      >
        <Content>
            <Image
              style={{ height: 60, width: 60, borderRadius: 50, marginTop: 20, marginLeft: 20, borderWidth: 1 }}
              source={require('../images/user2.jpeg')}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Left>
                <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Vinit Kadam</Text>
              </Left>
              <Right>
                    <Icon name='chevron-down' style={{ paddingRight: 20, color: '#00aced' }} />
              </Right>
            </View>
            <Text style={{ color: 'grey', marginLeft: 20 }}>@vinitkadam1997</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20}}>40<Text style={{ fontWeight: 'normal', color: 'grey' }}> Following</Text></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 20}}>20<Text style={{ fontWeight: 'normal', color: 'grey' }}> Followers</Text></Text>
              </TouchableOpacity>
            </View>

          <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}/>

          <List>
          <TouchableHighlight
            underlayColor={'grey'}
          >
            <ListItem iconLeft noBorder style={{ borderBottomWidth: null, marginLeft: 20 }}>
                <Icon name="user-o" style={{fontSize: 26}} />
                <Text style={{ marginLeft: 30 }}>Profile</Text>
            </ListItem>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'grey'}
            >
            <ListItem iconLeft noBorder style={{ borderBottomWidth: null, marginLeft: 20 }}>
                <Icon name="list-alt" style={{fontSize: 26}} />
                <Text style={{ marginLeft: 30 }}>Lists</Text>
            </ListItem>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'grey'}
            >
            <ListItem iconLeft noBorder style={{ borderBottomWidth: null, marginLeft: 20 }}>
                <Icon name="flash" style={{fontSize: 26}}/>
                <Text style={{ marginLeft: 30 }}>Moments</Text>
            </ListItem>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'grey'}
            >
            <ListItem iconLeft noBorder style={{ borderBottomWidth: null, marginLeft: 20 }}>
                <Icon name="clone" style={{fontSize: 26}} />
                <Text style={{ marginLeft: 30 }}>Highlights</Text>
            </ListItem>
            </TouchableHighlight>
          </List>

          <View style={{ borderBottomColor: 'grey', borderBottomWidth: .2, marginTop: 20 }}/>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={{ justifyContent: 'center', width: null, height: 50}}>
              <Text style={{ marginLeft: 20 }}>Settings and privacy</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={{ justifyContent: 'center', width: null, height: 50}}>
              <Text style={{ marginLeft: 20 }}>Help Center</Text>
            </View>
          </TouchableNativeFeedback>
        </Content>
        <Footer style={{ backgroundColor: '#ffffff' }}>
          <FooterTab style={{ backgroundColor: '#ffffff' }}>
            <Left>
              <Icon style={{ marginLeft: 10, color: '#197DC8', fontSize: 20 }} name='moon-o' />
            </Left>
            <Right>
              <Icon style={{ marginRight: 10, color: '#197DC8', fontSize: 20 }} name='qrcode' />
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
