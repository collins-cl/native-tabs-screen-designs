import { Stack } from "expo-router";

import { ThemeProvider, useTheme } from "../hooks/useTheme/ThemeProvider";

function RootNavigator() {
    const { colors } = useTheme();

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: colors.background,
                },
            }}
        >
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <RootNavigator />
        </ThemeProvider>
    );
}
