import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  Modal,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/map_images.png')}
        style={styles.background}>

        <View style={styles.profile}>
          <SafeAreaView >
            <TouchableOpacity
              onPress={this.props.navigation.openDrawer}>
              <MaterialCommunityIcons
                sbutton
                name="notification-clear-all"
                color={'#4164e3'}
                size={35}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profile: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    left: 15,
    top: 15,
  },
});