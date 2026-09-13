import React from 'react';
import { View, StyleSheet } from 'react-native';
import { radius } from '../../constants/theme';
import { useThemeColors } from '../../context/ThemeContext';

export default function ProgressBar({ progress }: { progress: number }) {
  const { colors } = useThemeColors();
  return (
    <View style={[styles.track, { backgroundColor: colors.line }]}>
      <View style={[styles.fill, { width: `${Math.round(progress * 100)}%`, backgroundColor: colors.gold }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 6, borderRadius: radius.sm, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: radius.sm },
});
