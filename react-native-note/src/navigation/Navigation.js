import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./stack/bottom/BottomTabStack";
import React from 'react';

export default function Navigation() {
    return (
        <NavigationContainer>
            <BottomTabStack />
        </NavigationContainer>
    );
}
