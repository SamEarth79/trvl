import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { callBackendAPI } from "@/services/backend";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TripScreen() {
    const { user_id, trip_id } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState(null);

    useEffect(() => {
        const fetchTripDetails = async () => {
            try {
                console.log("Fetching trip details...");
                const response = await callBackendAPI("GET", `/trip?user_id=${user_id}&trip_id=${trip_id}`);
                console.log("Trip details response:", response);
                setTripDetails(response["trip"]);
            } catch (error) {
                console.error("Error fetching trip details:", error);
            }
        };
        if (user_id && trip_id && !tripDetails) {
            fetchTripDetails();
        }
    }, [user_id, trip_id]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{tripDetails?.trip_name}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.value}>{tripDetails?.trip_destination}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.value}>{tripDetails?.from_date}</Text>
                </View>
            </View>
            {/* Render trip details here if needed */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: Colors.light.background,
        padding: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 32,
        fontWeight: "800",
        color: Colors.light.primary,
    },
    bodyContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.light.text,
    },
    value: {
        fontSize: 18,
        // fontWeight: "400",
        color: Colors.light.greyText,
        marginBottom: 10,
    },
    detailsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 4,
    },
});