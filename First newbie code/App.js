import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.boldText}>Hello Sir</Text>
      </View>

     <View style={styles.body}>
     <Text style={styles.boldText}>Call <Text>yeahehe</Text></Text>
     <Text style={styles.boldText}>Me</Text>
     <Text style={styles.boldText}>Maybe</Text>
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
  header: {
    backgroundColor: 'orange',
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    

  }

});
