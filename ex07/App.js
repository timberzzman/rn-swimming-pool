import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

function FirstScreen({ navigation }) {
  return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => navigation.navigate('Second')}>First Screen</Text>
      </View>
  );
}

function SecondScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('First')}>Second Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="First">
              <Stack.Screen name="First" component={FirstScreen} />
              <Stack.Screen name="Second" component={SecondScreen} />
          </Stack.Navigator>
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
