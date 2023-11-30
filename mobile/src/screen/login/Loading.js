import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { sky } from '../../style/color'

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={sky[500]} />
        </View>
    )
}