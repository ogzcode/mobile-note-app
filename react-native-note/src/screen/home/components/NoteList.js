import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { setSelectedNoteAction } from '../../../store/slice/noteSlice';

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
        paddingBottom: spacing['6'],
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
        fontWeight: fontWeight['medium'],
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


export default function NoteList({ onSelectItem }) {
    const { notes } = useSelector(state => state.note);

    const dispatch = useDispatch();

    const getDay = (date, pos) => {
        const dateCopy = date.split(' ')

        if (pos === 'day') {
            return dateCopy[1];
        }
        
        return dateCopy[2];
    }

    const handleSelect = (note) => {
        dispatch(setSelectedNoteAction(note));
        onSelectItem();
    }

    return (
        <ScrollView style={styles.noteContainer}>
            {
                notes?.map((item, index) => (
                    <Pressable onPress={() => handleSelect(item)} style={styles.noteItem} key={index}>
                        <View style={styles.itemHeader}>
                            <View style={styles.headerDate}>
                                <Text style={styles.dateText}>{ getDay(item.createdAt, "day") }</Text>
                                <Text style={styles.dateText}>{ getDay(item.createdAt)}</Text>
                            </View>
                            <Text style={styles.noteName}>{item.title}</Text>
                        </View>
                        <Text style={styles.noteContent}>
                            {item.content.substring(0, 100)}...
                        </Text>
                        <View style={styles.leftBar}></View>
                    </Pressable>
                ))
            }
        </ScrollView>
    );
}