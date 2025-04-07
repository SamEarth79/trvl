import React from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import TextLogo from "../assets/images/logofile"

const Logo = ({ withText = false }) => {
	return (
		<ThemedView>
			<TextLogo />
			{withText && (
				<ThemedText style={styles.text}>
					Focus on the fun. {"\n"}We'll manage the details.
				</ThemedText>
			)}
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	logo: {
		backgroundColor: Colors.dark.background,
		color: Colors.dark.text,
		fontSize: 70,
		fontWeight: "bold",
		textAlign: "center",
		paddingBottom: 12,
	},
	text: {
		color: Colors.dark.text,
		fontSize: 20,
		textAlign: "center",
		paddingHorizontal: 20,
		backgroundColor: Colors.dark.background,
	},
});

export default Logo;
