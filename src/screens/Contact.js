import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Linking, 
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/Login.png')}
        style={styles.background}>
        <View style={styles.logintex}>
          <Text style={styles.login}>Contact Us</Text>
        </View>
        <View style={styles.inputitem}>
          <TextInput
            style={styles.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Name"
            placeholderTextColor="#002f6c"
            selectionColor="#000000"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            style={styles.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#002f6c"
            selectionColor="#000000"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            style={styles.message}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Message"
            placeholderTextColor="#002f6c"
            selectionColor="#000000"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />
          <TouchableOpacity
            style={styles.loginbutton}>
            <Text style={styles.logintext}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Back to</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.signupButton}> Log In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signupText}>Vethics Solution LLP</Text>
        <Text style={styles.signupText}>
          806, Earth Arise, SG Highway, Ahmedabad
        </Text>
        <Text
          style={styles.signupText}
          onPress={() => Linking.openURL('mailto:support@example.com')}
          title="support@example.com">
          support@example.com
        </Text>
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
  logintex: {
    flex: 8,
  },
  inputitem: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    position: 'absolute',
    top: 250,
    left: 20,
    width: 300,
    height: 38,
    color: '#101011',
    fontFamily: 'Montserrat - Medium',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.07,
  },
  email: {
    width: 370,
    height: 50,
    borderRadius: 5,
    borderColor: '#989696',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#f2f2fc',
    opacity: 0.7,
    marginVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    width: 370,
    height: 100,
    borderRadius: 5,
    borderColor: '#989696',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#f2f2fc',
    opacity: 0.7,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  loginbutton: {
    width: 375,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#4164e3',
    marginVertical: 15,
    paddingVertical: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
  logintext: {
    width: 345,
    height: 40,
    color: '#ffffff',
    fontSize: 17,
    alignItems: 'center',
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.05,
  },
  signupTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
    flex: 1,
    color: '#4164e3',
    fontFamily: 'Montserrat - Medium',
  },
  signupText: {
    color: '#eeeee',
    fontFamily: 'Montserrat - Medium',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  signupButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4164e3',
    fontFamily: 'Montserrat - Medium',
  },
});
