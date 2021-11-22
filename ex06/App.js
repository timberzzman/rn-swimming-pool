import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Button, StatusBar as sb } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);

  const addWord = () => {
    setWords(oldWords => [...oldWords, {text, decoration: false}]);
    setText('');
  };

  const changeDecoration = (index) => {
    let copyWords = [...words];
    let word = {
      ...words[index],
      decoration: !words[index].decoration
    };
    copyWords[index] = word;
    setWords((oldArray) => copyWords);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.textInput} onChangeText={text => setText(text)} defaultValue={text}/>
        <Text style={styles.button} onPress={() => addWord()}>Add</Text>
      </View>
      <ScrollView style={styles.wordsList}>
        {words.map((word, index) => <Text style={word.decoration ? {...styles.decoration, ...styles.word} : styles.word} key={index} onPress={() => changeDecoration(index)}>{word.text}</Text>)}
      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: sb.currentHeight,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height:"8%",
    width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex:5,
    height: 42,
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  button: {
    flex:1,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  wordsList: {
    marginTop: 10,
  },
  word: {
    fontSize: 32
  },
  decoration: {
    textDecorationLine: 'line-through',
  },
  footer: {
    height:"5%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
