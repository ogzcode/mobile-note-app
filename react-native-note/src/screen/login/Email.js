import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EmailSVG from '../../assets/SvgComponent/EmailSVG';
import { TextInput } from 'react-native-gesture-handler';
import { sky } from '../../style/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    contentBox: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 24,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#262626'
    },
    content: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
        paddingHorizontal: 20,
        color: '#737373'
    },
    emailInput: {
        marginTop: 24,
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: sky[500],
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
        outlineWidth: 0,
        color: '#525252',
        fontSize: 16,
    },
    loginBtnText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#ffffff',
    },
    loginBtn: {
        marginTop: 24,
        backgroundColor: sky[500],
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    disabled: {
        opacity: 0.5,
    }
});

export default function Email({ navigation }) {
    const [email, setEmail] = useState('');

    const isDisabled = () => {
        return email === "" || !isEmail();
    }

    const isEmail = () => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <View style={styles.container}>
            <EmailSVG width={300} height={200} />
            <View style={styles.contentBox}>
                <Text style={styles.text}>Enter your Email</Text>
                <Text style={styles.content}>
                    If you share your e-mail address, they can communicate with you more closely.
                </Text>
                <TextInput value={email}
                    onChangeText={setEmail}
                    style={styles.emailInput}
                    placeholder='email@mail.com'
                    placeholderTextColor={"#a3a3a3"}
                    inputMode='email-address'
                    autoCapitalize="none"
                />
                <Pressable onPress={() => navigation.navigate('Pin')} style={[styles.loginBtn, isDisabled() && styles.disabled]} disabled={isDisabled()}>
                    <Text style={styles.loginBtnText}>Next</Text>
                    <AntDesign name="arrowright" size={16} color="white" style={{ marginLeft: 6, marginTop: 4 }} />
                </Pressable>
            </View>
        </View>
    );
}