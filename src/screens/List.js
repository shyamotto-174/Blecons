import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <StatusBar backgroundColor="#4164e3" barStyle="light-content" />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#4164e3',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    backgroundColor: '#4164e3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
