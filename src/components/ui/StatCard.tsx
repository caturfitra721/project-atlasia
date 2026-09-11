import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

type Props = { value: string; label: string };

export default function StatCard({ value, label }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value} numberOfLines={1}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.parchmentDeep,
    borderRadius: radius.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: 3,
  },
  label: {
    fontSize: 10,
    color: colors.inkSoft,
  },
});
