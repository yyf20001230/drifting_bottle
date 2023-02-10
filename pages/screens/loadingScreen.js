import { SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingScreen () {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      <ActivityIndicator color='black' size='large'/>
    </SafeAreaView>
  )
}