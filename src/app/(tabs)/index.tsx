import { useTheme } from "@/hooks/useTheme/ThemeProvider";
import { Text, View } from "react-native";

const Index = () => {
    const { colors } = useTheme();

    return (
        <View>
            <Text style={{ color: colors.text }}>index</Text>
        </View>
    );
};

export default Index;
