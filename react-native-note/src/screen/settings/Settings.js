import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { slate } from '../../style/color';
import { spacing } from '../../style/spacing';

import AccountCard from './components/AccountCard';
import HelpCard from './components/helpCard';
import DeleteCard from './components/DeleteCard';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: slate[100],
        paddingBottom: spacing['6'],
    }
});


export default function Settings() {
    return (
        <ScrollView style={styles.container}>
            <AccountCard />
            <HelpCard />
            <DeleteCard />
        </ScrollView>
    );
}

