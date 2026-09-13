import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { radius, spacing } from '../../constants/theme';
import { countries } from '../../data/countries';
import { useThemeColors } from '../../context/ThemeContext';

const FILTERS = ['semua', 'asia', 'eropa', 'afrika', 'amerika'];

export default function SearchScreen() {
  const { colors } = useThemeColors();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('semua');

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchQuery = c.name.toLowerCase().includes(query.toLowerCase());
      const matchFilter = activeFilter === 'semua' || c.region.toLowerCase().includes(activeFilter);
      return matchQuery && matchFilter;
    });
  }, [query, activeFilter]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment, paddingHorizontal: spacing.xl }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: colors.ink, marginTop: spacing.md }}>
        Cari negara
      </Text>
      <TextInput
        style={{
          backgroundColor: colors.parchmentDeep,
          borderWidth: 1.5,
          borderColor: colors.line,
          borderRadius: radius.md,
          paddingVertical: spacing.sm + 2,
          paddingHorizontal: spacing.md,
          fontSize: 12.5,
          color: colors.ink,
          marginTop: spacing.md,
        }}
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
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ gap: spacing.sm, paddingVertical: spacing.md }}
        renderItem={({ item }) => {
          const active = item === activeFilter;
          return (
            <Pressable
              onPress={() => setActiveFilter(item)}
              style={{
                borderWidth: 1,
                borderColor: active ? colors.teal : colors.line,
                backgroundColor: active ? colors.teal : 'transparent',
                borderRadius: radius.pill,
                paddingVertical: 6,
                paddingHorizontal: 12,
              }}
            >
              <Text style={{ fontSize: 10, color: active ? colors.parchment : colors.inkSoft }}>{item}</Text>
            </Pressable>
          );
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: spacing.md,
              borderBottomWidth: 1,
              borderBottomColor: colors.line,
            }}
            onPress={() => router.push(`/country/${item.id}`)}
          >
            <Text style={{ fontSize: 14.5, fontWeight: '500', color: colors.ink }}>{item.name}</Text>
            <Text style={{ fontSize: 10, color: colors.inkSoft }}>{item.region.toLowerCase()}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
