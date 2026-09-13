import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { radius, spacing } from '../../constants/theme';
import { useThemeColors } from '../../context/ThemeContext';

export default function Tag({ label }: { label: string }) {
  const { colors } = useThemeColors();
  return (
    <View style={[styles.tag, { borderColor: colors.line }]}>
      <Text style={[styles.text, { color: colors.tealDeep }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: { borderWidth: 1, borderRadius: radius.pill, paddingVertical: spacing.xs + 2, paddingHorizontal: spacing.md },
  text: { fontSize: 10.5 },
});
