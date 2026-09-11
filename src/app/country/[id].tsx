import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { colors, radius, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import StatCard from '../../components/ui/StatCard';
import Tag from '../../components/ui/Tag';
import OutlineButton from '../../components/ui/OutlineButton';
import PrimaryButton from '../../components/ui/PrimaryButton';
import ProgressBar from '../../components/ui/ProgressBar';

export default function CountryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? '');

  if (!country) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ padding: spacing.xl }}>Negara tidak ditemukan.</Text>
      </SafeAreaView>
    );
  }

  // TODO: ganti dengan progres asli dari AsyncStorage / state global
  const answeredCount = 0;
  const totalQuiz = country.quiz.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.hero}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.back}>‹ KEMBALI</Text>
          </Pressable>
          <Text style={styles.countryName}>{country.name}</Text>
          <Text style={styles.capital}>Ibu kota — {country.capital}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.statsRow}>
            <StatCard value={country.population} label="populasi" />
            <StatCard value={country.language} label="bahasa" />
            <StatCard value={country.currency} label="mata uang" />
          </View>

          <Text style={styles.sectionTitle}>Sekilas budaya</Text>
          <Text style={styles.paragraph}>{country.aboutCulture}</Text>

          <View style={styles.tagsRow}>
            {country.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </View>

          {/* Perbaikan 1: tombol premium jadi outline (sekunder) */}
          <OutlineButton
            label="Buka modul premium"
            onPress={() => router.push('/premium')}
            style={{ marginBottom: spacing.xl }}
          />

          {/* Perbaikan 2: isi ruang kosong dengan progres kuis */}
          <View style={styles.progressCard}>
            <View style={styles.progressTopRow}>
              <Text style={styles.progressLabel}>PROGRES KUIS</Text>
              <Text style={styles.progressCount}>
                {answeredCount} / {totalQuiz} soal
              </Text>
            </View>
            <ProgressBar progress={totalQuiz ? answeredCount / totalQuiz : 0} />
            <Text style={styles.progressHint}>
              Selesaikan kuis untuk mendapat sertifikat {country.name}.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Perbaikan 3: tombol Mulai Kuis sticky di bawah */}
      <View style={styles.stickyCta}>
        <PrimaryButton label="Mulai Kuis" onPress={() => router.push(`/quiz/${country.id}`)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment },
  hero: {
    backgroundColor: colors.teal,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  back: { color: colors.parchment, opacity: 0.8, fontSize: 11, marginBottom: spacing.xl },
  countryName: { color: colors.parchment, fontSize: 26, fontWeight: '600', marginBottom: 4 },
  capital: { color: colors.parchment, opacity: 0.85, fontSize: 12.5 },
  body: { paddingHorizontal: spacing.xl, paddingTop: spacing.xl },
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: colors.ink, marginBottom: spacing.sm },
  paragraph: { fontSize: 13, lineHeight: 20, color: colors.inkSoft, marginBottom: spacing.lg },
  tagsRow: { flexDirection: 'row', gap: 7, flexWrap: 'wrap', marginBottom: spacing.xxl },
  progressCard: {
    backgroundColor: colors.parchmentDeep,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  progressTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressLabel: { fontSize: 10, color: colors.goldDeep },
  progressCount: { fontSize: 13, fontWeight: '600', color: colors.ink },
  progressHint: { fontSize: 11, color: colors.inkSoft, marginTop: spacing.sm },
  stickyCta: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.xl,
    backgroundColor: colors.parchment,
  },
});
