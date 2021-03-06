import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Ayberk');
  const [person, setPerson] = useState({name: 'Michael', age: 40});

  const clickHandler = () => {
    setName('Jackson');
    setPerson({name: 'Billy', age: 20});
    if (name == 'Jackson') {
      setName('Ayberk');
    }
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        {person.name} is {person.age} years old
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
