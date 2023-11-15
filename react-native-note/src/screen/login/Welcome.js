import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import WelcomeSVG from '../../assets/SvgComponent/WelcomeSVG';
import { AntDesign } from '@expo/vector-icons';

import { sky } from '../../style/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    contentBox: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 24,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#262626'
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
        paddingHorizontal: 20,
        color: '#737373'
    },
    loginBtnText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#ffffff',
    },
    loginBtn: {
        marginTop: 24,
        backgroundColor: sky[500],
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
});

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
        <View style={styles.container}>
            <WelcomeSVG width={400} height={300} />
            <View style={styles.contentBox}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.content}>
                    Welcome to our application. We are here to give you a great experience.
                </Text>
                <Pressable onPress={() => navigation.navigate('Email')} style={[styles.loginBtn, marginLeft]}>
                    <Text style={styles.loginBtnText}>Go to Login</Text>
                    <Animated.View style={{ marginLeft: 6, marginTop: 4, transform: [{ translateX: marginLeft }] }}>
                        <AntDesign name="arrowright" size={16} color="white" />
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    );
}