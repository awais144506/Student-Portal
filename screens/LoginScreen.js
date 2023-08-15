import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginParts from '../components/LoginParts'

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Image
                source={require('../assets/campus.jpg')}
                style={{ width:"auto", height: 250 }}
            />
            <LoginParts />
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})