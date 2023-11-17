import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BaseStyle } from './BaseStyle';

import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { sky, pink, teal, red } from '../../../style/color';
import { fontSize } from '../../../style/fontSize';
import { fontWeight } from '../../../style/fontWeight';

const styles = StyleSheet.create({
    deleteBtn: {
        borderRadius: radius['default'],
        width: "100%",
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: red[500],
    },
    deleteBtnText: {
        fontSize: fontSize['base'],
        fontWeight: fontWeight['medium'],
        color: "#fff",
        marginLeft: spacing['2'],
    },
});

export default function DeleteCard() {
    return (
        <View style={BaseStyle.card}>
            <View style={BaseStyle.cardHeader}>
                <Text style={BaseStyle.headerTitle}>Delete Account</Text>
                <Text style={BaseStyle.headerContent}>
                    Before deleting your account, please think carefully.
                    Once you delete your account, your data cannot be retrieved.
                </Text>
            </View>
            <Pressable style={[styles.deleteBtn]}>
                <FontAwesome name="trash" size={18} color={"#fff"} />
                <Text style={styles.deleteBtnText}>Delete</Text>
            </Pressable>
        </View>
    )
}