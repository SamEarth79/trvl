import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Image, TouchableOpacity } from "react-native";
import Logo from "@/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesone from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';
import TravelBag from "@/assets/images/TravelBag";
import Car from "@/assets/images/CityRoad"

export default function HomeScreen() {
	const { userEmail, userName } = useLocalSearchParams();

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		if (userEmail) {
			const fetchData = async () => {
				try {
					const response = await fetch(
						"https://j2igehf7vgl4rinc2jl73leuc40nfxlv.lambda-url.us-east-1.on.aws/user",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								user_email: userEmail,
								user_name: userName,
							}),
						}
					);
					const result = await response.json();
					setData(result);
				} catch (error) {
					console.error("Error fetching data:", error);
				} finally {
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [userEmail]);

	if (loading) {
		return (
			<ThemedView style={styles.loadingContainer}>
				<ActivityIndicator size="large" color={Colors.light.primary} />
			</ThemedView>
		);
	}

	const Header = () => {
		return (
			<View style={styles.headerContainer}>
				<Logo width={60} height={60} withText={false} />
				<FontAwesone name="bars" size={22} />
			</View>
		);
	};

	const Greetings = () => {
		return (
			<View style={styles.greetingContainer}>
				<Text style={{ fontSize: 17, fontWeight: "400", color: Colors.light.primary, marginBottom: -2 }}>
					Hey {userName}
				</Text>
				<Text style={{ fontSize: 24, fontWeight: "800" }}>
					Ready for your next trip?
				</Text>
			</View>
		);
	};

	const NoTripsDisplay = () => {
		
		
		return (
			<View style={styles.NoTripsContainer}>
				
			</View>
		);
	};

	const TripsDisplay = () => {
		return <View></View>;
	};

	const Actions = () => {

		const Card = ({text, icon, action, primary = true} : {text: string, icon: any, action: any, primary?: Boolean}) => {
			return (
				<TouchableOpacity
					style={{
						backgroundColor: primary ? Colors.light.primary : Colors.light.secondary,
						paddingHorizontal: 12,
						paddingTop: 14,
						paddingBottom: 100,
						width: "50%",
						borderRadius: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "flex-start",
						gap: 10,
						position: "relative",
						overflow: "hidden",
					}}
					onPress={action}
				>
						<Text style={{ color: Colors.light.background, fontSize: 18, fontWeight: "600" }}>
							{text}
						</Text>
						<View style={{position: "absolute", right: -32, bottom: -20}}>
							{icon}
						</View>
				</TouchableOpacity>
			)
		}

		return (
			<View style={styles.actionsContainer}>
				<Card
					text="Create a Trip"
					icon={<TravelBag width={180} height={125} />}
					action={() => {}}
				/>
				<Card
					text="Join a Trip"
					icon={<Car width={180} height={125} />}
					action={() => {}}
					primary={false}
				/>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.homeContainer}>
			<Header />
			<View style={styles.bodyContainer}>
				<Greetings />
				<Actions />
				{/* <Text>Data: {JSON.stringify(data)}</Text> */}
				{data?.trips && data?.trips.length > 0 ? (
					<TripsDisplay />
				) : (
					<NoTripsDisplay />
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		backgroundColor: Colors.light.background,
	},
	homeContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		backgroundColor: Colors.light.background,
		height: "100%",
		gap: 80,
	},
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 30,
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: Colors.light.background,
	},
	bodyContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: Colors.light.background,
		gap: 20,
		marginTop: 60,
		padding: 30,
	},
	greetingContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		backgroundColor: Colors.light.background,
	},
	NoTripsContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.light.background,
		gap: 20,
		width: "100%",
		marginTop: 60,
	},
	actionsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		gap: 20,
		width: "100%",	
	}
});
