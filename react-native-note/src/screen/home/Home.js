import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default function Home() {
    const [noteModalVisible, setNoteModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header />
            <NoteList onSelectItem={() => setNoteModalVisible(true)} />
            <NoteModal
                visible={noteModalVisible}
                onClose={() => setNoteModalVisible(false)}
            />
        </View>
    );
}