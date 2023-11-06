import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { red, sky, slate } from '../../../style/color';
import { shadow } from '../../../style/shadow';
import { radius } from '../../../style/radius';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: slate[300],
        boxShadow: shadow["default"],
        elevation: 5,
        zIndex: 1,
        backgroundColor: sky[500],
    },
    headerItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 600,
        color: slate[700],
        marginLeft: 16,
        color: "#fff"
    },
    contentBox: {
        padding: 24,
        backgroundColor: "#fff",
    },
    contentText: {
        fontSize: 14,
        color: slate[600],
        lineHeight: 24,
        letterSpacing: .8,
        fontWeight: 400,
    },
    footerBtn: {
        marginHorizontal: 8,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius["full"],
        boxShadow: shadow["sm"],
        backgroundColor: "#fff"
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
                <View style={styles.modalHeader}>
                    <View style={styles.headerItem}>
                        <Pressable onPress={onClose}>
                            <AntDesign name="arrowleft" size={20} color={"white"} />
                        </Pressable>
                        <Text style={styles.name}>Note Name</Text>
                    </View>
                    <View style={styles.headerItem}>
                        <Pressable style={[styles.footerBtn, styles.editBtn]} onPress={() => console.log('edit')}>
                            <AntDesign name="edit" size={20} color={sky[500]} />
                        </Pressable>
                        <Pressable style={[styles.footerBtn, styles.deleteBtn]}>
                            <AntDesign name="delete" size={20} color={red[500]} />
                        </Pressable>
                    </View>
                </View>
                <ScrollView style={styles.contentBox}>
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