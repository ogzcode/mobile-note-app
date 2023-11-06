import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import { spacing } from '../../../style/spacing';
import { fontSize } from '../../../style/fontSize';
import { radius } from '../../../style/radius';
import { slate } from '../../../style/color';

const styles = StyleSheet.create({
    noteContainer: {
        backgroundColor: "#fff",
    },
    noteItem: {
        marginHorizontal: spacing['6'],
        marginTop: spacing['6'],
        borderRadius: radius['md'],
        borderWidth: 1,
        borderColor: slate[300],
        padding: spacing['4'],
    },
    noteName: {
        fontSize: fontSize['base'],
        fontWeight: 'bold',
        marginBottom: spacing['1'],
        color: slate[700]
    },
    noteDate: {
        fontSize: fontSize['xs'],
        marginBottom: spacing['2'],
        fontWeight: 400,
        fontStyle: 'italic',
        color: slate[500]
    },
    noteContent: {
        fontSize: fontSize['sm'],
        color: slate[700],
        fontSize: fontSize['sm'],
    }
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.";

export default function NoteList({ onSelectItem }) {
    return (
        <ScrollView style={styles.noteContainer}>
            {
                [...Array(5)].map((item, index) => (
                    <Pressable onPress={() => onSelectItem()} style={styles.noteItem} key={index}>
                        <Text style={styles.noteName}>Note Name</Text>
                        <Text style={styles.noteDate}>12/08/2023</Text>
                        <Text style={styles.noteContent}>
                            {text.substring(0, 85)}...
                        </Text>
                    </Pressable>
                ))
            }
        </ScrollView>
    );
}