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
			{/* <GoogleSigninButton
				size={GoogleSigninButton.Size.Wide}
				color={GoogleSigninButton.Color.Dark}
				onPress={() => {
					// initiate sign in
					handleGoogleSignIn();
				}}
				disabled={false}
			/> */}
			<PrimaryButton
				text="Get Started"
				action={() => {
					handleGoogleSignIn();
				}}
			/>
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
		paddingTop: 80,
	},
});
