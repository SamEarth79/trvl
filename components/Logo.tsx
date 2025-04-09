import React from "react";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import TextLogo from "../assets/images/logofile"
import TextLogo2 from "../assets/images/logo2file"

const Logo = ({ width, height, withText = false, size = "small" } : {withText: Boolean, width: Number, height: Number, size?: String}) => {
	return (
		<ThemedView style={styles.logoContainer}>
			<View style={styles.logo}>
				{
					size === "small" ? 
					<TextLogo width={width} height={height}/> :
					<TextLogo2 width={width} height={height}/>
				}
			</View>
			{withText && (
				<>
					<ThemedText style={styles.text}>
						Focus on the fun. 
					</ThemedText>
					<ThemedText style={styles.text}>
						We'll manage the details.
					</ThemedText>
				</>
			)}
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	logoContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.light.background,
	},
	logo: {
		backgroundColor: Colors.light.background,
	},
	text: {
		color: Colors.light.text,
		fontSize: 14,
		textAlign: "center",
		paddingHorizontal: 20,
		backgroundColor: Colors.light.background,
		marginVertical: -2,
	},
});

export default Logo;
