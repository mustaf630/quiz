
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../screens/category';
import Quiz from '../screens/quiz';

const MainNavigators = () => {
    const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
        <stack.Screen name='startPage'
        component={Category}
        options={{
        headerShown:false,
        }}/>
        <stack.Screen 
        name='quiz'
        component={Quiz}
        options={{
            headerShown:false,
        }}/>
    </stack.Navigator>
  )
}

export default MainNavigators