import { StyleSheet } from "react-native";

import { sky, slate } from '../../../style/color';
import { spacing } from '../../../style/spacing';
import { fontSize } from "../../../style/fontSize";
import { fontWeight } from "../../../style/fontWeight";
import { radius } from "../../../style/radius";


export const BaseStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    contentBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing["4"],
    },
    text: {
        fontSize: fontSize["3xl"],
        fontWeight: fontWeight["bold"],
        color: slate[800],
    },
    content: {
        fontSize: fontSize["base"],
        textAlign: 'center',
        marginTop: spacing["2"],
        paddingHorizontal: spacing["8"],
        color: slate[600],
    },
    loginBtnText: {
        fontSize: fontSize["base"],
        fontWeight: fontWeight["medium"],
        color: '#ffffff',
    },
    loginBtn: {
        marginTop: spacing["4"],
        backgroundColor: sky[500],
        borderRadius: radius["md"],
        paddingVertical: spacing["2"],
        paddingHorizontal: spacing["4"],
    },
    disabled: {
        opacity: 0.6,
    }
});

export const InputStyle = StyleSheet.create({
    input: {
        marginTop: spacing["8"],
        width: 280,
        height: 40,
        borderWidth: 1,
        borderColor: sky[500],
        borderRadius: radius["md"],
        paddingHorizontal: spacing["4"],
        color: slate[500],
        fontSize: fontSize["base"],
    },
    pinInput: {
        letterSpacing: 16,
    }
});