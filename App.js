import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Constants from 'expo-constants';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import { data1 } from './factList.js';

 



function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 


const Drawer = createDrawerNavigator();


const Card = (props) => {
  const nav = useNavigation();

  return (
  <TouchableOpacity onPress={() => nav.navigate('Facts')}>
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.title}</Text>
    </View>
 </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const [cardText, setCardText] = useState('GET RANDOM FACTS');
  const [category, setCategory] = useState('psychology');

  // setCardText("GET RANDOM FACTS");
  return (
    <View style={styles.layout}>
      <Card title={cardText} />
      <Categories values={['psychology', 'phobias', 'introverts', 'extroverts']} selectedCategory={category} setSelectedCategory={setCategory}/>
      <View style={styles.homeButtons}>
        <Button title='RANDOM FACT' color={'darkgrey'} onPress={() => setCardText(data1[category][randomNumber(0, data1[category].length)])}></Button>
        <Button title='ADD TO FAVOURITE' color={'darkgrey'}></Button>
      </View>
      
    </View>
  );
};

const Categories = ({values, selectedCategory, setSelectedCategory}) => (
  <View style={styles.categoryButtons}>
      {
        values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedCategory(value)}
            style={[styles.button, selectedCategory===value && styles.selected]}
          > 
            <Text style={styles.categoryTextSize}>{value}</Text>
          </TouchableOpacity>
        ))
      }
  </View>
)

const FactScreen = () => {
  return (
    <View>
      <Text>Facts</Text>
    </View>
  );
};

const FavouriteScreen = () => {
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
    backgroundColor: '#2f3136',
    alignItems: 'center',
    justifyContent: 'center',
    
    // paddingTop: Constants.statusBarHeight,
    
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: 'grey',
    borderColor: 'white',
    // borderWidth: 4,
    borderRadius: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  homeButtons: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
    // marginLeft: 200
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 4,
    backgroundColor: "oldlace",
    // alignSelf: "flex-start",
    marginHorizontal: "7%",
    marginBottom: 6,
    minWidth: "35%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  categoryTextSize : {
    fontSize: 10,
    fontWeight: 'bold',
  },
  categoryButtons: {
    width: 300,
    height: 100,
    flexWrap: 'wrap',
    backgroundColor: 'grey',
    marginTop: '5%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
