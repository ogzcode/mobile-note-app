import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { slate } from '../../style/color';
import { spacing } from '../../style/spacing';
import { radius } from '../../style/radius';

import { TitleInput } from './components/TitleInput';
import { Header } from './components/Header';
import { shadow } from '../../style/shadow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputBox: {
        flex: 1,
        padding: spacing[6],
        backgroundColor: slate[200],
    },
    time: {
        color: slate[600],
        fontSize: 14,
        fontWeight: 400,
        marginBottom: spacing[4]
    },
    noteContent: {
        flex: 1,
        outlineWidth: 0,
        color: slate[500],
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: "#fff",
        padding: spacing[2],
        borderRadius: radius["default"],
        marginTop: spacing[4],
        boxShadow: shadow["default"],
    }
});


export default function AddNote() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputBox}>
                <Text style={styles.time}>20.12.2022</Text>
                <TitleInput />
                <TextInput style={styles.noteContent} multiline={true} placeholderTextColor={slate[300]} />
            </View>
        </View>
    );
}