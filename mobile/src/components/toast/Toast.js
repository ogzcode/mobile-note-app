import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { useToast } from './useToast';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
        elevation: 4,
        borderLeftWidth: 4,
        zIndex: 9999,
    },
    toastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    message: {
        fontSize: 14,
        marginLeft: 12,
        fontWeight: "500",
    }
});

export default function Toast() {
    const { visible, message, type, hideToast } = useToast();
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }).start();

            const timer = setTimeout(() => {
                hideToast();
            }, 1500);

            return () => {
                Animated.timing(slideAnim).stop();
                clearTimeout(timer);
            };
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const getToastColor = () => {
        switch (type) {
            case 'success':
                return '#0d9488';
            case 'error':
                return '#dc2626';
            case 'warning':
                return '#f77c00';
            case 'info':
                return '#3b82f6';
            default:
                return '#0d9488';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return 'checkmark-circle';
            case 'error':
                return 'close-circle';
            case 'warning':
                return 'warning';
            case 'info':
                return 'information-circle';
            default:
                return 'checkmark-circle';
        }
    };

    return (
        <Animated.View
            style={{
                ...styles.container,
                borderLeftColor: getToastColor() ,
                transform: [
                    {
                        translateY: slideAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-100, 20]
                        }),
                    },
                ],
            }}
        >
            <View style={styles.toastContainer} >
                <Ionicons name={getIcon()} size={28} color={getToastColor()} />
                <Text style={[styles.message, { color: getToastColor() }]}>{ message }</Text>
            </View>
        </Animated.View>
    );
}