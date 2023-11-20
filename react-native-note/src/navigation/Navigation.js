import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabStack from "./stack/bottom/BottomTabStack";
import LoginStack from "./stack/login/LoginStack";

import Toast from "../components/toast/Toast";

import { getFirstLogin, getUserEmail, getToken } from '../services/storageServices';

import { setFirstLogin, setEmail, setAuth } from "../store/slice/authSlice";


const Stack = createStackNavigator();

export default function Navigation() {
    const { isAuth, userEmail, firstLogin } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        getFirstLogin().then((value) => {
            dispatch(setFirstLogin(value ? true : false));
        });


        getUserEmail().then((value) => {
            dispatch(setEmail(value));
        });

        getToken().then((value) => {
            if (value) {
                dispatch(setAuth(true));
            }
            else {
                dispatch(setAuth(false));
            }
        });


    }, [isAuth]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                gestureEnabled: true,
                headerShown: false
            }}>
                {
                    !isAuth ? (
                        <Stack.Screen name="LoginStack" component={LoginStack} />
                    ) : (
                        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
                    )
                }
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    );
}
