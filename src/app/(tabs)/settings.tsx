import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { colors, spacing } from '../../constants/theme';

function SettingsGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupLabel}>{label}</Text>
      {children}
    </View>
  );
}

function SettingsRow({
  label,
  value,
  toggle,
  onToggleChange,
}: {
  label: string;
  value?: string;
  toggle?: boolean;
  onToggleChange?: (v: boolean) => void;
}) {
  return (
    <Pressable style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      {toggle !== undefined ? (
        <Switch value={toggle} onValueChange={onToggleChange} trackColor={{ true: colors.teal }} />
      ) : (
        <Text style={styles.rowValue}>{value}</Text>
      )}
    </Pressable>
  );
}

export default function SettingsScreen() {
  const [notif, setNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <SettingsGroup label="PREFERENSI">
        <SettingsRow label="Bahasa" value="Indonesia" />
        <SettingsRow label="Notifikasi harian" toggle={notif} onToggleChange={setNotif} />
        <SettingsRow label="Mode gelap" toggle={darkMode} onToggleChange={setDarkMode} />
      </SettingsGroup>

      <SettingsGroup label="LANGGANAN">
        <SettingsRow label="Paket premium" value="tidak aktif" />
        <SettingsRow label="Kelola pembayaran" value="›" />
      </SettingsGroup>

      <SettingsGroup label="AKUN">
        <SettingsRow label="Keluar" value="›" />
      </SettingsGroup>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment, paddingHorizontal: spacing.xl },
  title: { fontSize: 19, fontWeight: '600', color: colors.ink, marginTop: spacing.md, marginBottom: spacing.lg },
  group: { marginBottom: spacing.xl },
  groupLabel: { fontSize: 10, color: colors.goldDeep, marginBottom: spacing.sm },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  rowLabel: { fontSize: 12.5, color: colors.ink },
  rowValue: { fontSize: 12.5, color: colors.inkSoft },
});
