
import React from 'react';
import ReduxProvider from './app/redux/ReduxProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import IndexScreen from "./app/IndexScreen";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
          <SafeAreaProvider>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                      <Stack.Screen name="Home" component={IndexScreen} style={{textAlign:'center'}}/>
                      <Stack.Screen name="GameScreen" component={ReduxProvider}/>
                  </Stack.Navigator>
              </NavigationContainer>
          </SafeAreaProvider>
  );
}

