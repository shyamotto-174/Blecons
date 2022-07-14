import React, { useState } from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Login from './src/screens/Login';
import HomeNavigator from './src/screens/HomeNavigator';
import Search from './src/screens/Search';
import Signup from './src/screens/Signup';
import Forgot from './src/screens/Forgot';
import Contact from './src/screens/Contact';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        background: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('./src/assets/images/belcon_icon.png')} />
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const DrawerNavigation = createDrawerNavigator(
  {
    Login: Login,
    HomeNavigator: HomeNavigator,
    Search: Search,
    Signup: Signup,
    Forgot: Forgot,
    Contact: Contact,
  },
  {
    contentComponent: CustomDrawerComponent,
  }
);

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    Login: Login,
    HomeNavigator: HomeNavigator,
    Search: Search,
    Signup: Signup,
    Forgot: Forgot,
    Contact: Contact,
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
      'calibri-bold': require('./src/assets/fonts/calibri-bold.ttf'),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
