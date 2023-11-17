/**
 * @fileoverview This module provides functions for storing and retrieving data using AsyncStorage in React Native.
 * @module storageServices
 */

/**
 * Stores a token in AsyncStorage.
 * @async
 * @function setToken
 * @param {string} token - The token to be stored.
 * @returns {Promise<void>} - A Promise that resolves when the token is successfully stored, or rejects with an error.
 */

/**
 * Retrieves a token from AsyncStorage.
 * @async
 * @function getToken
 * @returns {Promise<string|null>} - A Promise that resolves with the stored token, or null if no token is found, or rejects with an error.
 */

/**
 * Removes the stored token from AsyncStorage.
 * @async
 * @function removeToken
 * @returns {Promise<void>} - A Promise that resolves when the token is successfully removed, or rejects with an error.
 */

/**
 * Stores a flag indicating first login in AsyncStorage.
 * @async
 * @function firstLogin
 * @returns {Promise<void>} - A Promise that resolves when the flag is successfully stored, or rejects with an error.
 */

/**
 * Retrieves the flag indicating first login from AsyncStorage.
 * @async
 * @function getFirstLogin
 * @returns {Promise<string|null>} - A Promise that resolves with the stored flag, or null if no flag is found, or rejects with an error.
 */

/**
 * Removes the stored flag indicating first login from AsyncStorage.
 * @async
 * @function removeFirstLogin
 * @returns {Promise<void>} - A Promise that resolves when the flag is successfully removed, or rejects with an error.
 */

/**
 * Stores the user's email in AsyncStorage.
 * @async
 * @function setUserEmail
 * @param {string} email - The email to be stored.
 * @returns {Promise<void>} - A Promise that resolves when the email is successfully stored, or rejects with an error.
 */

/**
 * Retrieves the user's email from AsyncStorage.
 * @async
 * @function getUserEmail
 * @returns {Promise<string|null>} - A Promise that resolves with the stored email, or null if no email is found, or rejects with an error.
 */

/**
 * Removes the stored user's email from AsyncStorage.
 * @async
 * @function removeUserEmail
 * @returns {Promise<void>} - A Promise that resolves when the email is successfully removed, or rejects with an error.
 */


import AsyncStorage from '@react-native-async-storage/async-storage';


export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    }
    catch (error) {
        console.log(error);
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    }
    catch (error) {
        console.log(error);
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    }
    catch (error) {
        console.log(error);
    }
}

export const firstLogin = async () => {
    try {
        await AsyncStorage.setItem('firstLogin', 'true');
    }
    catch (error) {
        console.log(error);
    }
}

export const getFirstLogin = async () => {
    try {
        const firstLogin = await AsyncStorage.getItem('firstLogin');
        return firstLogin;
    }
    catch (error) {
        console.log(error);
    }
}

export const removeFirstLogin = async () => {
    try {
        await AsyncStorage.removeItem('firstLogin');
    }
    catch (error) {
        console.log(error);
    }
}

export const setUserEmail = async (email) => {
    try {
        await AsyncStorage.setItem('email', email);
    }
    catch (error) {
        console.log(error);
    }
}

export const getUserEmail = async () => {
    try {
        const email = await AsyncStorage.getItem('email');
        return email;
    }
    catch (error) {
        console.log(error);
    }
}

export const removeUserEmail = async () => {
    try {
        await AsyncStorage.removeItem('email');
    }
    catch (error) {
        console.log(error);
    }
}
