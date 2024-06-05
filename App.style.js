import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: "#061826",
        justifyContent: "space-evenly",
    },
    header: {
        flex: .75,
        justifyContent: "space-around",
        paddingHorizontal: 8,
    },
    body: {
        flex: 12,
        backgroundColor: "green"
    },
    footer: {
        flex: .75,
        backgroundColor: "blue"
    },
});