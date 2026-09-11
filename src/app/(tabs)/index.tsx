import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { colors, radius, spacing, shadow } from '../../constants/theme';
import { countries, Country } from '../../data/countries';
import ContinentMap from '../../components/ContinentMap';

export default function HomeMapScreen() {
  const [selected, setSelected] = useState<Country>(countries[0]);

  const handlePressCountry = (c: Country) => setSelected(c);
  const handleOpenDetail = () => router.push(`/country/${selected.id}`);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greet}>SELAMAT DATANG KEMBALI</Text>
        <Text style={styles.title}>Jelajahi dunia</Text>
        <Pressable style={styles.searchBar} onPress={() => router.push('/(tabs)/search')}>
          <Text style={styles.searchPlaceholder}>🔍 cari negara, benua, atau bahasa...</Text>
        </Pressable>
      </View>

      <View style={styles.mapArea}>
        <ContinentMap countries={countries} onPressCountry={handlePressCountry} />
      </View>

      <Pressable style={[styles.previewCard, shadow.card]} onPress={handleOpenDetail}>
        <View style={styles.flagBox}>
          <Text style={styles.flagBoxText}>{selected.flagCode}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.previewRegion}>
            {selected.region.toUpperCase()} — DIPELAJARI 0%
          </Text>
          <Text style={styles.previewName}>{selected.name}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink },
  header: {
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  greet: { color: '#C9BFA3', fontSize: 10.5, marginBottom: 4 },
  title: { color: colors.parchment, fontSize: 21, fontWeight: '600', marginBottom: spacing.md },
  searchBar: {
    backgroundColor: 'rgba(243,236,220,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(243,236,220,0.22)',
    borderRadius: radius.md,
    paddingVertical: spacing.sm + 1,
    paddingHorizontal: spacing.md,
  },
  searchPlaceholder: { color: '#C9BFA3', fontSize: 12 },
  mapArea: { flex: 1 },
  previewCard: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.xl,
    backgroundColor: colors.parchment,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  flagBox: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    backgroundColor: colors.clay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagBoxText: { color: colors.parchment, fontWeight: '700', fontSize: 12 },
  previewRegion: { fontSize: 10, color: colors.tealDeep, marginBottom: 2 },
  previewName: { fontSize: 15.5, fontWeight: '600', color: colors.ink },
});
