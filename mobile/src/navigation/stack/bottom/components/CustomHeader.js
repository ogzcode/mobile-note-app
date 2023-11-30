import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { searchNoteAction } from '../../../../store/slice/noteSlice';

import { size } from '../../../../style/size';
import { sky, slate } from '../../../../style/color';
import { radius } from '../../../../style/radius';
import { spacing } from '../../../../style/spacing';
import { fontWeight } from '../../../../style/fontWeight';
import { fontSize } from '../../../../style/fontSize';


const styles = StyleSheet.create({
    headerContainer: {
        height: size['16'],
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: slate[200],
    },
    homeHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: spacing['4'],
    },
    textSetting: {
        fontSize: fontSize['lg'],
        color: slate[700],
        fontWeight: fontWeight['semibold'],
        letterSpacing: 1,
    },  
    searchBox: {
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderColor: sky[300],
        borderRadius: radius['full'],
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: spacing['2'],
        paddingHorizontal: spacing['4'],
    },
    searchInput: {
        width: '100%',
        color: slate[500],
    },
});

const HomeHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const dispatch = useDispatch();

    const handleChangeSearch = (query) => {
        setSearchQuery(query);
        dispatch(searchNoteAction(query));
    };

    return (
        <View style={[styles.headerContainer, styles.homeHeader]}>
            <View style={styles.searchBox}>
                <AntDesign name="search1" size={size['5']} color={sky[500]} style={{ marginRight: spacing[2] }} />
                <TextInput value={searchQuery} onChangeText={handleChangeSearch} placeholder="Search" placeholderTextColor={slate[500]} style={styles.searchInput} />
            </View>
        </View>
    );
};

const SettingsHeader = () => {
    return (
        <View style={[styles.headerContainer, styles.settingsHeader]}>
            <Text style={styles.textSetting}>Settings</Text>
        </View>
    );
}

export const CustomHeader = ({ title }) => {
    if (title === 'Home') {
        return <HomeHeader />;
    }
    else if (title === 'Settings') {
        return <SettingsHeader />;
    }
    else {
        return null
    }
};