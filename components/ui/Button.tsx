import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PrimaryButton = ({text, action}: {text: string, action: any}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 14,
        backgroundColor: Colors.light.primary,
        width: "100%",
    },
    text: {
        color: Colors.light.text,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600",
    }
})

export default PrimaryButton
