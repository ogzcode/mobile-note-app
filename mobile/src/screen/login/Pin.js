import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import Password from "../../assets/SvgComponent/PasswordSVG";
import { removeToken, removeFirstLogin, removeUserEmail } from '../../services/storageServices';
import { loginAsync, registerAsync, clearStatus, clearError } from '../../store/slice/authSlice';
import { useToast } from '../../components/toast/useToast';

import { BaseStyle, InputStyle } from './style/BaseStyle';

import { AntDesign } from '@expo/vector-icons';

import { slate } from '../../style/color';

const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    }
});

export default function Pin({ navigation }) {
    const { firstLogin, userEmail, isLoading, error, status } = useSelector(state => state.auth);
    const { showToast } = useToast();

    const [pin, setPin] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "success") {
            showToast("Login success", "success");
            //navigation.navigate("BottomTabStack");
        }
    }, [status]);

    useEffect(() => {
        if (error) {
            showToast(error, "error");
            dispatch(clearError());
        }
    }, [error]);

    const handleSubmit = async () => {
        if (!firstLogin) {
            await dispatch(registerAsync({
                email: userEmail,
                pin: pin
            }));
        } else {
            await dispatch(loginAsync({
                email: userEmail,
                pin: pin
            }));
        }
    }

    const isDisabled = () => {
        if (pin.length < 4) {
            return true;
        }
        return false;
    }

    const handleBack = () => {
        navigation.navigate("Email");
    }

    return (
        <View style={BaseStyle.container}>
            <Pressable onPress={() => handleBack()} style={styles.backBtn}>
                <AntDesign name="left" size={24} color={slate[500]} />
            </Pressable>
            <Password width={300} height={200} />
            <View style={BaseStyle.contentBox}>
                <Text style={BaseStyle.text}>Enter your PIN</Text>
                <Text style={BaseStyle.content}>
                    We need a PIN for the security of your data.
                </Text>
                <TextInput
                    style={[InputStyle.input, InputStyle.pinInput, { textAlign: 'center' }]}
                    onChangeText={setPin}
                    value={pin}
                    inputMode='numeric'
                    maxLength={4}
                />
                <Pressable onPress={() => handleSubmit()} style={[BaseStyle.loginBtn, isDisabled() && BaseStyle.disabled]} disabled={isDisabled()}>
                    <Text style={BaseStyle.loginBtnText}>Finish</Text>
                </Pressable>
            </View>
        </View>
    );
}