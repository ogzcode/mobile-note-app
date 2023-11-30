import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import WelcomeSVG from '../../assets/SvgComponent/WelcomeSVG';

import { BaseStyle} from './style/BaseStyle';

export default function Welcome({ navigation }) {
    return (
        <View style={BaseStyle.container}>
            <WelcomeSVG width={400} height={300} />
            <View style={BaseStyle.contentBox}>
                <Text style={BaseStyle.text}>Welcome</Text>
                <Text style={BaseStyle.content}>
                    Welcome to our application. We are here to give you a great experience.
                </Text>
                <Pressable onPress={() => navigation.navigate('Email')} style={[BaseStyle.loginBtn]}>
                    <Text style={BaseStyle.loginBtnText}>Go to Login</Text>
                </Pressable>
            </View>
        </View>
    );
}