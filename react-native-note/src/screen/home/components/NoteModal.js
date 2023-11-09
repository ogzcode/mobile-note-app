import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { orange, red, sky, slate } from '../../../style/color';
import { shadow } from '../../../style/shadow';
import { radius } from '../../../style/radius';
import { spacing } from '../../../style/spacing';

import { ModalHeader } from './ModalHeader.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        fontWeight: 500,
        color: slate[700],
        textAlign: 'center',
        marginBottom: 8,
    },
    time: {
        fontSize: 12,
        fontWeight: 400,
        color: slate[400],
    },
    contentBox: {
        padding: spacing[6],
        backgroundColor: slate[50],
    },
    contentBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    contentText: {
        fontSize: 14,
        color: slate[600],
        lineHeight: 24,
        letterSpacing: .6,
        fontWeight: 400,
        paddingHorizontal: 8,
    },
    pinnedBtn: {
        width: 36,
        height: 36,
        borderRadius: radius["full"],
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderColor: slate[300],
        borderWidth: 1,
    }
});

export default function NoteModal({ visible, onClose }) {
    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <ModalHeader onClose={onClose} />
                <ScrollView style={styles.contentBox}>
                    <View style={styles.contentBoxHeader}>
                        <Text style={styles.time}>01.11.2023</Text>
                        <Pressable style={styles.pinnedBtn}>
                            <AntDesign name="pushpino" size={18} color={slate[500]} />
                        </Pressable>
                    </View>
                    <Text style={styles.name}>Note Name</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor
                        finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.
                    </Text>
                </ScrollView>
            </View>
        </Modal>
    );
}