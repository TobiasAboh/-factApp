import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Constants from 'expo-constants'

const Drawer = createDrawerNavigator();

const Card = () => {
  return (
  <Pressable >
    <View style={styles.card}>
    </View>
  </Pressable>
  );
  };



const HomeScreen = () => {
  return (
      <View style={styles.layout}>
        {/* <View> */}
          <ScrollView>
          <View style={styles.grid}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
          
          </ScrollView>
        {/* </View> */}
    </View>
    
  );
};

const FavouriteScreen = () => {
  return (
    <View style={styles.layout}>
        <Text>Favourites</Text>
    </View>
  );
};


export const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Favourites" component={FavouriteScreen} />
  </Drawer.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#2f3136',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    width: 100,
    height: 200,
    backgroundColor: 'grey',
    marginTop: 30,
    marginLeft: 40,
  },
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
  },
});
