import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { slate } from '../style/color';
import { spacing } from '../style/spacing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing[6],
        backgroundColor: "#fff",
    },
    headerInput: {
        fontSize: 18,
        fontWeight: 400,
        color: slate[700],
        paddingVertical: 8,
        outlineWidth: 0,
        borderBottomColor: slate[300],
        borderBottomWidth: 1,
        marginVertical: spacing[4],
        fontFamily: 'sans-serif'
    },
    content: {
        flex: 1,
        outlineWidth: 0,
        color: slate[600],
        letterSpacing: .8,
        lineHeight: 24,
        fontSize: 14,
        fontWeight: 400,

    }
});

export default function AddNote () {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Note Header" style={styles.headerInput} placeholderTextColor={slate[400]} />
            <TextInput placeholder="Note Content" style={styles.content} multiline={true} placeholderTextColor={slate[400]}/>
        </View>
    );
}