import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import EmailSVG from '../../assets/SvgComponent/EmailSVG';
import { slate } from '../../style/color';
import { BaseStyle, InputStyle } from './style/BaseStyle';

import { setEmail as setEmailDispatch } from '../../store/slice/authSlice';

export default function Email({ navigation }) {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const isDisabled = () => {
        return email === "" || !isEmail();
    }

    const isEmail = () => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleNavigatePinPage = () => {
        dispatch(setEmailDispatch(email));
        navigation.navigate('Pin');
    }

    return (
        <View style={BaseStyle.container}>
            <EmailSVG width={300} height={200} />
            <View style={BaseStyle.contentBox}>
                <Text style={BaseStyle.text}>Enter your Email</Text>
                <Text style={BaseStyle.content}>
                    If you share your e-mail address, they can communicate with you more closely.
                </Text>
                <TextInput value={email}
                    onChangeText={setEmail}
                    style={InputStyle.input}
                    placeholder='email@mail.com'
                    placeholderTextColor={slate[500]}
                    inputMode='email-address'
                    autoCapitalize="none"
                />
                <Pressable onPress={() => handleNavigatePinPage()} style={[BaseStyle.loginBtn, isDisabled() && BaseStyle.disabled]} disabled={isDisabled()}>
                    <Text style={BaseStyle.loginBtnText}>Next</Text>
                    <AntDesign name="arrowright" size={16} color="white" style={{ marginLeft: 6, marginTop: 4 }} />
                </Pressable>
            </View>
        </View>
    );
}