import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import { slate, yellow } from '../../../style/color';
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
        borderWidth: 1,
    },
    activePin: {
        borderColor: yellow[500],
        backgroundColor: yellow[500],
    },
    deactivePin: {
        borderColor: slate[500],
        backgroundColor: slate[50],
    }
});

export default function NoteModal({ visible, onClose }) {
    const { selectedNote } = useSelector(state => state.note);

    if (!visible || !selectedNote) return null;

    const getDate = (date) => {
        const d = new Date(date);
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();

        return `${day}.${month}.${year}`;
    }

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
                        <Text style={styles.time}>{getDate(selectedNote.createdAt)}</Text>
                        <Pressable style={[styles.pinnedBtn, !selectedNote?.isPinned ? styles.activePin : styles.deactivePin ]}>
                            <AntDesign name="pushpino" size={18} color={!selectedNote?.isPinned ? "#fff" : slate[500]} />
                        </Pressable>
                    </View>
                    <Text style={styles.name}>{ selectedNote?.title }</Text>
                    <Text style={styles.contentText}>
                        { selectedNote?.content }
                    </Text>
                </ScrollView>
            </View>
        </Modal>
    );
}