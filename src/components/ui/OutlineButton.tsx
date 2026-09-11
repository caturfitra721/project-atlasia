import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

type Props = {
  label: string;
  onPress?: () => void;
  borderColor?: string;
  textColor?: string;
  style?: ViewStyle;
};

export default function OutlineButton({
  label,
  onPress,
  borderColor = colors.clay,
  textColor = colors.clayDeep,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { borderColor, opacity: pressed ? 0.6 : 1 },
        style,
      ]}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.lg - 3,
    borderRadius: radius.md,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
});
