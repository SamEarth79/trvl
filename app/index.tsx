import { StyleSheet, View } from "react-native";
import {
	GoogleSignin,
	isSuccessResponse,
	isErrorWithCode,
	statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Logo from "@/components/Logo";
import PrimaryButton from "@/components/ui/Button";
import { useRouter } from "expo-router";
import {jwtDecode} from "jwt-decode";

export default function HomeScreen() {
	const router = useRouter();

	const handleGoogleSignIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const response = await GoogleSignin.signIn();
			if (isSuccessResponse(response)) {
				const decodedToken: any = jwtDecode(response?.data?.idToken||"");
				const userEmail = decodedToken.email; // Extract the email
				const userName = decodedToken.name.split(" ")[0] || "Unknown"; // Extract the first name
				// Navigate to the home screen or perform any action after successful sign-in
				router.push({
					pathname: "/home",
					params: { userEmail, userName },
				});
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
				<Logo width={190} height={120} withText={true} size="large"/>
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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
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
