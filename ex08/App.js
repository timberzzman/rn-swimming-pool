import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function FirstScreen({ navigation }) {
  const [text, setText] = useState('');
  return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex:5, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <TextInput style={{borderBottomColor: '#000', borderBottomWidth: 1, width: '90%', height: 40}} onChangeText={(text) => setText(text)}/>
        </View>
        <View style={{flex:1}}>
          <Text onPress={() => navigation.navigate('Second', {text})}>Next page</Text>
        </View>
      </View>
  );
}

function SecondScreen({ route, navigation }) {
  const {text} = route.params;

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flex:5, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Text>{text}</Text>
        </View>
        <View style={{flex:1}}>
          <Text onPress={() => navigation.goBack()}>Previous page</Text>
        </View>
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
