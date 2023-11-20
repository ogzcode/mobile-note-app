import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import WelcomeSVG from '../../assets/SvgComponent/WelcomeSVG';

import { BaseStyle} from './style/BaseStyle';

export default function Welcome({ navigation }) {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                animatedValue.setValue(0);
                startAnimation();
            }
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const marginLeft = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
    });

    return (
        <View style={BaseStyle.container}>
            <WelcomeSVG width={400} height={300} />
            <View style={BaseStyle.contentBox}>
                <Text style={BaseStyle.text}>Welcome</Text>
                <Text style={BaseStyle.content}>
                    Welcome to our application. We are here to give you a great experience.
                </Text>
                <Pressable onPress={() => navigation.navigate('Email')} style={[BaseStyle.loginBtn, marginLeft]}>
                    <Text style={BaseStyle.loginBtnText}>Go to Login</Text>
                    <Animated.View style={{ marginLeft: 6, marginTop: 4, transform: [{ translateX: marginLeft }] }}>
                        <AntDesign name="arrowright" size={16} color="white" />
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    );
}