import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Muco', key: '1'},
    {name: 'Mert', key: '2'},
    {name: 'Ayberk', key: '3'},
    {name: 'Ismet', key: '4'},
    {name: 'Ozi', key: '5'},
    {name: 'Berkay', key: '6'},
    {name: 'Kylie', key: '7'},
    {name: 'Kendall', key: '8'},
    {name: 'Jennifer', key: '9'},
    {name: 'Kate', key: '10'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
