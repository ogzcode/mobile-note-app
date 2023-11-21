import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';

import { slate, red } from '../style/color';
import { spacing } from '../style/spacing';
import { fontWeight } from '../style/fontWeight';
import { fontSize } from '../style/fontSize';
import { radius } from '../style/radius';
import { shadow } from '../style/shadow';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.2)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineBox: {
        backgroundColor: "#fff",
        padding: spacing['4'],
        width: 300,
        borderRadius: radius['default'],
        boxShadow: shadow['lg'],
    },
    content: {
        fontSize: fontSize['base'],
        fontWeight: fontWeight['medium'],
        color: slate[700],
        padding: spacing['4'],
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: spacing['4'],
    },
    footerBtn: {
        padding: spacing['1'],
        borderRadius: radius['default'],
        width: 72,
        textAlign: 'center',
    },
    cancelBtn: {
        backgroundColor: slate[100],
    },
    cancelText: {
        color: slate[700],
        textAlign: 'center',
        fontSize: fontSize['base'],
    },
    submitBtn: {
        backgroundColor: red[100],
    },
    submitText: {
        color: red[500],
        fontSize: fontSize['base'],
        textAlign: 'center',
        fontWeight: fontWeight['medium'],
    },
});

export default function Popup({ content, visible, onClose, onSubmit }) {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.inlineBox}>
                    <Text style={styles.content}>{ content }</Text>
                    <View style={styles.footer}>
                        <Pressable style={[styles.footerBtn, styles.cancelBtn]} onPress={onClose}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={[styles.footerBtn, styles.submitBtn]} onPress={onSubmit}>
                            <Text style={styles.submitText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}