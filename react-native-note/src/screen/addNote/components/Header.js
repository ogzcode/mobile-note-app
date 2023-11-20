import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { slate } from '../../../style/color';
import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 64,
        paddingHorizontal: spacing[6],
        borderBottomWidth: 1,
        borderBottomColor: slate[200],
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 600,
        color: slate[700],
    },
    uploadBtn: {
        backgroundColor: slate[100],
        padding: 8,
        borderRadius: radius["full"],
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export const Header = ({ onSubmit }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Add Note</Text>
            <Pressable onPress={() => onSubmit()} style={styles.uploadBtn}>
                <AntDesign name="upload" size={20} color={slate[700]} />
            </Pressable>
        </View>
    )
}