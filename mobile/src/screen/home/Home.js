import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

import { useDispatch } from 'react-redux';
import { fetchNotes } from '../../store/slice/noteSlice';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default function Home() {
    const [noteModalVisible, setNoteModalVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, []);

    return (
        <View style={styles.container}>
            <NoteList onSelectItem={() => setNoteModalVisible(true)} />
            <NoteModal
                visible={noteModalVisible}
                onClose={() => setNoteModalVisible(false)}
            />
        </View>
    );
}