import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { sky, slate } from '../style/color';
import { size } from '../style/size';
import { spacing } from '../style/spacing';
import { fontSize } from '../style/fontSize';
import { radius } from '../style/radius';

const styles = StyleSheet.create({
    select: {
        position: 'relative',
        borderRadius: radius['default'],
        backgroundColor: sky[200],
        width: size['9'],
        height: size['9'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    options: {
        position: 'absolute',
        top: "100%",
        right: 0,
        width: 120,
        backgroundColor: "#fff",
        marginTop: spacing['1'],
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .1,
        shadowRadius: radius['md'],
        elevation: 2,
        borderRadius: radius['md'],
    },
    optionItem: {
        padding: spacing['3'],
        borderBottomWidth: 1,
        borderBottomColor: slate[200],
    },
    optionText: {
        fontSize: fontSize['sm'],
        color: slate[700],
    }
});


export default function SelectBox({ onChangeSelected, options }) {
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (value) => {
        onChangeSelected(value);
        setShowOptions(false);
    }

    return (
        <View style={styles.select} >
            <Pressable onPress={() => setShowOptions(!showOptions)}>
                <AntDesign name="bars" size={size['5']} color={sky[700]} />
            </Pressable>
            {
                showOptions && (
                    <View style={styles.options}>
                        {
                            options?.map((option, index) => (
                                <Pressable key={index} onPress={() => handleSelect(option)} style={styles.optionItem}>
                                    <Text style={styles.optionText}>{option.label}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                )
            }
        </View >
    );
}