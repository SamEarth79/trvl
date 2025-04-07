import { StyleSheet, Text, View } from "react-native";
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
import { useNavigation, useRouter } from "expo-router";

export default function HomeScreen() {
	const navigation = useNavigation();
	const router = useRouter();

	const handleGoogleSignIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const response = await GoogleSignin.signIn();
			if (isSuccessResponse(response)) {
				console.log("User Info: ", response.data);
				// Navigate to the home screen or perform any action after successful sign-in
				router.push("/home");
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
			<View style={styles.logoContainer}>
				<Logo width={150} height={120} withText={true} />
			</View>
			<View style={styles.button}>
				<PrimaryButton
					text="Get Started"
					action={() => {
						handleGoogleSignIn();
					}}
				/>
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
		backgroundColor: Colors.light.background,
		height: "100%",
		gap: 80,
	},
	logoContainer: {
		paddingBottom: 20,
	},
	features: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: Colors.light.background,
		gap: 20,
	},
	featureText: {
		color: Colors.light.text,
		fontSize: 16,
		textAlign: "left",
		paddingHorizontal: 20,
		backgroundColor: Colors.light.background,
	},
	button: {
		width: "90%",
		paddingHorizontal: 20,
		position: "absolute",
		bottom: 100,
	},
});
