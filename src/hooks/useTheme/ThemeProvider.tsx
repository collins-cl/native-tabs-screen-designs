import { createContext, useContext, type PropsWithChildren } from "react";
import { ThemeProvider as RouterThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { DarkTheme, LightTheme } from "./themes";

type Theme = typeof LightTheme | typeof DarkTheme;

const ThemeContext = createContext<Theme>(LightTheme);

export function ThemeProvider({ children }: PropsWithChildren) {
    const systemScheme = useColorScheme();
    const theme = systemScheme === "dark" ? DarkTheme : LightTheme;

    return (
        <ThemeContext.Provider value={theme}>
            <RouterThemeProvider value={theme}>
                {children}
            </RouterThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
