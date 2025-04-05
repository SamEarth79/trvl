import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PrimaryButton = ({text, action}: {text: string, action: any}) => {
  return (
    <View style={styles.container} onTouchEnd={action}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 100,
        paddingHorizontal: 25,
        paddingVertical: 14,
        borderWidth: 2,
        backgroundColor: Colors.dark.primary,
        width: "100%",
    },
    text: {
        color: Colors.light.text,
        fontSize: 18,
        textAlign: "center",
    }
})

export default PrimaryButton
