import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";

export default function TripScreen() {
    const { user_id, trip_id } = useLocalSearchParams();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Trip Details</Text>
            </View>
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
        fontSize: 24,
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
        fontWeight: "400",
        color: Colors.light.secondary,
        marginBottom: 10,
    },
});