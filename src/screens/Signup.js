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

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/Login.png')}
        style={styles.background}>
        <View style={styles.logintex}>
          <Text style={styles.login}>Sign Up</Text>
        </View>
        <View style={styles.inputitem}>
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
            style={styles.password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          <TextInput
            style={styles.confirmpassword}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.logintext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.signupButton}> Log In</Text>
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
  login: {
    left: 20,
    position: 'absolute',
    top: 250,
    width: 150,
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
  password: {
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
  },
  confirmpassword: {
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
  },
  signupButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4164e3',
    fontFamily: 'Montserrat - Medium',
  },
});
