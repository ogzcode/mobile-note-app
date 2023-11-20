import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { gray, slate } from '../../style/color';
import { spacing } from '../../style/spacing';

import { Header } from './components/Header';

import { getTodayDate } from '../../utils/util';

import { addNote, clearStatus } from '../../store/slice/noteSlice';
import { useToast } from '../../components/toast/useToast';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputBox: {
        flex: 1,
        padding: spacing[4],
    },
    noteHeader: {
        fontSize: 20,
        fontWeight: 400,
        color: slate[700],
        outlineWidth: 0,
        marginBottom: spacing[2],
        paddingBottom: spacing[1],
    },
    subInfo: {
        flexDirection: 'row',
        marginBottom: spacing[4],
        alignItems: 'center',
        gap: spacing[2],
    },
    time: {
        color: slate[500],
        fontSize: 12,
        fontWeight: 400,
    },
    noteContent: {
        flex: 1,
        outlineWidth: 0,
        color: slate[600],
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: "#fff",
    }
});


export default function AddNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { status } = useSelector(state => state.note);

    const navigation = useNavigation();
    const { showToast } = useToast();

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'success') {
            showToast('Note added successfully', 'success');
            navigation.navigate("Home");
            dispatch(clearStatus());
        }
    }, [status]);



    const getCountChars = () => {
        return content.length + title.length;
    }

    const handleSubmit = async () => {
        await dispatch(addNote({
            title,
            content
        }));
        setTitle('');
        setContent('');
    }

    return (
        <View style={styles.container}>
            <Header onSubmit={handleSubmit} />
            <View style={styles.inputBox}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={[styles.noteHeader]}
                    placeholder='Title'
                    placeholderTextColor={gray[400]}
                />
                <View style={styles.subInfo}>
                    <Text style={styles.time}>{getTodayDate()}</Text>
                    <Text style={{ color: slate[600] }}>|</Text>
                    <Text style={styles.time}>{getCountChars()} words</Text>
                </View>
                <TextInput
                    value={content}
                    onChangeText={setContent}
                    style={styles.noteContent}
                    multiline={true}
                    placeholder='Start writing'
                    placeholderTextColor={gray[400]}
                />
            </View>
        </View>
    );
}