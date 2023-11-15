import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./stack/bottom/BottomTabStack";
import LoginStack from "./stack/login/LoginStack";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                gestureEnabled: true,
                headerShown: false
            }}>
                <Stack.Screen name="LoginStack" component={LoginStack} />
                <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
