import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { sky, slate } from '../../../style/color';
import { spacing } from '../../../style/spacing';
import { fontSize } from '../../../style/fontSize';

import SelectBox from '../../../components/SelectBox';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingVertical: spacing['4'],
        paddingHorizontal: spacing['6'],
        shadowColor: slate[900],
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .2,
        shadowRadius: 20,
        elevation: 5,
        zIndex: 1,
    },
    headerText: {
        fontSize: fontSize['lg'],
        fontWeight: 'bold',
        color: sky[700],
    }
});

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Notes</Text>
            <SelectBox onChangeSelected={(value) => console.log(value)} options={[
                { label: "Option One", value: "One" },
                { label: "Option Two", value: "Two" },
                { label: "Option Three", value: "Three" }
            ]} />
        </View>
    );
}