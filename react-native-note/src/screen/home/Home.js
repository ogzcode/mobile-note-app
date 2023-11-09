import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';
import { slate } from '../../style/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: slate[200],
    }
});

export default function Home() {
    const [noteModalVisible, setNoteModalVisible] = useState(false);

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