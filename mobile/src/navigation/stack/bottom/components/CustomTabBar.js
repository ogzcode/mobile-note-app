import React from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { sky, slate } from "../../../../style/color"
import { size } from "../../../../style/size"
import { spacing } from '../../../../style/spacing';

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        height: size["16"],
        borderTopColor: slate[200],
        borderTopWidth: 1,
        backgroundColor: "#fff"
    },
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBorder: {
        borderRadius: size["2"],
        width: size["8"],
        height: size["0.5"],
        backgroundColor: sky[500],
        opacity: 0,
        marginTop: spacing["1"],
    },
    activeIcon: {
        opacity: 1,
    },
});

const TabBarIcon = ({ iconData }) => {
    const { name, size, color } = iconData;
    return <AntDesign name={name} size={size} color={color} />;
};

const getTabBarIcon = (routeName) => {
    let iconData = {
        name: '',
        size: 0,
        color: '',
    };

    if (routeName === 'Home') {
        iconData.name = 'home';
        iconData.size = size["6"];
        iconData.color = slate[700];
    } else if (routeName === 'AddNote') {
        iconData.name = 'pluscircle';
        iconData.size = size["10"];
        iconData.color = sky[500];
    } else if (routeName === 'Settings') {
        iconData.name = 'setting';
        iconData.size = size["6"];
        iconData.color = slate[700];;
    }
    return <TabBarIcon iconData={iconData} />;
};

export const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <Pressable
                        key={index}
                        onPress={onPress}
                        style={styles.tabBarItem}
                    >
                        {getTabBarIcon(route.name)}
                        <View style={[styles.iconBorder, isFocused && styles.activeIcon]} />
                    </Pressable>
                );
            })}
        </View>
    );
};