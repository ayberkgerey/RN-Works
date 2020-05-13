import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/drawer';
import {Home, Details} from '../screens';
import Header from '../shared/header';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();

export default function HomeStack(navigation) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {backgroundColor: 'orange'},
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Icon
                name="menu"
                color="white"
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.openDrawer())
                }
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          headerStyle: {backgroundColor: 'orange'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}
