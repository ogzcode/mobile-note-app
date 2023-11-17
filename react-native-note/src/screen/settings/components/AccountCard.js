import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

import { BaseStyle } from './BaseStyle';

import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { fontSize } from '../../../style/fontSize';
import { fontWeight } from '../../../style/fontWeight';
import { slate, sky } from '../../../style/color';


const styles = StyleSheet.create({
    formGroup: {
        marginBottom: spacing['6'],
    },
    label: {
        fontSize: fontSize['xs'],
        fontWeight: fontWeight['normal'],
        marginBottom: spacing['1'],
        color: slate[600]
    },
    input: {
        borderWidth: 1,
        borderColor: slate[200],
        borderRadius: radius['default'],
        padding: spacing['2'],
        fontSize: fontSize['sm'],
        color: slate[600],
        outlineWidth: 1,
        outlineColor: sky[400],
    },
    button: {
        backgroundColor: sky[500],
        borderRadius: radius['default'],
        width: "100%",
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: fontSize['base'],
        fontWeight: fontWeight['medium'],
        color: "#fff",
    },
});

export default function AccountCard() {
    return (
        <View style={BaseStyle.card}>
            <View style={BaseStyle.cardHeader}>
                <Text style={BaseStyle.headerTitle}>Account</Text>
                <Text style={BaseStyle.headerContent}>You can use here to update your account details or check security settings.</Text>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>PIN</Text>
                <TextInput style={styles.input} />
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Update</Text>
            </Pressable>
        </View>
    )
}