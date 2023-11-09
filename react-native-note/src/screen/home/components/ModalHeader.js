import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { red, slate } from '../../../style/color';
import { radius } from '../../../style/radius';
import { spacing } from '../../../style/spacing';


const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing[6],
        paddingVertical: spacing[3],
        backgroundColor: "#fff",
    },
    deleteBtn: {
        width: 36,
        height: 36,
        borderRadius: radius["full"],
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: red[500],
        borderWidth: 1,
        backgroundColor: "#fff",
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: radius["full"],
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: slate[500],
        borderWidth: 1,
        backgroundColor: "#fff",
    }
});

export const ModalHeader = ({ onClose }) => {
    return (
        <View style={styles.modalHeader}>
            <Pressable onPress={() => onClose()} style={styles.backBtn}>
                <AntDesign name="left" size={18} color={slate[500]} />
            </Pressable>
            <Pressable style={styles.deleteBtn}>
                <AntDesign name="delete" size={18} color={red[500]} />
            </Pressable>
        </View>
    )
}