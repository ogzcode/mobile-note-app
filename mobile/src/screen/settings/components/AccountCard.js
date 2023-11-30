import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { BaseStyle } from './BaseStyle';

import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { fontSize } from '../../../style/fontSize';
import { fontWeight } from '../../../style/fontWeight';
import { slate, sky, red } from '../../../style/color';

import { updateUserAsync } from '../../../store/slice/authSlice';
import { useToast } from "../../../components/toast/useToast"


const styles = StyleSheet.create({
    formGroup: {
        marginBottom: spacing['6'],
    },
    label: {
        fontSize: fontSize['xs'],
        fontWeight: fontWeight['normal'],
        marginBottom: spacing['1'],
        color: slate[600]
    },
    input: {
        borderWidth: 1,
        borderColor: slate[200],
        borderRadius: radius['default'],
        padding: spacing['2'],
        fontSize: fontSize['sm'],
        color: slate[600],
    },
    pinInput: {
        letterSpacing: spacing['4'],
    },
    infoMsg: {
        fontSize: fontSize['xs'],
        fontWeight: fontWeight['normal'],
        color: red[400],
        marginTop: spacing['1'],
    },
    button: {
        backgroundColor: sky[500],
        borderRadius: radius['default'],
        width: "100%",
        height: spacing['10'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: fontSize['base'],
        fontWeight: fontWeight['medium'],
        color: "#fff",
    },
});

export default function AccountCard() {
    const { userEmail } = useSelector(state => state.auth);
    const { showToast } = useToast();
    const [newEmail, setNewEmail] = useState(userEmail);
    const [newPin, setNewPin] = useState("");

    const dispatch = useDispatch();

    const isShowBtn = () => {
        if (newEmail !== userEmail) {
            return true;
        }

        if (newPin.length === 4) {
            return true;
        }

        return false;
    }

    const handleUpdate = async () => {
        const res = await dispatch(updateUserAsync({
            oldEmail: userEmail,
            email: newEmail,
            pin: newPin
        }));

        if (res.meta.requestStatus === "fulfilled") {
            showToast("Account updated successfully", "success");
        }
        else {
            showToast(res.payload.message, "error");
        }
    }

    return (
        <View style={BaseStyle.card}>
            <View style={BaseStyle.cardHeader}>
                <Text style={BaseStyle.headerTitle}>Account</Text>
                <Text style={BaseStyle.headerContent}>You can use here to update your account details or check security settings.</Text>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput value={newEmail} onChangeText={setNewEmail} style={styles.input} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>PIN</Text>
                <TextInput value={newPin} onChangeText={setNewPin} style={[styles.input, styles.pinInput]} maxLength={4} inputMode='numeric' />
                {
                    newPin.length < 4 && newPin.length > 0 && (
                        <Text style={styles.infoMsg}>PIN must be 4 digits</Text>
                    )
                }
            </View>
            {
                isShowBtn() && (
                    <Pressable style={styles.button} onPress={() => handleUpdate()}>
                        <Text style={styles.buttonText}>Update</Text>
                    </Pressable>
                )
            }
        </View>
    )
}