import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import { spacing } from '../../../style/spacing';
import { fontSize } from '../../../style/fontSize';
import { radius } from '../../../style/radius';
import { sky, slate } from '../../../style/color';
import { fontWeight } from '../../../style/fontWeight';
import { size } from '../../../style/size';
import { shadow } from '../../../style/shadow';

const styles = StyleSheet.create({
    noteContainer: {
        backgroundColor: slate[100],
        position: 'relative',
    },
    noteItem: {
        marginHorizontal: spacing['6'],
        marginTop: spacing['6'],
        borderRadius: radius['md'],
        padding: spacing['4'],
        backgroundColor: "#fff",
        boxShadow: shadow['sm'],
    },
    noteName: {
        fontSize: fontSize['lg'],
        fontWeight: fontWeight['medium'],
        marginBottom: spacing['1'],
        color: slate[600]
    },
    noteDate: {
        fontSize: fontSize['xs'],
        marginBottom: spacing['2'],
        fontWeight: 400,
        fontStyle: 'italic',
        color: slate[500]
    },
    noteContent: {
        color: slate[500],
        fontSize: fontSize['sm'],
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing['2'],
    },
    headerDate: {
        backgroundColor: sky[50],
        borderRadius: radius['default'],
        width: spacing['10'],
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing['4'],
    },
    dateText: {
        fontSize: fontSize['xs'],
        color: slate[500],
        fontWeight: fontWeight['normal'],
        textTransform: 'uppercase',
    },
    leftBar: {
        position: 'absolute',
        left: 0,
        top: 20,
        bottom: 20,
        width: size['1'],
        backgroundColor: sky[500],
        borderRadius: radius['full'],
    }
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend metus sed tortor finibus sollicitudin dignissim eget quam.";

export default function NoteList({ onSelectItem }) {
    return (
        <ScrollView style={styles.noteContainer}>
            {
                [...Array(10)].map((item, index) => (
                    <Pressable onPress={() => onSelectItem()} style={styles.noteItem} key={index}>
                        <View style={styles.itemHeader}>
                            <View style={styles.headerDate}>
                                <Text style={styles.dateText}>25</Text>
                                <Text style={styles.dateText}>Jan</Text>
                            </View>
                            <Text style={styles.noteName}>Note Name</Text>
                        </View>
                        <Text style={styles.noteContent}>
                            {text.substring(0, 85)}...
                        </Text>
                        <View style={styles.leftBar}></View>
                    </Pressable>
                ))
            }
        </ScrollView>
    );
}