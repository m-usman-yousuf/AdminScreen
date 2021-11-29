
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#287737'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen
          name="Admin Home"
          component={ScreenA}
          options={{
            title: 'Admin Home',

            //drawerIcon: ({ focused }) => (
            //<FontAwesome5
            //name="autoprefixer"
            //size={focused ? 25 : 20}
            //color={focused ? '#287737' : '#999999'}
            ///>
            //)
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: 'Screen_B Title',

            //  drawerIcon: ({focused}) => (
            //  <FontAwesome5
            //  name="btc"
            //size={focused ? 25 : 20}
            //color={focused ? '#287737' : '#999999'}
            ///>
            // )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;