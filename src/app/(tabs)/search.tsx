import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { colors, radius, spacing } from '../../constants/theme';
import { countries } from '../../data/countries';

const FILTERS = ['semua', 'asia', 'eropa', 'afrika', 'amerika'];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('semua');

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchQuery = c.name.toLowerCase().includes(query.toLowerCase());
      const matchFilter =
        activeFilter === 'semua' || c.region.toLowerCase().includes(activeFilter);
      return matchQuery && matchFilter;
    });
  }, [query, activeFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cari negara</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="cari nama negara..."
        placeholderTextColor={colors.inkSoft}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        horizontal
        data={FILTERS}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={styles.filterList}
        contentContainerStyle={{ gap: spacing.sm, paddingVertical: spacing.md }}
        renderItem={({ item }) => {
          const active = item === activeFilter;
          return (
            <Pressable
              onPress={() => setActiveFilter(item)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{item}</Text>
            </Pressable>
          );
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => router.push(`/country/${item.id}`)}
          >
            <Text style={styles.rowName}>{item.name}</Text>
            <Text style={styles.rowRegion}>{item.region.toLowerCase()}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment, paddingHorizontal: spacing.xl },
  title: { fontSize: 20, fontWeight: '600', color: colors.ink, marginTop: spacing.md },
  searchInput: {
    backgroundColor: colors.parchmentDeep,
    borderWidth: 1.5,
    borderColor: colors.line,
    borderRadius: radius.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    fontSize: 12.5,
    color: colors.ink,
    marginTop: spacing.md,
  },
  filterList: { flexGrow: 0 },
  chip: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.pill,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  chipActive: { backgroundColor: colors.teal, borderColor: colors.teal },
  chipText: { fontSize: 10, color: colors.inkSoft },
  chipTextActive: { color: colors.parchment },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  rowName: { fontSize: 14.5, fontWeight: '500', color: colors.ink },
  rowRegion: { fontSize: 10, color: colors.inkSoft },
});
