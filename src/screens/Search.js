import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function CupertinoSearchBarWithMic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,0.7)"
          style={styles.inputStyle}
        />
        <TouchableOpacity style={styles.recordButton}>
          <IoniconsIcon name="ios-mic" style={styles.inputRightIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <Text style={styles.rightButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4164e3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingRight: 0,
    paddingTop: 20,
  },
  inputBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    borderRadius: 20,
  },
  inputLeftIcon: {
    alignSelf: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    color: 'rgba(65,100,227,1)',
    fontSize: 20,
  },
  inputStyle: {
    height: 32,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#000000',
    alignSelf: 'flex-start',
    fontSize: 15,
    fontFamily: 'roboto-regular',
    lineHeight: 15,
  },
  recordButton: {
    width: 24,
    height: 24,
    backgroundColor: '#4164e3',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderRadius: 13,
  },
  inputRightIcon: {
    alignSelf: 'center',
    opacity: 0.7,
    paddingRight: 5,
    paddingLeft: 5,
    color: '#FFF',
    fontSize: 20,
  },
  rightIconButton: {
    alignItems: 'center',
    padding: 8,
  },
  rightButtonText: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'roboto-regular',
  },
});

export default CupertinoSearchBarWithMic;