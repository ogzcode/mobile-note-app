import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Welcome from '../../../screen/login/Welcome';
import Email from '../../../screen/login/Email';
import Pin from '../../../screen/login/Pin';

const Stack = createStackNavigator();

export default function LoginStack() {
    const { firstLogin } = useSelector(state => state.auth);
    const navigation = useNavigation();

    useEffect(() => {
        if (firstLogin) {
            navigation.navigate("Pin");
        }
    }, [firstLogin])

    return (
        <Stack.Navigator
            initialRouteName={firstLogin ? "Pin" : "Welcome"}
            screenOptions={{
                gestureEnabled: false,
                headerShown: false
            }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Pin" component={Pin} />
        </Stack.Navigator>
    );
}
