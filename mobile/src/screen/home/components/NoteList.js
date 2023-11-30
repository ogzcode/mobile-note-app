import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';

import { setSelectedNoteAction } from '../../../store/slice/noteSlice';

import { spacing } from '../../../style/spacing';
import { fontSize } from '../../../style/fontSize';
import { radius } from '../../../style/radius';
import { sky, slate, yellow } from '../../../style/color';
import { fontWeight } from '../../../style/fontWeight';
import { size } from '../../../style/size';
import { shadow } from '../../../style/shadow';

import { getSplitDay } from '../../../utils/util';

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
        fontWeight: "400",
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
    },
    pinIconBox: {
        marginLeft: 'auto',
        width: spacing['8'],
        height: spacing['8'],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: yellow[500],
        borderRadius: radius['full'],
    }
});


export default function NoteList({ onSelectItem }) {
    const { notes, searchQuery } = useSelector(state => state.note);

    const dispatch = useDispatch();

    const handleSelect = (note) => {
        dispatch(setSelectedNoteAction(note));
        onSelectItem();
    }

    const filterNotes = useMemo(() => {
        const copy = searchQuery === '' ? notes : notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

        const sorted = [...copy].sort((a, b) => {
            if (a.isPinned && !b.isPinned) return -1;
            if (!a.isPinned && b.isPinned) return 1;
            return 0;
        })

        return sorted
    }, [searchQuery, notes]);

    return (
        <ScrollView style={styles.noteContainer}>
            {
                filterNotes?.map((item, index) => (
                    <Pressable onPress={() => handleSelect(item)} style={styles.noteItem} key={index}>
                        <View style={styles.itemHeader}>
                            <View style={styles.headerDate}>
                                <Text style={styles.dateText}>{getSplitDay(item.createdAt, "day")}</Text>
                                <Text style={styles.dateText}>{getSplitDay(item.createdAt)}</Text>
                            </View>
                            <Text style={styles.noteName}>{item.title}</Text>
                            {item.isPinned && <View style={styles.pinIconBox}>
                                <AntDesign name="pushpino" size={16} color={item.isPinned && yellow[500]} />
                            </View>}
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