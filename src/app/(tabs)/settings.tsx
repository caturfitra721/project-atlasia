import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useThemeColors } from "../../context/ThemeContext";
import { spacing } from "../../constants/theme";
import { Palette } from "../../constants/theme";

function SettingsGroup({
  label,
  children,
  colors,
}: {
  label: string;
  children: React.ReactNode;
  colors: Palette;
}) {
  return (
    <View style={{ marginBottom: spacing.xl }}>
      <Text
        style={{
          fontSize: 10,
          color: colors.goldDeep,
          marginBottom: spacing.sm,
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  );
}

function SettingsRow({
  label,
  value,
  toggle,
  onToggleChange,
  colors,
}: {
  label: string;
  value?: string;
  toggle?: boolean;
  onToggleChange?: (v: boolean) => void;
  colors: Palette;
}) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.line,
      }}
    >
      <Text style={{ fontSize: 12.5, color: colors.ink }}>{label}</Text>
      {toggle !== undefined ? (
        <Switch
          value={toggle}
          onValueChange={onToggleChange}
          trackColor={{ true: colors.teal }}
        />
      ) : (
        <Text style={{ fontSize: 12.5, color: colors.inkSoft }}>{value}</Text>
      )}
    </Pressable>
  );
}

export default function SettingsScreen() {
  const { colors, isDark, toggleDarkMode, settings, setNotification } =
    useThemeColors();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.parchment,
        paddingHorizontal: spacing.xl,
      }}
    >
      <Text
        style={{
          fontSize: 19,
          fontWeight: "600",
          color: colors.ink,
          marginTop: spacing.md,
          marginBottom: spacing.lg,
        }}
      >
        Pengaturan
      </Text>

      <SettingsGroup label="PREFERENSI" colors={colors}>
        <SettingsRow label="Bahasa" value="Indonesia" colors={colors} />
        <SettingsRow
          label="Notifikasi harian"
          toggle={settings.dailyNotification}
          onToggleChange={setNotification}
          colors={colors}
        />
        <SettingsRow
          label="Mode gelap"
          toggle={isDark}
          onToggleChange={toggleDarkMode}
          colors={colors}
        />
      </SettingsGroup>

      <SettingsGroup label="LANGGANAN" colors={colors}>
        <SettingsRow
          label="Paket premium"
          value="tidak aktif"
          colors={colors}
        />
        <SettingsRow label="Kelola pembayaran" value="›" colors={colors} />
      </SettingsGroup>

      <SettingsGroup label="AKUN" colors={colors}>
        <SettingsRow label="Keluar" value="›" colors={colors} />
      </SettingsGroup>
    </SafeAreaView>
  );
}
