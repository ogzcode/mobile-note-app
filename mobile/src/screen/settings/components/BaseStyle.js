import { StyleSheet } from "react-native";

import { spacing } from '../../../style/spacing';
import { fontSize } from '../../../style/fontSize';
import { radius } from '../../../style/radius';
import { shadow } from '../../../style/shadow';
import { fontWeight } from '../../../style/fontWeight';
import { slate } from '../../../style/color';


export const BaseStyle = StyleSheet.create({
    card: {
        marginHorizontal: spacing['6'],
        marginTop: spacing['6'],
        borderRadius: radius['md'],
        padding: spacing['4'],
        backgroundColor: "#fff",
        boxShadow: shadow['sm'],
    },
    cardHeader: {
        marginBottom: spacing['4'],
    },
    headerTitle: {
        fontSize: fontSize['lg'],
        fontWeight: fontWeight['medium'],
        marginBottom: spacing['1'],
        color: slate[700]
    },
    headerContent: {
        color: slate[500],
        fontSize: fontSize['sm'],
    }
});