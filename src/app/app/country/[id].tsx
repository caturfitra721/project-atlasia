import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { router, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { radius, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import StatCard from '../../components/ui/StatCard';
import Tag from '../../components/ui/Tag';
import OutlineButton from '../../components/ui/OutlineButton';
import PrimaryButton from '../../components/ui/PrimaryButton';
import ProgressBar from '../../components/ui/ProgressBar';
import { useThemeColors } from '../../context/ThemeContext';
import { getCountryProgress, CountryProgress, getPremiumStatus } from '../../utils/storage';
import BackButton from '../../components/ui/BackButton';

export default function CountryDetailScreen() {
  const { colors } = useThemeColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? '');
  const [progress, setProgress] = useState<CountryProgress | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  // useFocusEffect: baca ulang progres setiap kali layar ini dibuka lagi
  // (misalnya balik dari kuis) — supaya angkanya selalu up-to-date
  useFocusEffect(
    useCallback(() => {
      if (!country) return;
      getCountryProgress(country.id).then(setProgress);
      getPremiumStatus().then(setIsPremium);
    }, [country?.id])
  );

  if (!country) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
        <Text style={{ padding: spacing.xl, color: colors.ink }}>Negara tidak ditemukan.</Text>
      </SafeAreaView>
    );
  }

  const answeredCount = progress?.answeredCount ?? 0;
  const totalQuiz = country.quiz.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={[styles.hero, { backgroundColor: colors.teal }]}>
          <BackButton color={colors.parchment} />
          <Text style={{ color: colors.parchment, fontSize: 26, fontWeight: '600', marginBottom: 4 }}>
            {country.name}
          </Text>
          <Text style={{ color: colors.parchment, opacity: 0.85, fontSize: 12.5 }}>
            Ibu kota — {country.capital}
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.statsRow}>
            <StatCard value={country.population} label="populasi" />
            <StatCard value={country.language} label="bahasa" />
            <StatCard value={country.currency} label="mata uang" />
          </View>

          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.ink, marginBottom: spacing.sm }}>
            Sekilas budaya
          </Text>
          <Text style={{ fontSize: 13, lineHeight: 20, color: colors.inkSoft, marginBottom: spacing.lg }}>
            {country.aboutCulture}
          </Text>

          <View style={styles.tagsRow}>
            {country.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </View>

          {/* KONTEN PREMIUM — ini yang membedakan mode gratis vs premium.
              Kalau belum premium: konten disamarkan + ada tombol buka.
              Kalau sudah premium: konten asli langsung terlihat. */}
          <View
            style={{
              borderRadius: radius.lg,
              borderWidth: 1.5,
              borderColor: isPremium ? colors.gold : colors.line,
              padding: spacing.lg,
              marginBottom: spacing.xl,
              backgroundColor: isPremium ? 'rgba(176,129,47,0.06)' : colors.parchmentDeep,
            }}
          >
            <Text style={{ fontSize: 10, color: colors.goldDeep, fontWeight: '700', marginBottom: spacing.sm }}>
              {isPremium ? '★ MODUL PREMIUM' : '🔒 MODUL PREMIUM'}
            </Text>

            {isPremium ? (
              <Text style={{ fontSize: 12.5, lineHeight: 20, color: colors.inkSoft }}>
                Sejarah panjang {country.name} dimulai dari peradaban kuno, melalui masa kolonial,
                hingga transformasi menjadi negara modern. Demografinya juga unik — perpaduan etnis,
                agama, dan tradisi yang membentuk identitas budaya saat ini secara mendalam.
              </Text>
            ) : (
              <>
                <Text style={{ fontSize: 12.5, lineHeight: 20, color: colors.inkSoft, marginBottom: spacing.md }} numberOfLines={2}>
                  Sejarah panjang {country.name} dimulai dari peradaban kuno, melalui masa kolonial...
                  <Text style={{ color: colors.inkSoft, opacity: 0.4 }}> [konten terkunci]</Text>
                </Text>
                <OutlineButton label="Buka modul premium" onPress={() => router.push('/premium')} />
              </>
            )}
          </View>

          <View style={[styles.progressCard, { backgroundColor: colors.parchmentDeep }]}>
            <View style={styles.progressTopRow}>
              <Text style={{ fontSize: 10, color: colors.goldDeep }}>PROGRES KUIS</Text>
              <Text style={{ fontSize: 13, fontWeight: '600', color: colors.ink }}>
                {answeredCount} / {totalQuiz} soal
              </Text>
            </View>
            <ProgressBar progress={totalQuiz ? answeredCount / totalQuiz : 0} />
            <Text style={{ fontSize: 11, color: colors.inkSoft, marginTop: spacing.sm }}>
              {progress?.completed
                ? `Selesai! Skor: ${progress.score}/${progress.totalQuestions}`
                : `Selesaikan kuis untuk mendapat sertifikat ${country.name}.`}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.stickyCta, { backgroundColor: colors.parchment }]}>
        <PrimaryButton label="Mulai Kuis" onPress={() => router.push(`/quiz/${country.id}`)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hero: { paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.xxl },
  body: { paddingHorizontal: spacing.xl, paddingTop: spacing.xl },
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  tagsRow: { flexDirection: 'row', gap: 7, flexWrap: 'wrap', marginBottom: spacing.xxl },
  progressCard: { borderRadius: radius.lg, padding: spacing.lg },
  progressTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stickyCta: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: spacing.xl },
});
