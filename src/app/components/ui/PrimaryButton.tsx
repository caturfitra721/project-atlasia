import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { radius, spacing } from '../../constants/theme';
import { useThemeColors } from '../../context/ThemeContext';

type Props = {
  label: string;
  onPress?: () => void;
  color?: 'clay' | 'ink';
  style?: ViewStyle;
};

export default function PrimaryButton({ label, onPress, color = 'clay', style }: Props) {
  const { colors } = useThemeColors();
  const bg = color === 'clay' ? colors.clay : colors.ink;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg, opacity: pressed ? 0.85 : 1 },
        style,
      ]}
    >
      <Text style={[styles.label, { color: colors.parchment }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.lg - 2,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 14, fontWeight: '700' },
});
