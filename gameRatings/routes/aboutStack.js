import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {About} from '../screens';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyle: {backgroundColor: 'orange'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}
