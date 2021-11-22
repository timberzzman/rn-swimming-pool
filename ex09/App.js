import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";

function FirstScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('Second')}>First Screen</Text>
      </View>
  );
}

function SecondScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('First')}>Second Screen</Text>
      </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="First">
          <Drawer.Screen name="First" component={FirstScreen} />
          <Drawer.Screen name="Second" component={SecondScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
