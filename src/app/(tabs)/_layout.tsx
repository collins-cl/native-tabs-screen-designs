import { NativeTabs } from "expo-router/native-tabs";
import { useTheme } from "@/hooks/useTheme/ThemeProvider";

const TabsLayout = () => {
    const { colors } = useTheme();
    const contentStyle = { backgroundColor: colors.background };

    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index" contentStyle={contentStyle}>
                <NativeTabs.Trigger.Icon sf="sun.max" />
                <NativeTabs.Trigger.Label>Today</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="calendar" contentStyle={contentStyle}>
                <NativeTabs.Trigger.Icon sf="calendar" />
                <NativeTabs.Trigger.Label>Calendar</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="projects" contentStyle={contentStyle}>
                <NativeTabs.Trigger.Icon sf="folder" />
                <NativeTabs.Trigger.Label>Projects</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="profile" contentStyle={contentStyle}>
                <NativeTabs.Trigger.Icon sf="person" />
                <NativeTabs.Trigger.Label>Me</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
};

export default TabsLayout;
