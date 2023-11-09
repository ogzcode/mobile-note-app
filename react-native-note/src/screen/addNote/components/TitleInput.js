import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { slate } from '../../../style/color';
import { spacing } from '../../../style/spacing';
import { radius } from '../../../style/radius';
import { shadow } from '../../../style/shadow';

const styles = StyleSheet.create({
    noteHeader: {
        fontSize: 18,
        fontWeight: 500,
        color: slate[600],
        padding: spacing[2],
        outlineWidth: 0,
        backgroundColor: "#fff",
        marginBottom: spacing[1],
        borderRadius: radius["default"],
        boxShadow: shadow["sm"],
        letterSpacing: 0.8,
    }
});

export const TitleInput = ({ value, onChangeText }) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <TextInput style={[styles.noteHeader]}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)} />
    )
}