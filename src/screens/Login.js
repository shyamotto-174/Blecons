import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import firebase from 'firebase';

export default class App extends React.Component {

  componentDidMount() {
    this.checkIfLoggedIn
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.props.navigation.navigate('Home')
        }
        else {
          this.props.navigation.navigate('Login')
        }
      }.bind(this));
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/Login.png')}
        style={styles.background}>
        <View style={styles.logintex}>
          <Text style={styles.login}>Log In</Text>
        </View>
        <View style={styles.inputitem}>
          <TextInput
            style={styles.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            placeholderTextColor="#002f6c"
            selectionColor="#000000"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            style={styles.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />

          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => this.props.navigation.navigate('HomeNavigator')}>
            <Text style={styles.logintext}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.icon}>
            <TouchableOpacity><SocialIcon sbutton type="facebook" /></TouchableOpacity>
            <TouchableOpacity><SocialIcon sbutton type="instagram" /></TouchableOpacity>
            <TouchableOpacity><SocialIcon sbutton type="google" /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Do not have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.signupButton}> Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}> |</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Contact')}>
            <Text style={styles.signupButton}> Contact Us</Text>
          </TouchableOpacity>
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
  logintex: {
    flex: 8,
  },
  inputitem: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  login: {
    width: 150,
    height: 38,
    color: '#101011',
    fontFamily: 'Montserrat - Medium',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.07,
    position: 'absolute',
    top: 250,
    left: 20,
  },
  email: {
    width: 370,
    height: 50,
    borderRadius: 5,
    borderColor: '#989696',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#f2f2fc',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  password: {
    width: 370,
    height: 50,
    opacity: 0.7,
    borderRadius: 5,
    borderColor: '#989696',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#f2f2fc',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  loginbutton: {
    width: 370,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#4164e3',
    marginVertical: 15,
    paddingVertical: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
  logintext: {
    color: '#ffffff',
    fontSize: 17,
    alignItems: 'center',
    fontWeight: '500',
    textAlign: 'center',
  },
  signupTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
    color: '#4164e3',
    fontFamily: 'Montserrat - Medium',
  },
  signupText: {
    color: '#eeeee',
    fontFamily: 'Montserrat - Medium',
    fontSize: 16,
  },
  signupButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4164e3',
    fontFamily: 'Montserrat - Medium',
  },
});
