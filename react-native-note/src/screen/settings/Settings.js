import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { slate } from '../../style/color';
import { spacing } from '../../style/spacing';

import AccountCard from './components/AccountCard';
import HelpCard from './components/helpCard';
import DeleteCard from './components/DeleteCard';

import { getUserInfo } from '../../services/apiServices/userRequest';
import { setAuth, setEmail } from '../../store/slice/authSlice';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: slate[100],
        paddingBottom: spacing['6'],
    }
});


export default function Settings() {
    const dispatch = useDispatch();

/*     useEffect(() => {
        getUserInfo()
            .then(res => {
                dispatch(setEmail(res.data.email));
                dispatch(setAuth(true));
            })
            .catch(err => {
                if (err.response.status === 401) {
                    console.log(err.response.data);
                    dispatch(setAuth(false));
                }
            });

    }, []); */

    return (
        <ScrollView style={styles.container}>
            <AccountCard />
            <HelpCard />
            <DeleteCard />
        </ScrollView>
    );
}

