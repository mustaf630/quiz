
import React, { useState } from 'react'
import data from './src/questions/data';
import Quiz from './src/screens/quiz';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigators from './src/navigators/mainNavigators';

 

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigators/>
      </NavigationContainer>
    </NativeBaseProvider>
   
  )
}
export default App