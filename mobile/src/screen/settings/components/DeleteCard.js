import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { deleteAccountAsync } from '../../../store/slice/authSlice';

import { BaseStyle } from './BaseStyle';

import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { red } from '../../../style/color';
import { fontSize } from '../../../style/fontSize';
import { fontWeight } from '../../../style/fontWeight';

import Popup from '../../../components/Popup';

import { useToast } from '../../../components/toast/useToast';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    deleteBtn: {
        borderRadius: radius['default'],
        width: "100%",
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: red[500],
    },
    deleteBtnText: {
        fontSize: fontSize['base'],
        fontWeight: fontWeight['medium'],
        color: "#fff",
        marginLeft: spacing['2'],
    },
});

export default function DeleteCard() {
    const { showToast } = useToast();
    const [popupVisible, setPopupVisible] = React.useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleDeleteAccount = async () => {
        const res = await dispatch(deleteAccountAsync());
        if (res.meta.requestStatus === "fulfilled") {
            setPopupVisible(false);
            showToast(res.payload.message, "success");
            navigation.navigate("Welcome");
        }
        else {
            showToast(res.payload.message, "error");
        }
    }

    return (
        <View style={[BaseStyle.card, { marginBottom: spacing['6']}]}>
            <View style={BaseStyle.cardHeader}>
                <Text style={BaseStyle.headerTitle}>Delete Account</Text>
                <Text style={BaseStyle.headerContent}>
                    Before deleting your account, please think carefully.
                    Once you delete your account, your data cannot be retrieved.
                </Text>
            </View>
            <Pressable style={[styles.deleteBtn]} onPress={() => setPopupVisible(true)}>
                <FontAwesome name="trash" size={18} color={"#fff"} />
                <Text style={styles.deleteBtnText}>Delete</Text>
            </Pressable>
            <Popup
                content="Are you sure you want to delete your account?"
                visible={popupVisible}
                onClose={() => setPopupVisible(false)}
                onSubmit={handleDeleteAccount}
            />
        </View>
    )
}