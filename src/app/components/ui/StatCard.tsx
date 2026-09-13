import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { radius, spacing } from '../../constants/theme';
import { useThemeColors } from '../../context/ThemeContext';

type Props = { value: string; label: string };

export default function StatCard({ value, label }: Props) {
  const { colors } = useThemeColors();
  return (
    <View style={[styles.card, { backgroundColor: colors.parchmentDeep }]}>
      <Text style={[styles.value, { color: colors.ink }]} numberOfLines={1}>{value}</Text>
      <Text style={[styles.label, { color: colors.inkSoft }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, borderRadius: radius.sm, paddingVertical: spacing.md, paddingHorizontal: spacing.xs, alignItems: 'center' },
  value: { fontSize: 15, fontWeight: '600', marginBottom: 3 },
  label: { fontSize: 10 },
});
