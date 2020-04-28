import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Muco', id: '1'},
    {name: 'Mert', id: '2'},
    {name: 'Ayberk', id: '3'},
    {name: 'Ismet', id: '4'},
    {name: 'Ozi', id: '5'},
    {name: 'Berkay', id: '6'},
    {name: 'Kylie', id: '7'},
    {name: 'Kendall', id: '8'},
    {name: 'Jennifer', id: '9'},
    {name: 'Kate', id: '10'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
