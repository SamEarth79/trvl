import { StyleSheet, Text, View} from "react-native";
import {
	GoogleSignin,
	isSuccessResponse,
	isErrorWithCode,
	statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Logo from "@/components/Logo";
import PrimaryButton from "@/components/ui/Button";

export default function HomeScreen() {
	const handleGoogleSignIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const response = await GoogleSignin.signIn();
			if (isSuccessResponse(response)) {
				console.log("User Info: ", response.data);
			}
		} catch (error) {}
	};

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId:
				"372061854636-713f7k7q7i8p9a87bhrejjoeq6quido0.apps.googleusercontent.com",
			webClientId:
				"372061854636-34bo8e0jt9ma4qfd7esde2166ktibc1u.apps.googleusercontent.com",
			profileImageSize: 150,
		});
	}, []);

	return (
		<ThemedView style={styles.homeContainer}>
			<Logo withText={true}/>
			<View style={{ width: "90%", paddingHorizontal: 20, position: "absolute", bottom: 40 }}>
				<PrimaryButton
					text="Get Started"
					action={() => {
						handleGoogleSignIn();
					}}
				/>
			</View>
			<View style={styles.features}>
				<Text style={styles.featureText}>Manage Itinerary</Text>
				<Text style={styles.featureText}>Track Expenses and Splits</Text>
				<Text style={styles.featureText}>Quick Access Files</Text>
				<Text style={styles.featureText}>Share with Friends</Text>
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	homeContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.dark.background,
		height: "100%",
		gap: 80,
		paddingTop: 20,
	},
	features: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: Colors.dark.background,
		gap: 20,
	},
	featureText: {
		color: Colors.dark.text,
		fontSize: 16,
		textAlign: "left",
		paddingHorizontal: 20,
		backgroundColor: Colors.dark.background,
	},
});
