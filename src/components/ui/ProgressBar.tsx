import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius } from '../../constants/theme';

export default function ProgressBar({ progress }: { progress: number }) {
  // progress: 0..1
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${Math.round(progress * 100)}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 6,
    backgroundColor: 'rgba(28,43,57,0.10)',
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.gold,
    borderRadius: radius.sm,
  },
});
