import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { useThemeColors } from '../../context/ThemeContext';

function Dot({ focused, activeColor, inactiveColor }: { focused: boolean; activeColor: string; inactiveColor: string }) {
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: focused ? activeColor : inactiveColor, opacity: focused ? 1 : 0.25 },
      ]}
    />
  );
}

export default function TabsLayout() {
  const { colors } = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.parchmentDeep, borderTopColor: colors.line },
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.clay,
        tabBarInactiveTintColor: colors.inkSoft,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ focused }) => <Dot focused={focused} activeColor={colors.clay} inactiveColor={colors.ink} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Cari',
          tabBarIcon: ({ focused }) => <Dot focused={focused} activeColor={colors.clay} inactiveColor={colors.ink} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused }) => <Dot focused={focused} activeColor={colors.clay} inactiveColor={colors.ink} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Pengaturan',
          tabBarIcon: ({ focused }) => <Dot focused={focused} activeColor={colors.clay} inactiveColor={colors.ink} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dot: { width: 6, height: 6, borderRadius: 3 },
});
