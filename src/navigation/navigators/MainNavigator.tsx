import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, SplashScreen} from '@screens/index';

const MainStack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <>
      {/* <Text>dasdadasd</Text> */}
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="SplashScreen" component={SplashScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;
