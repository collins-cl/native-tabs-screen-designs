import { createContext, useContext, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

import { DarkTheme, LightTheme } from "./themes";

type Theme = typeof LightTheme | typeof DarkTheme;

const ThemeContext = createContext<Theme>(LightTheme);

export function ThemeProvider({ children }: PropsWithChildren) {
    const systemScheme = useColorScheme();
    const theme = systemScheme === "dark" ? DarkTheme : LightTheme;

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
