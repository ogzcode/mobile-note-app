import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import Password from "../../assets/SvgComponent/PasswordSVG";
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
    pinInput: {
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
        letterSpacing: 16,
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

export default function Pin({ navigation }) {
    const [pin, setPin] = useState('');

    return (
        <View style={styles.container}>
            <Password width={300} height={200} />
            <View style={styles.contentBox}>
                <Text style={styles.text}>Enter your PIN</Text>
                <Text style={styles.content}>
                    We need a PIN for the security of your data.
                </Text>
                <TextInput
                    style={[styles.pinInput, { textAlign: 'center'}]}
                    onChangeText={setPin}
                    value={pin}
                    inputMode='numeric'
                    maxLength={4}
                />
                <Pressable onPress={() => navigation.navigate("BottomTabStack")} style={[styles.loginBtn]}>
                    <Text style={styles.loginBtnText}>Finish</Text>
                </Pressable>
            </View>
        </View>
    );
}