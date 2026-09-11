import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

// Dot sederhana sesuai gaya tabbar di mockup (bisa diganti ikon nanti)
function Dot({ focused }: { focused: boolean }) {
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: focused ? colors.clay : colors.ink, opacity: focused ? 1 : 0.25 },
      ]}
    />
  );
}

export default function TabsLayout() {
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
        options={{ title: 'Beranda', tabBarIcon: ({ focused }) => <Dot focused={focused} /> }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: 'Cari', tabBarIcon: ({ focused }) => <Dot focused={focused} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profil', tabBarIcon: ({ focused }) => <Dot focused={focused} /> }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: 'Pengaturan', tabBarIcon: ({ focused }) => <Dot focused={focused} /> }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dot: { width: 6, height: 6, borderRadius: 3 },
});
