import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../../../screen/login/Welcome';
import Email from '../../../screen/login/Email';
import Pin from '../../../screen/login/Pin';

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator screenOptions={{
            gestureEnabled: true,
            headerShown: false
        }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Pin" component={Pin} />
        </Stack.Navigator>
    );
}
