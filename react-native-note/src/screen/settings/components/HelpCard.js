import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BaseStyle } from './BaseStyle';

import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { sky, pink, teal, red } from '../../../style/color';


const styles = StyleSheet.create({
    social: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialBtn: {
        borderRadius: radius['default'],
        width: spacing['10'],
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default function HelpCard() {
    return (
        <View style={BaseStyle.card}>
            <View style={BaseStyle.cardHeader}>
                <Text style={BaseStyle.headerTitle}>Help</Text>
                <Text style={BaseStyle.headerContent}>
                    If you encounter any problems or need help, we are here!
                    You can use these social media accounts to get help and send us your questions.
                </Text>
            </View>
            <View style={styles.social}>
                <Pressable style={[styles.socialBtn, { backgroundColor: sky[100] }]}>
                    <FontAwesome name="facebook-square" size={20} color={sky[500]} />
                </Pressable>
                <Pressable style={[styles.socialBtn, { backgroundColor: pink[100] }]}>
                    <FontAwesome name="instagram" size={20} color={pink[500]} />
                </Pressable>
                <Pressable style={[styles.socialBtn, { backgroundColor: teal[100] }]}>
                    <FontAwesome name="whatsapp" size={20} color={teal[500]} />
                </Pressable>
                <Pressable style={[styles.socialBtn, { backgroundColor: red[100] }]}>
                    <FontAwesome name="envelope" size={20} color={red[500]} />
                </Pressable>
            </View>
        </View>
    )
}