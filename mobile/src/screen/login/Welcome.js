import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';

import WelcomeSVG from '../../assets/SvgComponent/WelcomeSVG';

import { BaseStyle } from './style/BaseStyle';

export default function Welcome({ navigation }) {
  const slideAnimation = useRef(new Animated.Value(50)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimations();
  }, []);

  const startAnimations = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={BaseStyle.container}>
      <WelcomeSVG width={400} height={300} />
      <Animated.View
        style={[
          BaseStyle.contentBox,
          {
            transform: [{ translateY: slideAnimation }],
            opacity: opacityAnimation,
          },
        ]}
      >
        <Text style={BaseStyle.text}>Welcome</Text>
        <Text style={BaseStyle.content}>
          Welcome to our application. We are here to give you a great experience.
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Email')}
          style={[BaseStyle.loginBtn]}
        >
          <Text style={BaseStyle.loginBtnText}>Go to Login</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
