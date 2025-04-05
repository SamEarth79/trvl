import React from 'react'
import { ThemedView } from './ThemedView'
import { StyleSheet, Text } from 'react-native'
import { ThemedText } from './ThemedText'
import { Colors } from '@/constants/Colors'

const Logo = ({withText=false}) => {
  return (
    <ThemedView>
        <Text style={styles.logo}>trvl</Text>
        {withText && (
          <ThemedText style={styles.text}>
                Focus on the fun. {'\n'}We'll manage the details.
          </ThemedText>
        )}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
	logo: {
		backgroundColor: Colors.dark.background,
        color: Colors.dark.text,
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 6,
	},
    text: {
        color: Colors.dark.text,
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.dark.background,
    }
});

export default Logo
