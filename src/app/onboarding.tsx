import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { colors, spacing } from '../constants/theme';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.artArea}>
        <View style={styles.compassCircle}>
          <View style={styles.needleVertical} />
          <View style={styles.needleHorizontal} />
        </View>
      </View>

      <View style={styles.textArea}>
        <Text style={styles.title}>Belajar sambil menjelajah</Text>
        <Text style={styles.subtitle}>
          Kenali budaya, bahasa, dan sumber daya alam dari 190+ negara lewat peta interaktif.
        </Text>
      </View>

      <View style={styles.bottomArea}>
        <PrimaryButton
          label="Mulai jelajahi"
          color="ink"
          onPress={() => router.replace('/(tabs)')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment },
  artArea: {
    flex: 1,
    backgroundColor: '#EAE1CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  compassCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  needleVertical: {
    position: 'absolute',
    width: 2,
    height: 34,
    backgroundColor: colors.clay,
    top: 8,
  },
  needleHorizontal: {
    position: 'absolute',
    width: 34,
    height: 2,
    backgroundColor: colors.clay,
    left: 8,
  },
  textArea: {
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xxl,
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: colors.ink,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 12.5,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 19,
  },
  bottomArea: {
    paddingHorizontal: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
});
