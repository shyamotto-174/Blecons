import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#002f6c" barStyle="light-content" />
        <View style={styles.heading}>
          <Text
            style={{
              alignItems: 'flex-start',
              padding: 10,
              color: '#000000',
              fontSize: 42,
            }}>
            Notification
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3949ab',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },
});
