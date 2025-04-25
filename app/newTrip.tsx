import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "@/components/ui/Button";
import { callBackendAPI } from "@/services/backend";
import { useRouter } from "expo-router";

export default function NewTripScreen() {
    const router = useRouter();
	const { userId } = useLocalSearchParams();
	const [date, setDate] = useState<Date>(new Date());
	const [show, setShow] = useState(false);
	const [selectedCurrency, setSelectedCurrency] = useState("INR");
	const [tripName, setTripName] = useState("");
	const [tripDestination, setTripDestination] = useState("");
	const [error, setError] = useState("");

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	const showDatePicker = () => {
		setShow(true);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.header}>Hurray, New Trip!</Text>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Trip Name</Text>
					<TextInput 
						style={styles.input} 
						placeholder="Trip Name" 
						value={tripName} 
						onChangeText={setTripName} 
					/>

					<Text style={styles.label}>Destination</Text>
					<TextInput 
						style={styles.input} 
						placeholder="Destination" 
						value={tripDestination} 
						onChangeText={setTripDestination} 
					/>

					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							gap: 10,
						}}
					>
						<View style={{ flex: 1 }}>
							<Text style={[styles.label, { marginBottom: 5 }]}>
								Date
							</Text>
							<View
								style={{
									backgroundColor: Colors.light.grey,
									height: 50,
									borderRadius: 10,
									paddingHorizontal: 16,
									display: "flex",
									justifyContent: "center",
								}}
								onTouchStart={showDatePicker}
							>
								<Text>
									{date
										?.toLocaleDateString("en-GB", {
											day: "numeric",
											month: "short",
										})
										.replace(",", "")}
								</Text>
							</View>
							{show && (
								<DateTimePicker
									testID="dateTimePicker"
									value={date ?? new Date()}
									mode={"date"}
									is24Hour={true}
									onChange={onChange}
								/>
							)}
						</View>
						<View style={{ flex: 1 }}>
							<Text style={[styles.label, { marginBottom: 5 }]}>
								Currency
							</Text>
							<View
								style={{
									backgroundColor: Colors.light.grey,
									height: 50,
									borderRadius: 10,
									paddingHorizontal: 16,
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Picker
									selectedValue={selectedCurrency}
									onValueChange={(itemValue) =>
										setSelectedCurrency(itemValue)
									}
									style={{
										height: 50,
										backgroundColor: Colors.light.grey,
										borderRadius: 10,
									}}
								>
									<Picker.Item label="USD" value="USD" />
									<Picker.Item label="EUR" value="EUR" />
									<Picker.Item label="JPY" value="JPY" />
									<Picker.Item label="GBP" value="GBP" />
									<Picker.Item label="AUD" value="AUD" />
									<Picker.Item label="CAD" value="CAD" />
									<Picker.Item label="CHF" value="CHF" />
									<Picker.Item label="CNY" value="CNY" />
									<Picker.Item label="INR" value="INR" />
									<Picker.Item label="NZD" value="NZD" />
								</Picker>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View>
				{error && (
					<Text style={{ color: "grey", marginBottom: 10, width: "100%", textAlign: "center" }}>
						{error}
					</Text>
				)}
				<PrimaryButton 
					text="Create Trip" 
					action={async () => {
						if (!tripName || !tripDestination || !date || !selectedCurrency) {
							setError("All fields are required.");
							return;
						}

						setError(""); 
						try {
							const tripData = {
								user_id: userId,
								trip_name: tripName,
								trip_destination: tripDestination,
								from_date: date.toISOString(),
								currency: selectedCurrency,
							};
                            console.log("Trip data:", tripData);
							const response = await callBackendAPI("POST", "/trip", tripData);
							console.log("Trip created successfully:", response);
                            if (response) {
								router.push({
                                    pathname: "/trip",
                                    params: { 
                                        "user_id": userId, 
                                        "trip_id": response["trip_id"]
                                    },
                                });
							}
						} catch (error) {
							console.error("Error creating trip:", error);
						}
					}} 
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: Colors.light.background,
		padding: 30,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	header: {
		fontSize: 24,
		fontWeight: 800,
		marginBottom: 10,
		letterSpacing: -0.6,
	},
	input: {
		height: 50,
		paddingHorizontal: 16,
		backgroundColor: Colors.light.grey,
		marginBottom: 5,
		borderRadius: 10,
		fontSize: 16,
	},
	inputContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 10,
		marginTop: 20,
	},
	label: {
		fontSize: 14,
		fontWeight: 600,
		marginBottom: -5,
	},
});
