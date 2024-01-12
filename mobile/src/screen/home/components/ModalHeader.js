import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';

import { red, slate } from '../../../style/color';
import { radius } from '../../../style/radius';
import { spacing } from '../../../style/spacing';

import { removeNote, setSelectedNoteAction } from '../../../store/slice/noteSlice';


const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing[6],
        paddingVertical: spacing[3],
        backgroundColor: "#fff",
    },
    deleteBtn: {
        width: 40,
        height: 40,
        borderRadius: radius["full"],
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: red[500],
        borderWidth: 2,
        backgroundColor: "#fff",
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: radius["full"],
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: slate[500],
        borderWidth: 2,
        backgroundColor: "#fff",
    }
});

export const ModalHeader = ({ onClose }) => {
    const { selectedNote } = useSelector(state => state.note);
    const dispatch = useDispatch();

    const handleClose = () => {
        onClose();
        dispatch(setSelectedNoteAction(null));
    }

    const handleDelete = async () => {
        await dispatch(removeNote(selectedNote.id));
        onClose();
        dispatch(setSelectedNoteAction(null));
    }
    return (
        <View style={styles.modalHeader}>
            <Pressable onPress={() => handleClose()} style={styles.backBtn}>
                <AntDesign name="left" size={20} color={slate[500]} />
            </Pressable>
            <Pressable onPress={() => handleDelete()} style={styles.deleteBtn}>
                <AntDesign name="delete" size={20} color={red[500]} />
            </Pressable>
        </View>
    )
}