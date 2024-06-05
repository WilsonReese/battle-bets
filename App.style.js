import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-evenly",
    },
    header: {
        flex: .75,
        backgroundColor: "red"
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