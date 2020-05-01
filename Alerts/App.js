import React, {useState} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';

export default function App() {
  const ButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  const secondButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  return (
    <View style={styles.container}>
      <Button title={'Alert Button'} onPress={ButtonAlert} />
      <Button title={'Alert Button 2'} onPress={secondButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slateblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
